import React from 'react'

const WishList = (props) => {

    console.log("wish list",props.wishListData.cartItems);
    return (
        <div>
            <div className='relative border border-red-500 h-20'> 
                <img className='w-12 absolute top-5 right-5' src='https://th.bing.com/th/id/R.c5b9a01d3df7bc6728d7293714fff622?rik=521K%2fkaY4OH4WA&riu=http%3a%2f%2fwww.inmotionhosting.com%2fsupport%2fimages%2fstories%2ficons%2fecommerce%2fadd-to-cart-light.png&ehk=%2fJJA9XMsvG9h0FWr%2fDtkK%2fFW4cJL1CpuNRASuT3Tlg4%3d&risl=&pid=ImgRaw&r=0' />
            </div>
            <span className='bg-red-600 rounded-full px-2 py-0.5 text-white absolute right-3 top-5'>
            {props.wishListData.cartItems.length}</span>
        </div>
    )
}

export default WishList