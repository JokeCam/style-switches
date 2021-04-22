import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <ul className="footer__copyright">
                <li>Social goes here</li>
                <li>Copyright goes here</li>
            </ul>
            <div className="footer__links">
            <ul className="footer__column">
                <a className="footer__link" href="#">Link goes here</a>
                <a className="footer__link" href="#">Link goes here</a>
            </ul>
            <ul className="footer__column">
                <a className="footer__link" href="#">Link goes here</a>
                <a className="footer__link" href="#">Link goes here</a>
            </ul>
            </div>
        </footer>
    )
}

export default Footer

