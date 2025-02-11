import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import AdminSidebar from '../components/admin/Sidebar'
import { theme } from '../theme'

const Layout = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  min-height: 100vh;
  background: ${theme.colors.light};
`

const Main = styled.main`
  padding: 2rem;
  background: #f5f5f5;
`

export default function AdminLayout() {
  return (
    <Layout>
      <AdminSidebar />
      <Main>
        <Outlet />
      </Main>
    </Layout>
  )
}