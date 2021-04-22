import './StyleChange.css'
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-around;
    padding: 20px 10px 0;
    background-color: ${props => props.theme.pageBackground};
    color: ${props => props.theme.color};
    transition: all .5s ease;
`;

const Title = styled.h2`
    border-top: 1px solid ${props => props.theme.color};
    margin-top: 0;
    padding-top: 10px;
    flex-basis: 100%;
    text-align: center;
    transition: all .5s ease;
`;

const Button = styled.button`
    margin: 0;
    padding: 0;
    height: 40px;
    width: 90px;
    border:none;
    outline: none;
    background-color: ${props => props.theme.buttonColor};
    color: ${props => props.theme.color};
    transition: opacity 0.5s;
    cursor: pointer;
    flex-basis: 20%;
    border: 0.5px solid #454851;
    transition: all .5s ease;
    $:hover {
        button{
            opacity: 60%;
        }
    }
`;

function StyleChange (props) {
    function firstThemeChanger(){
        setTimeout(() => {
            if(props.theme !== 'first'){
                props.setTheme('first')
            } else props.setTheme('default')
        }, 1000);
    }

    function secondThemeChanger(){
        if(props.theme !== 'second'){
            props.setTheme('second')
        } else props.setTheme('default')
    }

    function thirdThemeChanger(){
        if(props.theme !== 'third'){
            props.setTheme('third')
        } else props.setTheme('default')
    }

    function fourthThemeChanger(){
        if(props.theme !== 'fourth'){
            props.setTheme('fourth')
        } else props.setTheme('default')
    }

    return (
        <Section>
            <Title>Choose page style</Title>
            <Button onClick={firstThemeChanger} className="styles__button">Style 1</Button>
            <Button onClick={secondThemeChanger} className="styles__button">Style 2</Button>
            <Button onClick={thirdThemeChanger}className="styles__button">Style 3</Button>
            <Button onClick={fourthThemeChanger} className="styles__button">Style 4</Button>
            <p className="styles__text">This is change style buttons. They will eventually change background color, text color and probably more</p>
        </Section>
    )
}

export default StyleChange