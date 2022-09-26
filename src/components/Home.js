import React from 'react'
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className='add-to-cart'>
                <img src='https://cdn0.iconfinder.com/data/icons/e-commerce-vol-2/512/1-512.png' />
            </div>
            <h1>Home Component</h1>
            <div className='cart-wrapper'>
                <div className='image-wrapper item'>
                    <img src='https://www.mantraman.in/wp-content/uploads/2022/02/ade-Black.jpg' />
                </div>
                <div className='text-wrapper item'>
                    <span>
                        Oppo
                    </span>
                    <span>
                        Price: 17,500 Rupees
                    </span>
                </div>
                <div className='btn-wrapper item'>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home