import './HourGlass.css'
import hourGlass from '../images/hourglass.png'
 
function HourGlass (props) {
    return(
        <div className={`hourglass ${props.hourGlassAnim ? 'hourglass_opened' : ''}`}>
            <img className={`hourglass__icon ${props.hourGlassAnim ? 'hourglass__icon_animate' : ''}`} src={hourGlass}/>
        </div>
    )
}

export default HourGlass