// src/admin/components/ProductForm.jsx
import { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';
import axios from 'axios';

const FormContainer = styled.div`
  background: ${theme.colors.light};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 2px solid ${theme.colors.primary};
  border-radius: 8px;
  font-family: ${theme.colors.primary};
`;

const SubmitButton = styled.button`
  background: ${theme.colors.primary};
  color: ${theme.colors.light};
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${theme.colors.secondary};
  }
`;

export default function ProductForm({ product }) {
  const [formData, setFormData] = useState(product || {
    name: '',
    description: '',
    price: 0,
    discount: 0,
    category: 'sauce',
    image: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (product) {
        await axios.put(`/api/products/${product._id}`, formData);
      } else {
        await axios.post('/api/products', formData);
      }
      // Handle success
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  return (
    <FormContainer>
      <h2>{product ? 'Edit Sauce' : 'Add New Sauce'}</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          placeholder="Sauce Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <FormInput
          as="textarea"
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
        />
        <FormInput
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({...formData, price: e.target.value})}
        />
        <FormInput
          type="number"
          placeholder="Discount %"
          value={formData.discount}
          onChange={(e) => setFormData({...formData, discount: e.target.value})}
        />
        <FormInput
          type="text"
          placeholder="Image URL"
          value={formData.image}
          onChange={(e) => setFormData({...formData, image: e.target.value})}
        />
        <SubmitButton type="submit">
          Save Sauce 🌶️
        </SubmitButton>
      </form>
    </FormContainer>
  );
}