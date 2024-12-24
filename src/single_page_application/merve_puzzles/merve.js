import React, {useState} from 'react';
import "./src/cipher.css"
// import './Poem.css';

function SongPuzzle(){
    return(
        <div>
            Congratulations on figuring out the key.
            If everything went well then you must be on the ferry towards Eminonu/Beyoglu. This puzzle was a small throwback to your days in Cambridge. It was a different time that we shared.
            I still look at the photos I had clicked of you :P. The way you smiled in it was completely different from how you smiled in any other photos of yours. You truly looked happy. You looked like you were completely in your element.<br></br>
            <br></br>
            <br></br>
            <img src="11.jpg" width="30%"/>
            <img src="2.jpg" width="30%"/>
            <img src="3.jpg" width="30%"/><br></br>
            <img src="4.jpg" width="30%"/>
            <img src="5.jpg" width="30%"/>
            <img src="7.jpg" width="30%"/><br></br>
            <img src="6.jpg" width="90%"/><br></br>
            <img src="8.jpg" width="30%"/>
            <img src="9.jpg" width="30%"/>
            <img src="10.jpg" width="30%"/><br></br>
            <br></br>
            <br></br>
            {/* <Image /> */}
            One look at these pictures, one look at you, and I knew I wanted to keep that smile safe. I wanted to protect that side of you that I saw. And I never stopped thinking about that time. I never stopped thinking about you. I constantly 
            wished everyday, dreamed everyday that you were here. At times, when I randomly fell asleep on that couch and woke up, I wished that I could hear you walking down the hallway. I missed your presence a lot. 
            <br></br>
            <br></br>
            And ever since that day, the only thing I strive for is to make sure you get what you truly deserved. You deserve all the best things that this world has to offer. And I really truly wish to see you succeed. I wish to be on this journey with you 
            as you achieve all the things you have ever wanted. And if you ever feel low, or hurt I just want you to know that I will always be here for you. I will always be here to support you. I will always be here to listen to you. I will always be here to 
            be your safe space. I will always be here for you Merve. And I will always cheer you on, your biggest fan!!
            <br></br>
            <br></br>
            I just want to see you happy and at peace.
        </div>
    )
}

function Merve(){


    const [key, setKey] = useState();
    let originalKey = "dear my all"

    function handleKeyChange(event){
        setKey(event.target.value)
    }

    function songMerve(key){
        if (key==null){
            return ""
        }

        if (key.toLowerCase()==originalKey){
            return <SongPuzzle />
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
                {songMerve(key)}
            </div>
            <br />
            <br />
        </div>
    )
}


export default Merve