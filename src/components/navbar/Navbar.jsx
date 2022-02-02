import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logo from '../../asset/logo.svg'
import ai from '../../asset/ai.png'
import './Navbar.css'
function Navbar({ data }) {
    const [toggleMenu, setToggleMenu] = React.useState(false)
    const Menu = () => (
        <>
            <a href="">Home</a>
            <a href="">What is GPT?</a>
            <a href="">Open AI</a>
            <a href="">Case Studies</a>
            <a href="">Library</a>
        </>
    )
    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="" />
                </div>
                <div className="gpt3__navbar-links_title">
                    {< Menu />}
                </div>
            </div>
            <div className="gpt3__navbar-links_sign">
                <div className="gpt3__navbar-links_sign-in">
                    <a href="">Sign in</a>
                </div>
                <div className="gpt3__navbar-links_sign-up btn">
                    <a href="">Sign up</a>
                </div>
                <div className="gpt3__navbar-links_menu">
                    {toggleMenu ? <AiOutlineClose onClick={() => setToggleMenu(false)} color='#fff' size={24} /> : <AiOutlineMenu onClick={() => setToggleMenu(true)} color='#fff' size={24} />}
                    {toggleMenu && (
                        <div className='gpt3__navbar-links_menu-container scale-up-center'>
                            <Menu></Menu>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar
