import './DetailsComponent.css'
import CartIcon from '../../assets/icon-cart.svg'

function DetailsComponent() {
    return (
        <div id="DetailsDiv">
            <label id='title'>perfume</label>
            <h1 id='header'>Gabrielle Essence Eau De Perfume</h1>
            <p id='Description'>
                A floral, solar and voluptuous interpretation composed by oliver polge , perfumer-creator for the house of Channel
            </p>
            <div id='PriceDiv'>
                <label id='priceLabel'>$149.99</label>
                <label id='discount'><s>$169.99</s></label>
            </div>
            <button id='cartbtn'>
                <img src={CartIcon}></img>
                <span>Add to cart</span>
            </button>
        </div>
    )
}
export default DetailsComponent