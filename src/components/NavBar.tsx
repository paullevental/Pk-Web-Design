import Logo from "./Logo";

function NavBar() {
    return (
        <div className="nav-container">
                <ul className="nav nav-underline">
                <li> <Logo /> </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Work</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact Us</a>
                    </li>
                    
                </ul>
        </div>
    );
}

export default NavBar;
