import './Footer.css';
import React, { Component } from 'react';

let zIndex = {
    zIndex: 1000
};

class Footer extends Component {
    render() {
        return (
            <footer className="footer" style={zIndex}>

                <div className="footer-line">
                        <div>
                            <h3><a href="mailto:juancarloscollins@gmail.com">
                            <svg height="30" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="none"/><path id="icon" d="m20 4h-16c-1.1 0-1.99.9-1.99 2l-.01 12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm0 14h-16v-10l8 5 8-5zm-8-7-8-5h16z"fill="#fff"/></svg></a>

                        </h3>
                        </div>
                        <div>
                            <a href="https://github.com/juancarlucci" target="_blank" rel="noopener noreferrer">
                                <svg width="30px" id="github" data-name="github" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                    <title>github</title>
                                    <path id="icon" d="M305.83,370.91a25,25,0,1,0,25,25A25,25,0,0,0,305.83,370.91Zm12.05,24.74a4.55,4.55,0,0,1-.45,1.26c-1.23,2.69-3.75,3.7-7.83,4.12,1.32.83,1.7,1.87,1.7,4.69s0,3.2,0,3.85c0,1.06,1.58,1.57,1.52,1.92s-1.31.28-1.89.08a1.93,1.93,0,0,1-1.49-1.95l-.05-3.77s.11-2-.64-2V410c0,1.34.94,1.75.94,2.25,0,.85-1.71-.08-2.24-.62-.81-.81-.72-2.52-.7-3.88s0-4.17,0-4.17h-.55s.23,6.26-.29,7.4c-.66,1.46-2.66,2-2.66,1.3,0-.45.49-.31.77-1.31s.15-7.24.15-7.24a1.77,1.77,0,0,0-.64,1.58c0,.54,0,3.67,0,4.6,0,1.17-1.66,1.83-2.46,1.83-.4,0-.91,0-.91-.23,0-.54,1.52-.86,1.52-2s0-3.49,0-3.49a12.19,12.19,0,0,1-1.86.13,4,4,0,0,1-4-2.74,4.8,4.8,0,0,0-2-2.36c-.46-.3-.56-.65,0-.75,2.44-.46,3.07,2.77,4.7,3.28a4.55,4.55,0,0,0,3.4-.27,3.58,3.58,0,0,1,1.4-2.29c-4.15-.39-6.6-1.83-7.88-4.14a11.47,11.47,0,0,1-.55-1.26,12.47,12.47,0,0,1-.57-4,6.9,6.9,0,0,1,1.94-5.09,7.16,7.16,0,0,1,.31-5.12s1.79-.37,5.18,2.06c1.84-.79,6.74-.85,9.06-.18,1.42-.93,4-2.27,5.07-1.89.29.45.9,1.78.37,4.71a8.3,8.3,0,0,1,2.22,5.89A15.67,15.67,0,0,1,317.88,395.65Z" transform="translate(-280.83 -370.91)" fill="#fff"/>
                                </svg>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/juancarloscollins/" target="_blank" rel="noopener noreferrer">
                                <svg width="30px" id="linkedin" data-name="linkedin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                    <title>linkedin</title>
                                    <path id="icon" d="M306.16,370.91a25,25,0,1,0,25,25A25,25,0,0,0,306.16,370.91Zm-8.33,40.63h-7.3V390.71h7.3Zm-3.65-24a3.65,3.65,0,1,1,3.65-3.65A3.64,3.64,0,0,1,294.18,387.58Zm27.6,24h-6.25V401.39c0-2.42-.26-5.54-3.58-5.54s-3.89,2.64-3.89,5.36v10.33H302V390.71h5.81v2.81h.09c.87-1.64,3-2.81,6.13-2.81,6.55,0,7.76,3.76,7.76,9.38Z" transform="translate(-281.16 -370.91)" fill="#fff"/>
                                </svg>
                            </a>
                        </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
