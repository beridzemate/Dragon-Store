import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import Header from '../components/client/Header'
import Footer from '../components/client/Footer'
import { theme } from '../theme'

const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${theme.colors.light};
`

const Main = styled.main`
  flex: 1;
  padding: 2rem 0;
`

export default function ClientLayout() {
  return (
    <Layout>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Layout>
  )
}