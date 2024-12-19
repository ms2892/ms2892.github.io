import React, {useState} from 'react';
import "./src/cipher.css"
// import './Poem.css';

function RailFence(){


    const [key, setKey] = useState();


    let originalDecodedText = "Aşkım, every time I look at the photographs we took together on our trip to the seven sisters cliff, my heart fills up with so much joy. Seeing you happy and carefree is what makes me feel truly alive. Your smile lights up the entire world for me, and it's a reminder of the countless reasons why I adore you. I remember the way you laughed as we explored the scenic views, the way your eyes sparkled in the sunlight. Those moments are etched in my memory forever. You have a way of making me feel seen and heard in ways that no one else ever has. Your presence in my life is like a warm hug on a chilly day - it wraps me in comfort, security, and peace. You make me feel like I'm home, like I'm exactly where I'm meant to be. I promise to nurture that spark in your eyes, to be your rock, and to support you every step of the way as we navigate life together. I pledge my undying loyalty to you, not just today or tomorrow, but for all the days to come. You have my heart, my soul, and my everything. I promise to help you make your dreams a reality, one small step at a time. And when the going gets tough, I'll be there to hold your hand, to listen, and to support you with all my might. Whether it's celebrating your successes or helping you through the challenges, I'll always be here for you. You are the sunshine that brightens up every day for me. You are the calm in every storm. You are the safe haven where I can always find peace. Words aren't enough to express what I feel for you. I cherish our moments together, whether it's a quiet evening at home or an adventure on the other side of the world. I'm grateful for every laugh, every tear, and every moment we've shared so far. And as I look to the future, I know that I want to spend it all with you - exploring new horizons, creating unforgettable memories, and growing old together. I promise to cherish, support, and adore you for all the days to come.";
    const encodedText = "tg8Sw d7A464qZYorZGMCkjt7wHiV5PL5eQHc3IK6qAK yHLwllZwFPj5GVq xDP2jrzJ98kWqnUODwGMKgRyHOAdglR0gm3h HZcnU4l1lQwQxMVBZuQA1I9F8d D FeEr G6nTareoTi7JzGxIzDg3PTwgU gzzKJ6vG3W TXbob7clAJF7snem8AcI6Luc o8I Wz1JuXKlOwHwTzMCCqvAhF i1NmVALTqQvlcfHnJV XcaWAw ony39WPC7mN lVJX NUOY9r"

    function handleKeyChange(event){
        setKey(event.target.value)
    }

    function makeid(length) {
        let result = '';
        const characters = 'ABCDE FGHIJKLMNOPQR STUVWXYZabcdefghijk lmnopqrstuvwxy z0123456789 ';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }
    

    function RailFenceCipher(key){
        let decodedText = ""


        if(key==="brighton"){
            decodedText = originalDecodedText
        }else{
            decodedText = makeid(encodedText.length)
        }

        return decodedText
    }

    return (
        <div className="cipher">
            <br />
            <br />
            <h1>Caesar Cipher</h1>
            <br />

            <p className='encoded-text'>
                In Rail Fence Cipher, you create an "fence" with a series of parallel lines or rows. The number of rows is determined by the cipher key, which can be any positive integer (n). When encrypting a message, each character is written in a zigzag pattern across these rows.
            </p>

            <br />
            <h3>
                Encoded Message
            </h3>
            <p className='encoded-text'>
                {encodedText}
            </p>
            <br />
            <br />
            <h3>Enter the Key</h3>
            <input value={key} onChange={handleKeyChange} width="100%" placeholder='Enter the Key to decode the message' />

            <div className="cipher-output">
                <br />
                <br />
                <h3>Decoded Message</h3>
                <p>
                    {RailFenceCipher(key)}
                </p>

                <br />
                <br />
            </div>
        </div>
    )
}


export default RailFence