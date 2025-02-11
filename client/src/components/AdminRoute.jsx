import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function AdminRoute({ children }) {
  const { currentUser } = useAuth()

  if (!currentUser?.isAdmin) {
    return <Navigate to="/" replace />
  }

  return children
}