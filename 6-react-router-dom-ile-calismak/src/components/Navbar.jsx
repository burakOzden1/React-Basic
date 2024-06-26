import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3" data-bs-theme="dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">R-Store</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" to="/">Ana Sayfa</NavLink>
                            <NavLink className="nav-link" to="/products">Ürünler</NavLink>
                            <NavLink className="nav-link" to="/about">Hakkımızda</NavLink>
                            <NavLink className="nav-link" to="/contact">İletisim</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}