import './PhotoComponent.css'
import PerfumeImg from '/assets/perfume.jpg'
function PhotoComponent() {
    return (
        <div id="PhotoDiv" >
            <img src={PerfumeImg} id='MyImg'></img>
        </div>
    )
}
export default PhotoComponent