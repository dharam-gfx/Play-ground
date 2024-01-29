import React from 'react'
import WishListContainer from '../containers/WishListContainer';

const Home = (props) => {
    console.log("props",props);
    return (
        <div>
            <WishListContainer></WishListContainer>

            <div className='border rounded border-red-600 p-2 inline-flex space-x-5 justify-center items-center'>
                <div className=''>
                    <img className='w-10' src='https://th.bing.com/th/id/OIP.EN6R9tEWgyjOqXOSTKR5igHaO0?w=115&h=180&c=7&r=0&o=5&pid=1.7' />
                </div>
                <div>
                    <h4  className="text-green-600">Iphone</h4>
                    <p>Price: 400</p>
                </div>
                <div>
                    <button onClick={()=>props.addToCartHandler({
                        id:props.cartData.cartItems.length,
                        price:45000,
                        name:"iphone 15"
                    })} className='bg-red-600 p-2 rounded text-white'>add to card</button>
                    <button onClick={()=>props.removeCartHandler({
                      id:1
                    })} className='bg-red-600 p-2 rounded text-white'>remove</button>
                </div>

            </div>



        </div>
    )
}

export default Home