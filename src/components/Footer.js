import './Footer.css'
import styled from 'styled-components'

const Section = styled.footer`
    background-color: ${props => props.theme.pageBackground};
    display: flex;
    justify-content: space-between;
    padding: 15px 10px 10px;
    border-top: 1px solid ${props => props.theme.color};
    color: ${props => props.theme.color};
    transition: all .5s ease;
`;

const Link = styled.a`
    text-decoration: none;
    transition: opacity 0.5s;
    color: ${props => props.theme.color};
    &:hover{
        opacity: 60%;
    }
`;

function Footer() {
    return (
        <Section className="footer">
            <ul className="footer__copyright">
                <li>Ссылки на соцсети</li>
                <li>Копирайт сюда</li>
            </ul>
            <div className="footer__links">
                <ul className="footer__column">
                    <Link href="#">Ссылка</Link>
                    <Link href="#">Ссылка</Link>
                </ul>
                <ul className="footer__column">
                    <Link href="#">Ссылка</Link>
                    <Link href="#">Ссылка</Link>
                </ul>
            </div>
        </Section>
    )
}

export default Footer

