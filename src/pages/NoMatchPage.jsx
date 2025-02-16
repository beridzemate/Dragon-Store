import { useNavigate } from "react-router-dom";

export const NoMatchPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-dragon-red mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">The page you're looking for doesn't exist.</p>
      <button
        onClick={() => navigate("/")}
        className="bg-dragon-red text-white px-6 py-2 rounded hover:bg-red-800"
      >
        Return Home
      </button>
    </div>
  );
};
export default NoMatchPage;