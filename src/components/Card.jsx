import React from 'react'
import '../css/Card.css'
import PropTypes from 'prop-types';

function Card() {
    return (
        <div className='all-card'>
            <div className='card-text text-center'>
                Meet the heroes behind the magic
            </div>
            <div>
                <div className='card'>
                    <div className='image1' >
                        <img className='image1' src='./src/assets/Resim.png' alt="" />
                    </div>
                    <div>
                        <h1 className='name'>Ester Howard</h1>
                    </div>
                    <div className='job'>
                        <span>Founder</span>
                    </div>
                </div>
                <div className='card2'>
                    <div className='image1' >
                        <img className='image1' src='./src/assets/Resim2.png' alt="" />
                    </div>
                    <div>
                        <h1 className='name'>Cody Fisher</h1>
                    </div>
                    <div className='job'>
                        <span>Developer</span>
                    </div>
                </div>
                <div className='card3'>
                    <div className='image1' >
                        <img className='image1' src='./src/assets/Resim4.png' alt="" />
                    </div>
                    <div>
                        <h1 className='name'>Brooklyn Simmons</h1>
                    </div>
                    <div className='job'>
                        <span>Designer</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
Card.propTypes = {
    image: PropTypes.any,
}
export default Card