import './Currency.css'
import { useState } from 'react'
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
    justify-content: center;
    background-color: ${props => props.theme.pageBackground};
    transition: all .5s ease;
`;

const Title = styled.h2`
    flex-basis: 100%;
    text-align: center;
    margin-top: 0;
    padding-top: 10px;
    margin-bottom: 0;
    border-top: 1px solid ${props => props.theme.color};
    cursor: pointer;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: all .5s ease;
    color: ${props => props.theme.color};
    &:hover{
        opacity: 60%;
    }
`;

const Paragraph = styled.p`
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    border-top: 1px solid ${props => props.theme.color};
    flex-basis: content;
    transition: all .5s ease;
    color: ${props => props.theme.color};
    &:last-of-type{
        padding-bottom: 0;
    }
`;

const ButtonParagraph = styled.p`
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    border-top: 1px solid ${props => props.theme.color};
    flex-basis: content;
    transition: all .5s ease;
    color: ${props => props.theme.specialColor};
    cursor: pointer;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: opacity .5s;
    &:last-of-type{
        padding-bottom: 0;
    }
    &:hover{
        opacity: 60%;
    }
`;

const ParagraphType = styled.p`
    color: ${props => props.theme.color};
    margin-bottom: 5px;
    transition: all .5s ease;
`;

const TargetName = styled.p`
    margin: 0 10px;
    text-align: center;
    color: ${props => props.theme.color};
    font-size: large;
    transition: all .5s ease;
`;

const TargetValue = styled.p`
    color: ${props => props.theme.color};
    margin: 0 10px 0 0;
    font-size: large;
    transition: all .5s ease;
`;

const PopupWrapper = styled.button`
    max-width: 500px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.pageBackground};
    z-index: 1;
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    transition: all .5s ease;
    &:hover{
        opacity: 60%;
    }
`;

function Currency(props) {
    const [openCurrencies, setOpenCurrencies] = useState(false)
    const [openCurrencyTarget, setOpenCurrencyTarget] = useState(false)
    const [openPopup, setOpenPopup] = useState(false)
    const [currentCurrency, setCurrentCurrency] = useState({})

    function popupClose(){
        setOpenPopup(false)
    }

    function showCurrencies() {
        if (openCurrencies) {
            setOpenCurrencies(false)
            setOpenCurrencyTarget(false)
            setOpenPopup(false)
        } else
            setOpenCurrencies(true)
        setOpenCurrencyTarget(false)
    }

    function currencyTargetClick() {
        if (!openCurrencyTarget) {
            setOpenCurrencyTarget(true)
            setOpenPopup(true)
        }
    }

    function shortClick(res) {
        setCurrentCurrency(
            {
                short: obj[res.target.textContent].short,
                full: obj[res.target.textContent].full,
                amount: obj[res.target.textContent].amount
            }
        )
        currencyTargetClick();
    }

    let currentCurrencyShort = currentCurrency.short
    const obj = []

    return (
        <Section>
            <Title className="currency__title" onClick={showCurrencies}>Курсы валют</Title>
            <div className={`currency__chosen ${openCurrencyTarget ? 'currency__chosen_displayed' : ''}`}>
                <img className="currency__image" alt="Иконка флага" src={`https://flagcdn.com/28x21/${props.currencyCountries[currentCurrencyShort]}.png`}></img>
                <TargetName className="currency__target">{currentCurrency.full}</TargetName>
                <TargetValue className="currency__value">{currentCurrency.amount}</TargetValue>
            </div>
            <div className={`currency__container ${openCurrencies ? "currency__container_displayed" : ''}`}>
                <div className="currency__short-container">
                    <ParagraphType>Букв. код</ParagraphType>
                    {
                        Object.keys(props.initCurrency).map((item) => {
                            return <ButtonParagraph className="currency__item_button" key={item} onClick={shortClick}>{item}</ButtonParagraph>
                        })
                    }
                </div>
                <div className="currency__name-container">
                    <ParagraphType>Валюта</ParagraphType>
                    {
                        Object.keys(props.currencyNames).map((item) => {
                            return <Paragraph key={item}>{props.currencyNames[item]}</Paragraph>
                        })
                    }
                </div>
                <div className="currency__amount-container">
                    <ParagraphType>Курс</ParagraphType>
                    {
                        Object.keys(props.initCurrency).map((item) => {
                            obj[item] = ({
                                short: item,
                                amount: props.initCurrency[item],
                                full: props.currencyNames[item]
                            })
                            return <Paragraph key={item}>{props.initCurrency[item]}</Paragraph>
                        })
                    }
                </div>
            </div>
            <div className={`currency__popup ${openPopup ? 'currency__popup_opened' : ''}`}>
                <PopupWrapper type="button" onClick={popupClose}>
                    <img className="currency__image" alt="Иконка флага" src={`https://flagcdn.com/28x21/${props.currencyCountries[currentCurrencyShort]}.png`}></img>
                    <TargetName className="currency__target">{currentCurrency.full}</TargetName>
                    <TargetValue className="currency__value">{currentCurrency.amount}</TargetValue>
                </PopupWrapper>
            </div>
        </Section>
    )
}

export default Currency