import React from 'react'

const Header = () => {
  return (
    <div className="HeaderSection">
        <div className="left">
        <div className="titile">
                <h1>Shop for all</h1>
            </div>
        </div>

        <div className="center">
            <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Children</li>
                <li>Girls</li>
            </ul>           
        </div>
        <div className="searchbar">
            <input type="text" placeholder='Search...' />
        </div>

        <div className="right">
            <div className="sing">
                Signin/Signup
            </div>
            <div className="cart">
                Cart
            </div>
        </div>  

    </div>
  
  )
}

export default Header