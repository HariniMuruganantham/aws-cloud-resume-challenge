import type { RouteRecord } from 'vite-react-ssg'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Skills } from './pages/Skills'
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: (
      <div className="min-h-screen bg-bg-page text-neutral-200 font-sans">
        <Navbar />
        <main className="pt-16">
          <Home />
        </main>
        <Footer />
      </div>
    ),
  },
  {
    path: '/about',
    element: (
      <div className="min-h-screen bg-bg-page text-neutral-200 font-sans">
        <Navbar />
        <main className="pt-16"><About /></main>
        <Footer />
      </div>
    ),
  },
  {
    path: '/skills',
    element: (
      <div className="min-h-screen bg-bg-page text-neutral-200 font-sans">
        <Navbar />
        <main className="pt-16"><Skills /></main>
        <Footer />
      </div>
    ),
  },
  {
    path: '/projects',
    element: (
      <div className="min-h-screen bg-bg-page text-neutral-200 font-sans">
        <Navbar />
        <main className="pt-16"><Projects /></main>
        <Footer />
      </div>
    ),
  },
  {
    path: '/contact',
    element: (
      <div className="min-h-screen bg-bg-page text-neutral-200 font-sans">
        <Navbar />
        <main className="pt-16"><Contact /></main>
        <Footer />
      </div>
    ),
  },
]