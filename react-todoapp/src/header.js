import React from 'react';


const Header = () => {
    return (
        <header>
            <h1 class="App-header"><b>To Do List</b></h1>

            <div>
            <form action="http://127.0.0.1:5000/payment-session" method='post'>
            <button className='pro-button' type="submit" onClick={() =>null}>
                Get Pro
            </button></form>

            <button className="sub-button" onClick={() => null}>
              <i class="fa fa-user"></i>
            </button>
            </div>
            <hr />
        </header>

    );
};

export default Header;