import React from 'react'
import ai from '../../asset/ai.png'
import signup from '../../asset/Signup.png'
import './Header.css'
function Header() {
    return (
        <div className="Header">
            <div className="Header__Content">
                <p className="gradient__text Header__Content-gradient_text">
                    Let’s Build Something
                    amazing with GPT-3
                    OpenAI
                </p>
                <p>
                    Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                </p>
                <div className='Header__input'>
                    <input type="text" placeholder='Your Email Address' />
                    <div className='btn'>
                        Get Started
                    </div>
                </div>
                <div className='Header__Content-visted'>
                    <img src={signup} alt="" />
                </div>
            </div>
            <div className="Header__Illustration">
                <img src={ai} alt="" />
            </div>
        </div>
    )
}

export default Header
