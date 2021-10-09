import React from 'react'

const Plan = (props) => {
    return(
            <>
                <li>{props.value} <button type="button" onClick={() => props.sendData(props.id)}>X</button></li>
            </>
    )
}

export default Plan