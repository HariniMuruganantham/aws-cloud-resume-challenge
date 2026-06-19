import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'
import { ErrorBoundary } from './components/ErrorBoundary'
import './index.css'

export const createRoot = ViteReactSSG(
  { routes },
  ({ app }) => {
    // app.use(plugin) — add plugins here if needed
  }
)