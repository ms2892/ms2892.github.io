import React, {useState} from 'react';
import "./src/cipher.css"
// import './Poem.css';

function SongPuzzle(){
    return(
        <div>
            In Japanese mythology, there is the theory of a red string. It is said that human relations are predestined by a red string that the higher power ties to the pinky fingers of those who find each other in life.
            Legend has it that the two people connected by this thread will have an important story, regardless of the time, place or circumstances. The red string might get tangled, contracted or stretched, as surely often happens, but it can never break.

            <br></br>

            <br></br>
            It is also a way to visualize when two people are meant to be together and are meant to share important stories together. No matter where they are in the world, the universe will conspire to bring them together.
            <br></br>
            It at times does make me wonder what story are we meant to write together. It is not only a play of chance where we met. It wasn't just a play of chance that I constantly ended up heading towards Istanbul. 
            I do not believe it anymore that it is just coincidence. With each passing day I just believe that this is right. And I am nothing short of the luckiest person to have met you and have you as part of my life.
            <br></br>
            Nothing in this world comes close to the feeling of having you in my life. And I am grateful for that.
            <br></br>
            Everything related to you is nothing short of the most precious treasures one can find in this world. You are invaluable! I wish there was a way where you get to see yourself like the way I see you.
            <br></br>
            Nothing short of the most beautiful person in the world. Nothing short of the most amazing person in the world. Nothing short of the most wonderful person in the world.
            <br></br>
            Your companionship is a blessing. Your friendship is a treasure. Your presence is a necessity. And you make everything in this world better.
        </div>
    )
}

function HintPuzzle(){
    return (
        <div>
            <p>
                That's a really good guess but I try again. It is a synonym.
            </p>

        </div>
    )
}

function Columnar(){


    const [key, setKey] = useState();
    let originalKey = "fate"

    let decodedText = "";

    function handleKeyChange(event){
        setKey(event.target.value)
    }

    function caesarColumnar(key){
        if(key==null){
            return ""
        }

        if(key && key.toLowerCase() === originalKey.toLowerCase()){
            return decodedText
        }

        
    }

    function songColumnar(key){
        if (key==null){
            return ""
        }

        if (key.toLowerCase()==originalKey){
            return <SongPuzzle />
        }
    }

    function hintColumnar(key){
        if (key==null){
            return ""
        }

        if (key.toLowerCase() === "destiny"){
            return <HintPuzzle />
        }
    }

    return (
        <div className="cipher">
            <br />
            <br />
            <h1>Puzzle 4</h1>
            <br />

            <br />
            <h3>
                Message
            </h3>

            <div className="encoded-text">
                <br />
                <br />
                <p>
                    Amazing you managed to reach to solve the japanese puzzle box. These puzzle boxes are considered a marvel from japan as the box itself is meant to be seamless and you barely see any edges to hint you which elements are moving. Although this box wasn't from japan though :P. The craftsmanship wasn't that good. But still it is equally amazing that you managed to complete this puzzle. 
                    So the obligatory key for the puzzle. The hint for the key is:
                    <br></br>
                    <br></br>
                    Ever nearing, never veering<br></br>

                    Overarching, domineering<br></br>

                    Chaotic, yet it's on its way<br></br>

                    Despotic: beset, come what may<br></br>

                    What is this unyielding lot<br></br>

                    That can't be fought, that can't be bought?<br></br>

                    It binds us tightly in its thrall...<br></br>

                    The one thing that awaits us all.<br></br>
                </p>
                <br />
                <br />
            </div>

            <h3>Enter the Key</h3>
            <input value={key} onChange={handleKeyChange} width="100%" placeholder='Enter the Key to decode the message' />
            <br></br>
            <br></br>
            <div className='cipher-output'>
                {caesarColumnar(key)}
                {songColumnar(key)}
                {hintColumnar(key)}
            </div>
            <br />
            <br />
        </div>
    )
}


export default Columnar