import React from 'react'
import '../css/Page.css'

function Page() {
    return (
        <div style={{ flexDirection: 'column' }}>
            <div className='page-text text-left'>
                Who we are
            </div>
            <div className='page-text2 text-left'>
                We love what we do and create partnerships with our clients to ensure their digital transformation is positioned for long-term success.We believe that the human dimensions essential to start any successful project and that this is where splendid emotional relationships between the company and people are born.
            </div>

            <img className='image' src="./src/assets/Resim5.png" alt="" />

        </div>
    )
}

export default Page