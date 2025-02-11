import styled from 'styled-components';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import { theme } from '../theme';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const Filters = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  select, input {
    padding: 0.8rem;
    border: 2px solid ${theme.colors.primary};
    border-radius: 8px;
    font-family: ${theme.fonts.primary};
    min-width: 200px;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`/api/products?category=${category}&search=${searchTerm}`);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category, searchTerm]);

  return (
    <PageContainer>
      <h1>Our Sauce Collection 🍶</h1>
      
      <Filters>
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Sauces</option>
          <option value="soy">Soy Sauces</option>
          <option value="chili">Chili Sauces</option>
          <option value="hoisin">Hoisin Sauces</option>
        </select>
        
        <input
          type="text"
          placeholder="Search sauces..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Filters>

      <ProductsGrid>
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </ProductsGrid>
    </PageContainer>
  );
}