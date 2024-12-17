import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import RoutesCustom from './routes.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RoutesCustom />
  </BrowserRouter>,
)
