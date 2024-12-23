import React, {useState} from 'react';
import "./src/cipher.css"
// import './Poem.css';

function SongPuzzle(){
    return(
        <div>
            <br></br>
            <p>
                
            You're my journey, you're my destination<br />
            You're my divinity, you're in every prayer of mine.<br /> <br />
            Your absence tests me.<br /><br />
            It's my passion to become worthy of you.<br />
            This soul of mine, this body of mine<br />
            They're not mine as much as they're yours.<br /><br />
            The pain of separation<br />
            If I've got it from you, then it must be my prize.<br /> <br />
            My sky searches for your horizon<br />
            If not on the earth, then meet me in the skies.<br /><br />
            I agree that with your presence<br />
            My life is bereaved<br />
            Any alternate way of living<br />
            My heart doesn't want to believe.<br /><br />
            I want you with so much devotion<br />
            You can remain unaware, if you wish to.<br /><br />
            
            The journey towards you is prettier than the destination<br />
            You make everything in my life complete<br />
            Even left incomplete, my passion for you is still unwaivered.<br />
            O my heart, it's hard to live without you<br />
            </p>
            <br />
            <hr />
            <br />
            <p>
                I would have told you multiple times about the story of Orion. But there was one mythological aspect of Orion that I never told you about. It was the story of Artemis and Orion. Artemis was the goddess of the hunt and the moon. She was also the protector of the young. Orion was a giant huntsman whom Artemis loved. Being tricked by Artermis' brother, Artemis ends up killing Orion. Artemis was devastated and she asked Zeus to bring him back. Zeus did so by placing him in the sky as a constellation. The constellation of Orion is known as the warrior.
                It is said that these constellations still live and breathe life in them. Sometimes I wonder if Orion ever wanted to say something to Artemis when he was placed in the sky. Maybe he did. Maybe he didn't. But what if he did? What would he say?
                <br></br>
                The pain of separation<br />
                <br></br>
                So I wondered if I was Orion and you were my Artemis because there hasn't been a day where I haven't wished for your presence. And that is why I wrote that. Even though we are so far apart that hasn't stopped me from wanting you as you still lived in the same apartment.
                
            </p>
            <p>
            <br />
            A small hint, you might want to revisit the box that was given to you. You might find something more in it.
            </p>
        </div>
    )
}

function Cipher(){


    const [key, setKey] = useState();
    let originalKey = "orion"


    function handleKeyChange(event){
        setKey(event.target.value)
    }

    function songcipher(key){
        if (key==null){
            return ""
        }

        if (key.toLowerCase() === originalKey.toLowerCase()){
            return <SongPuzzle />
        }
    }

    return (
        <div className="cipher">
            <br />
            <br />
            <h1>Welcome</h1>
            <br />

            <br />
            <h3>
                Message
            </h3>

            <div className="encoded-text">
                <br />
                <br />
                <p>
                    Hello there Merve! Welcome to the platform where you will be going through a series of puzzles. If you are reading this then you must have found the QR code present in the box given to you. As stated before you will be going through around 6 puzzles in total. I apologize in advance to put you through this as you must have realized now, I'm terrible at articulating my words. 
                    You managed to crack and get the first QR code. You will see that alongside that you are also presented with a letter.
                    Keep track of them as they will be useful at a later stage :P.
                </p>
                <p>
                    As for your first message, let's start with an easy one. The hint for the key is:  The constellation that represents the warrior.
                </p>
                <br />
                <br />
            </div>

            <h3>Enter the Key</h3>
            <input value={key} onChange={handleKeyChange} width="100%" placeholder='Enter the Key to decode the message' />
            <br></br>
            <br></br>
            <div className='cipher-output'>
                {songcipher(key)}
            </div>
            <br />
            <br />
        </div>
    )
}


export default Cipher