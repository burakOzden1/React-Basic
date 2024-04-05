import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "@picocss/pico"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


/*
yapilacaklar: 
- [x] default olarak hicbir gorsel secilmesin ve bu durumda gorsel secilmedi component i ekranda gozuksun
- [x] products icerisinde id, name, imgName, thumbnail, isAvailable(true/false), isActive(false)
- [x] lorem picsum gorselleri imgName icinde ve thumbnail icinde tutulsun
- [x] bolum sonu calismasi v1 layout uygulansin
- [x] Img Thumbnail altinda sec butonu olsun ve sec dendiginde isActive true olsun
*/

/*
bolum sonu calismasi v1:
- [x]: Pico CSS Kullanilsin
- [x]: Ana Gorsel Olsun
- [x]: Hemen Altta 5 Adet Kucuk Gorsel Olsun
- [x]: Kucuk Gorsellerden Birine Tiklaninca Ana Gorsel Degissin
- [x]: Gorsel Lorem Picsum'dan Gelsin
- [x]: Default Olarak 200 Nolu ID Secilsin
- [x]: Gorseller ARRAY Olarak [200, 201, 202, 203, 204]
*/