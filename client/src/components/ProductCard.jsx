// src/components/ProductCard.jsx
import styled from 'styled-components';
import { useCart } from '../context/CartContext';
import { theme } from '../theme';

const Card = styled.article`
  background: ${theme.colors.light};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 3px solid ${theme.colors.primary};
`;

const ProductInfo = styled.div`
  padding: 1.5rem;
`;

const ProductTitle = styled.h3`
  font-family: ${theme.fonts.primary};
  color: ${theme.colors.dark};
  margin-bottom: 0.5rem;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
`;

const CurrentPrice = styled.span`
  color: ${theme.colors.primary};
  font-size: 1.5rem;
  font-weight: 700;
`;

const OriginalPrice = styled.span`
  color: ${theme.colors.dark};
  opacity: 0.6;
  text-decoration: line-through;
`;

const AddToCartButton = styled.button`
  background: ${theme.colors.primary};
  color: ${theme.colors.light};
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-family: ${theme.fonts.primary};
  cursor: pointer;
  width: 100%;
  transition: background 0.3s;

  &:hover {
    background: ${theme.colors.secondary};
  }
`;

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const discountedPrice = product.price * (1 - product.discount / 100);

  return (
    <Card>
      <ProductImage src={product.image} alt={product.name} />
      <ProductInfo>
        <ProductTitle>{product.name}</ProductTitle>
        <p>{product.description}</p>
        <PriceContainer>
          <CurrentPrice>${discountedPrice.toFixed(2)}</CurrentPrice>
          {product.discount > 0 && (
            <OriginalPrice>${product.price.toFixed(2)}</OriginalPrice>
          )}
        </PriceContainer>
        <AddToCartButton onClick={() => addToCart(product)}>
          Add to Cart 🥢
        </AddToCartButton>
      </ProductInfo>
    </Card>
  );
}