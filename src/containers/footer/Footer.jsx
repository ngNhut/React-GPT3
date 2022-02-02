import React from 'react';
import  logo  from '../../asset/logo.svg';
import './Footer.css'
function Footer() {
    return (
        <div className="Footer">
            <p className="Footer__gradient-text gradient__text">
            Do you want to step in to the future before others
            </p>
            <p>Request Early Access</p>
            <div className="Footer__footer">
                <div className="Footer__footer-item">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <p>
                        Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
                    </p>
                </div>
                <div className="Footer__footer-item">
                    <p><a href="">Links</a></p>
                    <p><a href="">Overons</a></p>
                    <p><a href="">Social Media</a></p>
                    <p><a href="">Counters</a></p>
                    <p><a href="">Contact</a></p>
                </div>
                <div className="Footer__footer-item">
                    <p><a href="">Company</a></p>
                    <p><a href="">Terms & Conditions</a></p>
                    <p><a href="">Privacy Policy</a></p>
                    <p><a href="">Contact</a></p>
                </div>
                <div className="Footer__footer-item">
                    <p><a href="https://www.google.com/">Get in touch</a></p>
                    <p><a href="">Crechterwoord K12 182 DK Alknjkcb</a></p>
                    <p><a href="">085-132567</a></p>
                    <p><a href="mailto:info@payme.net">info@payme.net</a></p>
                </div>
            </div>
            <p>© 2021 GPT-3. All rights reserved.</p>
        </div>
    )
}

export default Footer
