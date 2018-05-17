import React from 'react';
import '../CardBox/CardBox.css'


const CardBox = props => (
            <div className="card-box" id="portfolio">
                <h1 className="card-title">Portfolio</h1>
                <div className="card-content">
                    <main className="card-grid">
                        {props.children}
                    </main>
                </div>
            </div>
        );

export default CardBox;
