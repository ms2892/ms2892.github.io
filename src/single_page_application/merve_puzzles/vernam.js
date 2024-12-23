import React, {useState} from 'react';
import "./src/cipher.css"
// import './Poem.css';

function SongPuzzle(){
    return(
        <div>
            This riddle was set like this because I knew you would never have thought of yourself as the answer in the first intuition :P. But let's continue to the message.
            <br></br>
            <br></br>
            <p>
            Yeh ishq nahi hai aasan<br />
            itna to samajh lejiye<br />
            ek aag ka dariya hai<br />
            aur doob ke jaana hai<br />
            </p>
            <br />
            <hr />
            <br />
            <p>
                Well the above lines were in Urdu. They basically translate to "This love isn't easy, you must've realized it by now. It is a river of fire and you have to traverse it by fully immersing yourself in it." These have been used in multiple songs and movies in Bollywood.
                And in every perception of the concept of love, everyone does believe that it is not something that is trivial. They understand that when two souls meet up, it requires work. It requires effort. It requires understanding. It requires patience. It requires trust. It requires faith. It requires kindness. And most importantly, it requires time.<br /><br />
                But even in every perception they also believe that it is not a play of chance. The things that need to fall into place for two souls to want each other is not something that can be left to chance. 
                If it's meant to happen, your heart, your soul, your body and the entire universe will hint you in the direction its meant to be. 
                Nothing seems impossible, Nothing seems out of reach. Any task seems effortless for the other person. And eventually everything in your life adjusts accordingly to accommodate that one person.
            </p>
            <p>
                <br></br>
                And that is what I wonder about us. How many things have to go exactly the way they had to just so that we can share this moment together? How many things had to go wrong for us to meet? How many things had to go right for us to continue together?
                <br></br>
                <br />
                Think about it.
                <br />
                <br />
                So to this poetry if I had a response, it would be:
                <br />
                <br />
                If it weren't a river of fire, then I don't want it.<br />
                If you don't work for your love, then it isn't love.<br />
                The heat from this river doesn't reach me when I know she's waiting for me on the other side.<br />
                I'll burn standing on the shore if she's not there at all.<br />
            </p>
        </div>
    )
}

function Vernam(){


    const [key, setKey] = useState();
    let originalKey = "merve"

    let decodedText = "";

    function handleKeyChange(event){
        setKey(event.target.value)
    }

    function caesarVernam(key){
        if(key==null){
            return ""
        }

        if(key && key.toLowerCase() === originalKey.toLowerCase()){
            return decodedText
        }

        
    }

    function songVernam(key){
        if (key==null){
            return ""
        }

        if (key==originalKey){
            return <SongPuzzle />
        }
    }

    return (
        <div className="cipher">
            <br />
            <br />
            <h1>Puzzle 2</h1>
            <br />

            <br />
            <h3>
                Message
            </h3>

            <div className="encoded-text">
                <br />
                <br />
                <p>
                    Seems like you managed to find the second QR code. You're progressing at a great pace it seems. But the puzzles after this one won't be that easy to solve. Muahahahahaha. But I know you are always up for a challenge.<br></br><br></br> The hint for this key is: 
                    <br></br>
                    <br></br>
                    I'm what some call 'elegance personified'.<br></br>
                    With waves that were molded by the sunlight and moonlight.<br />
                    I frolick, I jump, I care and I love.<br />
                    Who am I?
                </p>
                <br />
                <br />
            </div>

            <h3>Enter the Key</h3>
            <input value={key} onChange={handleKeyChange} width="100%" placeholder='Enter the Key to decode the message' />
            <br></br>
            <br></br>
            <div className='cipher-output'>
                {caesarVernam(key)}
                {songVernam(key)}
            </div>
            <br />
            <br />
        </div>
    )
}


export default Vernam