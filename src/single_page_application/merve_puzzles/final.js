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

function Final(){


    const [key, setKey] = useState();
    let originalKey = "orion"


    function handleKeyChange(event){
        setKey(event.target.value)
    }

    function songFinal(key){
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
            <br />

            <br />
            <h3>
                Message
            </h3>

            <div className="encoded-text">
                So you managed to reach the final message. This isn’t a puzzle though. Just a normal message for you.
You may be wondering why you? Tbh, i don’t know either. Maybe because there doesn’t need to be a reason to. I don’t need to provide you with any more reasons except for the fact that I want you for who you are. I still remember that night when you woke up in the middle of the night at the hotel in brighton. I had noticed it previously too at our apartment. I knew i shouldn’t interfere but that day i couldn’t stop myself from asking if you were doing okay. If something was bothering you. Tbh i wasn’t expecting you to tell me either. It was a personal matter to you and who was I to know about it. But u trusted me with it. And that was the day I promised I would want to be the person you’d hug to feel better when things go south for you. I would be there to see you through in your darkest moments. Ever since then I could just feel it in my gut if you felt down. Even if it were through texts. I could tell. With each passing day I promised to help you build a life where you won’t shed a single tear of sorrow. I really do. 
I wish u the best merve. Truly from the bottom of my heart. With everything. Building your life all on your own isn’t easy, and you don’t have to do it alone. I want to be there to help you out truly. And alongside that, i do want to let u know, i dream of doing it with you. As your partner. I dream that the both of us in the future build a life together where you feel free as a bird. Where you don’t feel suffocated. Where you will always see yourself for who you are worth of! 
<br></br><br></br>
Will you build a life with me?
            </div>
        </div>
    )
}


export default Final