import './Header.css'
import styled from 'styled-components'

const HeaderStyled = styled.header`
    background-color: ${props => props.theme.pageBackground};
    color: ${props => props.theme.color};
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px 10px 10px;
    transition: all .5s ease;
`;

const Link = styled.a`
    color: ${props => props.theme.color};
    text-decoration: none;
    transition: all .5s ease;
    &:hover{
        opacity: 60%;   
    }
`;

const Button = styled.button`
    margin: 0;
    padding: 0;
    width: 200px;
    height: 50px;
    border:none;
    outline: none;
    background-color: ${props => props.theme.buttonColor};
    color: ${props => props.theme.color};
    transition: all .5s ease;
    cursor: pointer;
    border: 0.5px solid #454851;
    &:hover{
        opacity: 60%;
    }
    &:active{
        transform: scale(0.98);
    }
`;

const Title = styled.h1`
    margin: 10px 0 0;
    padding-top: 5px;
    border-top: 1px solid ${props => props.theme.color};
`;

function Header(props) {
    return (
        <HeaderStyled>
            <div className="header__container">
                <Link className="header__link" href="#">Ссылка</Link>
                <Link className="header__link" href="#">Ссылка</Link>
            </div>
            <div className="header__paragraph">
                <Title className="header__title">Тестовый текст</Title>
                <p className="header__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed ullamcorper morbi tincidunt ornare. Vel orci porta non pulvinar. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Eget est lorem ipsum dolor sit amet consectetur. Neque sodales ut etiam sit amet nisl purus in mollis. Mattis aliquam faucibus purus in massa tempor.</p>
                <Button className="header__button">Большая кнопка</Button>
            </div>
        </HeaderStyled>
    )
}

export default Header