import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Skills } from './pages/Skills'
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-bg-page text-neutral-200 font-sans">
    <Navbar />
    <main className="pt-16">{children}</main>
    <Footer />
  </div>
)

export const routes = [
  {
    path: '/',
    element: <Layout><Home /></Layout>,
  },
  {
    path: '/about',
    element: <Layout><About /></Layout>,
  },
  {
    path: '/skills',
    element: <Layout><Skills /></Layout>,
  },
  {
    path: '/projects',
    element: <Layout><Projects /></Layout>,
  },
  {
    path: '/contact',
    element: <Layout><Contact /></Layout>,
  },
]