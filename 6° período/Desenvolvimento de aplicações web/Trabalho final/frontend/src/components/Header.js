import { NavLink } from "react-router-dom";

export default function Header(){
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className='navbar-brand' to='/'>
                        <img src='https://coens.dv.utfpr.edu.br/site/wp-content/themes/flaton/images/utfbranco.png' alt='' height='30' />
                    </NavLink>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">                         
                            <li className="nav-item">
                                <NavLink className='nav-link' to='/'>
                                    Home
                                </NavLink>
                            </li>
                        
                            <li className="nav-item">
                                <NavLink className='nav-link' to='/sobre'>
                                    Sobre
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className='nav-link' to='/login'>
                                    Login
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}