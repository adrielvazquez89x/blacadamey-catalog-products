import './Header.css';

export default function Header() {
    return (
        <header className="main-header">
            <h1>BL Academy Fashion Store</h1>
            <nav>
                <ul>
                    <li><a href="/">Products</a></li>
                    <li><a href="/favorites">Favorites</a></li>
                </ul>
            </nav>
        </header>
    );
}
