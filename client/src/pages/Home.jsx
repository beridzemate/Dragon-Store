import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import { theme } from '../theme';

const HeroSection = styled.section`
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
              url('/asian-sauces-banner.jpg');
  background-size: cover;
  background-position: center;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${theme.colors.light};
  margin-bottom: 4rem;

  h1 {
    font-family: ${theme.fonts.logo};
    font-size: 4rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  }
`;

const FeaturedSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  h2 {
    color: ${theme.colors.dark};
    border-bottom: 3px solid ${theme.colors.primary};
    padding-bottom: 1rem;
    margin-bottom: 2rem;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 1rem 0;
`;

export default function HomePage() {
  // In real app, fetch featured products from API
  const featuredProducts = [
    // Sample products
  ];

  return (
    <>
      <HeroSection>
        <div>
          <h1>Asian Sauce Delights</h1>
          <p>Discover Authentic Flavors of Asia</p>
        </div>
      </HeroSection>

      <FeaturedSection>
        <h2>Featured Sauces 🌟</h2>
        <ProductsGrid>
          {featuredProducts.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </ProductsGrid>
      </FeaturedSection>
    </>
  );
}