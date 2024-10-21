import { Link } from "react-router-dom";
import "./Header.css"

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <Link to="/catalog" id="btn">  <li>Каталог</li> </Link>
                    <Link to="/about" id="btn">  <li>За нас</li> </Link>
                    <Link to="/" id="btn">  <li>Начало</li> </Link>
                    <Link to="/gallery" id="btn">  <li>Галерия</li> </Link>
                    <Link to="/contacts" id="btn">  <li>Контакти</li> </Link>
                </ul>
            </nav>
        </header>
    );
}
