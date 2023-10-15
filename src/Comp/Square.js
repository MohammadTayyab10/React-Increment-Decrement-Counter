import React, { useState } from 'react';

function Color(params) {

    const [num, setNum] = useState(0);

    return (

        <>



            <h1> Increment & Decrement Counter

                <button style={{ height: "30px", width: "65px", backgroundColor: "#d8d8d8 ", fontSize: "large", marginLeft: "100px", }} onClick={() => { setNum(0) }}>
                    Reset
                </button> </h1>

            <button style={{ height: "50px", width: "70px", backgroundColor: "#FF5F1F", fontSize: "large", marginLeft: "150px", }} onClick={() => { setNum(num + 1) }}>
                +
            </button>

            <div style={{ backgroundColor: "smoke", textAlign: "center", width: "40px", marginLeft: "160px", marginTop: "10px", fontSize: "x-large" }}>{num}</div>

            <button style={{ marginTop: "10px", marginLeft: "150px", cursor: 'pointer', border: " 2px solid purple", height: "50px", width: "70px", backgroundColor: "	rgb(127, 255, 212)", fontSize: "large", }} onClick={() => { setNum(num - 1) }}> - </button>



        </>
    )

}

export default Color;