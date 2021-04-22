import './StyleChange.css'

function StyleChange () {
    return (
        <div className="styles">
            <h2 className="styles__title">Choose page style</h2>
            <button className="styles__button">Style 1</button>
            <button className="styles__button">Style 2</button>
            <button className="styles__button">Style 3</button>
            <button className="styles__button">Style 4</button>
            <p className="styles__text">This is change style buttons. They will eventually change background color, text color and probably more</p>
        </div>
    )
}

export default StyleChange