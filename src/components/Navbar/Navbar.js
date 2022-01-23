
import React, { Component } from 'react';
import {MenuItems} from "./MenuItems"
import "./Navbar.css";
class Navbar extends Component{
    state={clicked:false}

    render(){
        return (
          <nav className="NavbarItems">
            <h1 className="Navbar-logo">
              Explore<i className="fab fa-react"></i>
            </h1>

            <div className="menu-icon" onClick={this.handleClick}></div>
            <ul className="menu">
              {MenuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <a className={item.cName} href={item.url}>
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>

            <button className="btn-Sign-in">Sign in</button>

            <button className="btn-Sign-up">Sign up</button>
          </nav>
        );
    }
}
export default Navbar