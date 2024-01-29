import { connect } from 'react-redux'
import Home from '../components/Home'
import {addToCart, removeCartItem} from '../services/Actions/actions'


const mapStateToProps = state => ({
    cartData:state
})
const mapDispatchToProps = dispatch =>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeCartHandler:id=>dispatch(removeCartItem(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)