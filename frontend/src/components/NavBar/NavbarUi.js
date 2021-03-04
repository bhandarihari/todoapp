import React from 'react';
import {Link} from 'react-router-dom'

export default function NavbarUi(props) {
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg  navbar-light bg-secondary text-decoration-none" >
                <div className=" navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ml-5 ">
                        <li className="nav-item border-right ">
                        <Link className="nav-link mr-4 text-white" to="/view_list">View List </Link>
                        </li>
                        <li className="nav-item  ml-3">
                        <Link className="nav-link mr-4 text-white" to="/add_list">Add </Link>
                        </li>
                    </ul>
               
                </div>
                <div className="float-right mr-3">
                <button className="btn btn-primary " onClick={props.onLogout} >Log Out</button>
                      </div>
            </nav>
        </div>
    )
}
