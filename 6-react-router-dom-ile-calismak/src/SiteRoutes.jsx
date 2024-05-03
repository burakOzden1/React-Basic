import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
import { ProductLayout, Products } from './products'
// import Product from './products/Product'

export default function SiteRoutes() {
    return (
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/products' element={<ProductLayout/>}>
          <Route index={true} element={<Products/>}/>

          </Route>
          <Route path='*' element={<PageNotFound/>}/> {/* eger yukaridaki rootlar disinda bir root girilirse PageNotFound sayfasina yonlendirir.*/}
        </Routes>
    )
}