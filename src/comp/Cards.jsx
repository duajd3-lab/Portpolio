import React from 'react'
import '../cards.scss'

function Cards() {


    return (
        <div className='card-container'>
            <div className='card-body'>
                <CardGroup />
                <CardGroup />
                <CardGroup />
                <CardGroup />
                <CardGroup />
            </div>
        </div>
    )
}

export default Cards

function CardGroup() {
    return (
        <div>
            <div>
                <div className='subCard'></div>
                <div className='subCard'></div>
                <CardItem />
                <div className='subCard'></div>
                <div className='subCard'></div>
                <CardItem />                
            </div>
            <div>
                <div className='subCard'></div>
                <div className='subCard'></div>
                <CardItem />
                <div className='subCard'></div>
                <div className='subCard'></div>
                <CardItem />
                
            </div>
        </div>
    );
}


function CardItem() {
    return (
        <div className='card'>
            <div className='cardText'>
                <p className="small">FRONTEND DEVELOPER</p>
                <h3>김 나 영</h3>
                <span className="email">example@gmail.com</span>
            </div>
        </div>
    );
}