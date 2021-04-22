import './Images.css'
import styled from 'styled-components'

const Section = styled.div`
    position: relative;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(auto-fit, 250px);
    row-gap: 20px;
    column-gap: 20px;
    justify-content: center;
    background-color: ${props => props.theme.pageBackground};
    padding-bottom: 15px;
    transition: all .5s ease;
    @media (max-width: 805px) {
        grid-template-columns: 300px;
    }
`;

function Images () {
    return (
        <Section className="images">
            <img alt="Фотография горы из далека" className="images__item" src="https://images.unsplash.com/photo-1556336303-51307dbff544?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"></img>
            <img alt="Фотография моста со стороны" className="images__item" src="https://images.unsplash.com/photo-1619045731068-0983f0e8281c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"></img>
            <img alt="Фотография здания сбоку"className="images__item" src="https://images.unsplash.com/photo-1619032680861-145ba2dae029?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"></img>
        </Section>
    )
}

export default Images