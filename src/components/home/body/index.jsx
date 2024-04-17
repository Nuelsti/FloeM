import React from 'react'
import './style.css'
import Icon from './icons&images/icon1.svg'
import Frame from './icons&images/phonefr1.png'

function Body() {


    const handleClick = () =>{
        console.log('Already clicked!')
    }



    return (
        <main className="body contain">
            <section className="sub_body">
                <h1>Master & <span className="sub">Trade Forex</span> like a pro</h1>
                <p className="txt">Become an expert in forex trading and execute trades with the skill and proficiency of a professional.</p>
                <button onClick = {handleClick} class="io-button">
                    Get started
                    <div class="icon">
                        <img src={Icon} alt="" className="icon" />
                        {/* <img src="src/components/home/body/icons&images/img.svg" alt="" className="img" /> */}
                    </div>
                </button>    
            </section>
            <section className="second_sub">
                <img src={Frame} alt="frame" className="img" />


            </section>
        </main>
        
    )
}

export default Body
