import { Link } from 'react-router-dom';
import './styles.css'

const Header = ()=>{
    return (
        <div className='header_container'>
            <div className='header_sub_container'>
                <div className='nav_container' >
                    <div className='nav_link'>
                        <Link to="/">Home</Link>
                    </div>
                    <div className= 'nav_link'>
                        <Link to="add-car/">Add Car</Link>
                    </div>
                </div>
                <div>
                    <Link to="/login">Login/Signup</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Header;