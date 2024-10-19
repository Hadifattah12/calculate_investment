import logo from '../assets/logo.png'

export default function Header(){
    return (
        <header id='header'>
            <img src={logo} alt='logo show a money bag'/>
            <h1>Investment calculator</h1>
        </header>
    );
}