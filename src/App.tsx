import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProductProvider } from './hooks/useProducts'
import { Home } from './pages/Home'
import { Catalog } from './pages/Catalog'
import { ProductDetail } from './pages/ProductDetail'
import { AdminProducts } from './pages/AdminProducts'

function App() {
  return <BrowserRouter><ProductProvider><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/catalogo" element={<Catalog />} />
    <Route path="/producto/:id" element={<ProductDetail />} />
    <Route path="/admin/productos" element={<AdminProducts />} />
  </Routes></ProductProvider></BrowserRouter>
}

export default App
