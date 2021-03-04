import React from 'react'
import { withRouter ,useHistory} from 'react-router-dom';
import NavbarUi from './NavbarUi';

 const Navbar =()=> {
    const history = useHistory();
    const onLogout=()=>{
        localStorage.removeItem("token");
        history.push("/login")
    }

        return <NavbarUi
            onLogout={onLogout}
        />
}
export const NavbarLogic = withRouter(Navbar);