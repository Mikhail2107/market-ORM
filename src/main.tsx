import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App/App.tsx'
import { store } from './entities/store.ts'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <Provider store ={store}>
    <App />
  </Provider>,
)
