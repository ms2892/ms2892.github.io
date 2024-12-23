import React, {useState} from 'react';
import "./src/cipher.css"
// import './Poem.css';

function SongPuzzle(){
    return(
        <div>
            Congratulations on figuring out the key.
            

        </div>
    )
}

function HintPuzzle(){
    return (
        <div>
            <p>
                
            </p>

        </div>
    )
}

function Merve(){


    const [key, setKey] = useState();
    let originalKey = "dear my all"

    let decodedText = "";

    function handleKeyChange(event){
        setKey(event.target.value)
    }

    function caesarMerve(key){
        if(key==null){
            return ""
        }

        if(key && key.toLowerCase() === originalKey.toLowerCase()){
            return decodedText
        }

        
    }

    function songMerve(key){
        if (key==null){
            return ""
        }

        if (key.toLowerCase()==originalKey){
            return <SongPuzzle />
        }
    }

    function hintMerve(key){
        if (key==null){
            return ""
        }

        if (key.toLowerCase() === "penhaligon"){
            return <HintPuzzle />
        }
    }

    return (
        <div className="cipher">
            <br />
            <br />
            <h1>Puzzle 5</h1>
            <br />

            <br />
            <h3>
                Message
            </h3>

            <div className="encoded-text">
                <br />
                <br />
                <p>
                    Oh my God! You are almost coming to the end of the puzzle series. I'm so proud of you. I knew you could do it. This puzzle might be a bit interesting if it works. Guess the song.
                    <br></br>
                    <br></br>
                    <p>Hint: It's the song I had written in the Istanbul diary I had given to you (The first one I ever dedicated to you from my heart...)</p>
                    <br></br>
                    <a href="dear_my_all.m4a">Click here for the song</a>
                </p>
                <br />
                <br />
            </div>

            <h3>Enter the Key</h3>
            <input value={key} onChange={handleKeyChange} width="100%" placeholder='Enter the Key to decode the message' />
            <br></br>
            <br></br>
            <div className='cipher-output'>
                {caesarMerve(key)}
                {songMerve(key)}
                {hintMerve(key)}
            </div>
            <br />
            <br />
        </div>
    )
}


export default Merve