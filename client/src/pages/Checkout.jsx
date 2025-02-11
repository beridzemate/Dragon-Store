import styled from 'styled-components';
import { useCart } from '../context/CartContext';
import { theme } from '../theme';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CheckoutContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const CheckoutForm = styled.div`
  background: ${theme.colors.light};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

const FormRow = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: ${theme.colors.dark};
  }

  input, textarea {
    width: 100%;
    padding: 0.8rem;
    border: 2px solid ${theme.colors.primary};
    border-radius: 8px;
    font-family: ${theme.fonts.primary};
  }

  .error {
    color: ${theme.colors.primary};
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }
`;

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  address: Yup.string().required('Required'),
  cardNumber: Yup.string()
    .matches(/^\d{16}$/, 'Must be 16 digits')
    .required('Required'),
});

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleSubmit = async (values) => {
    // Handle order submission
    try {
      await axios.post('/api/orders', {
        ...values,
        products: cartItems,
        total
      });
      clearCart();
      // Redirect to success page
    } catch (error) {
      console.error('Order submission failed:', error);
    }
  };

  return (
    <CheckoutContainer>
      <h1>Complete Your Order 🚚</h1>
      
      <Formik
        initialValues={{ name: '', email: '', address: '', cardNumber: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <CheckoutForm>
            <Form>
              <FormRow>
                <label>Full Name</label>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="div" className="error" />
              </FormRow>

              <FormRow>
                <label>Email</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" className="error" />
              </FormRow>

              <FormRow>
                <label>Shipping Address</label>
                <Field as="textarea" name="address" rows="4" />
                <ErrorMessage name="address" component="div" className="error" />
              </FormRow>

              <FormRow>
                <label>Card Number</label>
                <Field type="text" name="cardNumber" />
                <ErrorMessage name="cardNumber" component="div" className="error" />
              </FormRow>

              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <h3>Total: ${total.toFixed(2)}</h3>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    background: theme.colors.primary,
                    color: theme.colors.light,
                    padding: '1rem 3rem',
                    borderRadius: '30px',
                    marginTop: '1rem'
                  }}
                >
                  Place Order 🥡
                </button>
              </div>
            </Form>
          </CheckoutForm>
        )}
      </Formik>
    </CheckoutContainer>
  );
}