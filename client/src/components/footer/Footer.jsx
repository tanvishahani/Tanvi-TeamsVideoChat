import React from 'react';

import './Footer.css';

function Footer() {

    return (
        <section className="footer">
            <hr className="footer-seperator" />
            <section className="footer-social-media">
              Share Link Via:
             
          </section>
            
            
            <section className="footer-info">
                <section className="footer-info-left">
                    <section className="footer-social-media">
                <a href="https://outlook.live.com/" target="_blank" rel="noopener noreferrer">Outlook</a>
                
            </section>
                </section>
                <section className="footer-info-center">
                    <section className="footer-social-media">
                <a href="https://www.google.com/gmail/" target="_blank" rel="noopener noreferrer">Gmail</a>
                
            </section>
                </section>
                <section className="footer-info-right">
                    <section className="footer-social-media">
                <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">Whatsapp</a>
                
            </section>
                    
                    
                </section>
            </section>
            <hr className="footer-seperator" />
        </section>
    )

}

export default Footer;