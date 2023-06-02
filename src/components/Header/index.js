import { Link } from 'react-router-dom';
import {FaFacebookF, FaInstagram, FaLinkedinIn, Fainstagram} from 'react-icons/fa';
import { MdOutlineMenu } from 'react-icons/md';
import './header.css';

export default function Header(){
    return (
        <div className='header-container'>
            <div className='menu-button'>
                <button>
                    <MdOutlineMenu size={35}/>
                </button>
            </div>
            <div className='header-content'>
                <div className='container-logo'>
                    <span>PodCast</span>
                    <img src='./microfone.png'/>
                </div>
                <div className='menu-container'>
                    
                    <p>Podcasts</p>
                    <p>Host</p>
                    <p>About</p>
                    <p>Blog</p>
                    <p>Contact</p>
                    
                    <div className='social-container'>
                        <FaFacebookF size={25}/>
                        <FaLinkedinIn size={25}/>
                        <FaInstagram size={25}/>
                    </div>
                </div>
            </div>
        </div>
    )
}