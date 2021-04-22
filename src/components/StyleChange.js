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

function StyleChange(props) {
    function firstThemeChanger() {
        props.setHourGlassAnim(true)
        setTimeout(() => {
            if (props.theme !== 'first') {
                props.setHourGlassAnim(false)
                props.setTheme('first')
            } else
                props.setTheme('default')
            props.setHourGlassAnim(false)
        }, 1000);
    }

    function secondThemeChanger() {
        props.setHourGlassAnim(true)
        setTimeout(() => {
            if (props.theme !== 'second') {
                props.setHourGlassAnim(false)
                props.setTheme('second')
            } else
                props.setTheme('default')
            props.setHourGlassAnim(false)
        }, 1000);
    }

    function thirdThemeChanger() {
        props.setHourGlassAnim(true)
        setTimeout(() => {
            if (props.theme !== 'third') {
                props.setHourGlassAnim(false)
                props.setTheme('third')
            } else
                props.setTheme('default')
            props.setHourGlassAnim(false)
        }, 1000);
    }

    function fourthThemeChanger() {
        props.setHourGlassAnim(true)
        setTimeout(() => {
            if (props.theme !== 'fourth') {
                props.setHourGlassAnim(false)
                props.setTheme('fourth')
            } else
                props.setTheme('default')
            props.setHourGlassAnim(false)
        }, 1000);
    }

    return (
        <Section>
            <Title>Выберите стиль страницы</Title>
            <Button onClick={firstThemeChanger} className="styles__button">Стиль 1</Button>
            <Button onClick={secondThemeChanger} className="styles__button">Стиль 2</Button>
            <Button onClick={thirdThemeChanger} className="styles__button">Стиль 3</Button>
            <Button onClick={fourthThemeChanger} className="styles__button">Стиль 4</Button>
            <p className="styles__text">Это кнопки выбора стиля, они меняют цвет фона, текста и цвет кнопок</p>
        </Section>
    )
}

export default StyleChange