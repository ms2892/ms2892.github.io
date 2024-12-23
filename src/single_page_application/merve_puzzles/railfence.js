import React, {useState} from 'react';
import "./src/cipher.css"
// import './Poem.css';

function SongPuzzle(){
    return(
        <div>
            Congratulations on figuring out the key.
            Well choosing this activity wasn't as easy as I had hoped it to be. After all how to make someone experience the city that they have practically lived their entire life. There is nothing that surprises them and nothing that they haven't seen.
            <br></br>
            But the one thing I know is that I know you. And the one thing you love more than anything in this world is your own creativity. You love to create things with your own hands and give them a new definition and identity. Be it pottery, painting etc.
            I'm taking my chances here when I say I chose this activity to do together. I browsed through all the workshops in Istanbul thinking there would be something unique that you might not have tried.
            <br></br>
            Painting! you already do that.
            Pottery! you already do that.
            Cooking! you already do that.
            Turkish Lamp workshop! Maybe you've done it? Maybe you haven't?
            <br></br>
            So browsing through all of istanbul, there was just one that stood out to me.
            <br></br>
            So the answer to the riddle presented to you should be the key in letting you know what we are doing today.
            <br></br>
            We are attending a perfume making workshop at Fabrikafa, Kadikoy (Unfortunately they do not serve gluten free, but we do get tea) :P.

        </div>
    )
}

function HintPuzzle(){
    return (
        <div>
            <p>
                Well close but no cigar. I'll say you are on the right track but the real key is something related to it. Another hint: What was the name of the cologne I had gotten?
            </p>

        </div>
    )
}

function RailFence(){


    const [key, setKey] = useState();
    let originalKey = "sartorial"

    let decodedText = "";

    function handleKeyChange(event){
        setKey(event.target.value)
    }

    function caesarRailFence(key){
        if(key==null){
            return ""
        }

        if(key && key.toLowerCase() === originalKey.toLowerCase()){
            return decodedText
        }

        
    }

    function songRailFence(key){
        if (key==null){
            return ""
        }

        if (key.toLowerCase()==originalKey){
            return <SongPuzzle />
        }
    }

    function hintRailFence(key){
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
            <h1>Puzzle 3</h1>
            <br />

            <br />
            <h3>
                Message
            </h3>

            <div className="encoded-text">
                <br />
                <br />
                <p>
                    Well I hope you are enjoying the breakfast that I made for you. If you are reading this then I believe you have cracked the 'cake' puzzle. Hope you liked the easter egg of '18' on it :P. Well this puzzle is meant to be a bit more challenging than the previous ones. The key might not be as evident. The message of this puzzle will let you know where we are going. So here is your hint:
                    <br></br>
                    <br></br>
                    <ol style={{textAlign: 'left'}}>
                        <li>The gift with the orange band</li>
                        <li>Hughes ______, University of Cambridge</li>
                        <li>🔫</li>
                    </ol>
                </p>
                <br />
                <br />
            </div>

            <h3>Enter the Key</h3>
            <input value={key} onChange={handleKeyChange} width="100%" placeholder='Enter the Key to decode the message' />
            <br></br>
            <br></br>
            <div className='cipher-output'>
                {caesarRailFence(key)}
                {songRailFence(key)}
                {hintRailFence(key)}
            </div>
            <br />
            <br />
        </div>
    )
}


export default RailFence