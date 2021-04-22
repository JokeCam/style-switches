import './Header.css'
import logoBlack from '../images/calc.svg'

function Header() {
    return (
        <header className="header">
            <img className="header__icon" src={logoBlack} />
            <div className="header__container">
                <a className="header__link" href="#">Home</a>
                <a className="header__link" href="#">About</a>
            </div>
            <div className="header__paragraph">
                <h1 className="header__title">Placeholder text</h1>
                <p className="header__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed ullamcorper morbi tincidunt ornare. Vel orci porta non pulvinar. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Eget est lorem ipsum dolor sit amet consectetur. Neque sodales ut etiam sit amet nisl purus in mollis. Mattis aliquam faucibus purus in massa tempor.</p>
                <button className="header__button">Big button</button>
            </div>
        </header>
    )
}

export default Header