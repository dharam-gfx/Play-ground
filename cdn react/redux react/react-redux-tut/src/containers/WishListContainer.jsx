
import WishList from '../components/WishList'
import { connect } from 'react-redux'


const mapStateToProps = state=>(
    {
        wishListData:state
    }
)


export default connect(mapStateToProps)(WishList)