import React from 'react'
import '../css/Contact.css'

function Contact() {
    return (
        <div>
            <div>
                <img className='image2' src="./src/assets/Resim3.png" alt="" />
            </div>
            <div className='contact-text'>
                We'd love to hear
                from you
            </div>
            <div>
                <input className='input1' type="text" placeholder='Name*' />
                <input className='input2' type="text" placeholder='Email*' />
                <input className='input3' type="text" placeholder='Website URL*' />
                <textarea className='input4' name="" id="" placeholder='Project Details*'></textarea>
                <button className='button'><p>Send Proposal</p></button>
            </div>

        </div>
    )
}

export default Contact