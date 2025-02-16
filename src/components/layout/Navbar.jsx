// import { Link, useNavigate } from 'react-router-dom';
// import { auth } from '../../services/firebase/config';
// import { useAuth } from '../../contexts/AuthContext';
// import { Button } from '../ui/Button';

// const Navbar = () => {
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await auth.signOut();
//       navigate('/login');
//     } catch (error) {
//       console.error('Logout failed:', error);
//     }
//   };

//   return (
//     <nav className="bg-dragon-red text-white p-4 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/" className="flex items-center gap-2">
//           <span className="text-2xl font-bold">🐉 Dragon Sauces</span>
//         </Link>

//         <div className="flex items-center gap-6">
//           <Link to="/products" className="hover:text-red-200 transition-colors">
//             Shop
//           </Link>
          
//           {user?.isAdmin && (
//             <Link to="/admin" className="hover:text-red-200 transition-colors">
//               Dashboard
//             </Link>
//           )}

//           {user ? (
//             <Button 
//               onClick={handleLogout}
//               className="bg-white text-dragon-red hover:bg-gray-100 ml-4"
//             >
//               Logout
//             </Button>
//           ) : (
//             <Link to="/login">
//               <Button className="bg-white text-dragon-red hover:bg-gray-100 ml-4">
//                 Login
//               </Button>
//             </Link>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;