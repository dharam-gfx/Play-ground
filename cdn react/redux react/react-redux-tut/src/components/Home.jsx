import React from 'react'

const Home = (props) => {
    console.log("props",props);
    return (
        <div>
            <h1 className="text-3xl font-bold underline text-red-700">
                Hello world!
            </h1>

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
                        price:45000,
                        name:"iphone 15"
                    })} className='bg-red-600 p-2 rounded text-white'>add to card</button>
                </div>

            </div>

            <div>
            <img className='w-12 absolute top-5 right-5' src='https://th.bing.com/th/id/R.c5b9a01d3df7bc6728d7293714fff622?rik=521K%2fkaY4OH4WA&riu=http%3a%2f%2fwww.inmotionhosting.com%2fsupport%2fimages%2fstories%2ficons%2fecommerce%2fadd-to-cart-light.png&ehk=%2fJJA9XMsvG9h0FWr%2fDtkK%2fFW4cJL1CpuNRASuT3Tlg4%3d&risl=&pid=ImgRaw&r=0'/>

            </div>

        </div>
    )
}

export default Home