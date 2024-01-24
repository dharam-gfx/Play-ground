import { connect } from 'react-redux'
import Home from '../components/Home'
import {addToCart} from '../services/Actions/actions'


const mapDispatchToProps = dispatch =>({
    addToCartHandler:data=>dispatch(addToCart(data))
})
const mapStateToProps = state => ({
    cartData:state
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)