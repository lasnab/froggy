import React from 'react'
import './FaceRecognition.css'

function FaceRecognition( { box, imageURL }) {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                {/* <h1>{box.topRow + box.bottomRow + box.rightCol + box.leftCol}</h1> */}
                <img id='inputimage' src={imageURL} width='500px' height='auto' alt='' />
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>            
        </div>
    )
}

export default FaceRecognition
