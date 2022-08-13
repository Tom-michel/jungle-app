import '../styles/Cart.css'

const Cart = () => {
    var monsteraPrice = 8
    var lierrePrice = 10
    var bouqPrice = 15
    return(
        <div className="lmj-cart">
            <h2>Panier</h2>
            <ul>
                <li>Monstera : {monsteraPrice}€</li>
                <li>Lierre : {lierrePrice}€</li>
                <li>Fleurs : {bouqPrice}€</li>
            </ul>
            Total : {monsteraPrice + lierrePrice + bouqPrice }€
        </div>
    )
}

export default Cart