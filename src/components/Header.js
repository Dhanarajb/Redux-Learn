import React from 'react'
const Header = (props) => {
    // console.log("header",props.data)
    return (
        <div>
            <div className='add-to-cart'>
                <span className='cart-count'>{props.data.length}</span>
                <img src='https://cdn0.iconfinder.com/data/icons/e-commerce-vol-2/512/1-512.png' />
            </div>
            
        </div>
    )
}

export default Header