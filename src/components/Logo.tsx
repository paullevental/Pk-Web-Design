import logo from '../assets/logo.png';

console.log(logo);

function Logo() {
    return (
        <img id="logo" src={logo} alt="Italian Trulli" />
    );
}

export default Logo;