import React, {useState} from 'react';
import "./src/cipher.css"
// import './Poem.css';

function Vernam(){


    const [key, setKey] = useState();


    let originalDecodedText = "It was through breakfast where our story truly began. It was the morning after one of life's sweetest surprises - your kind words, and that lovely breakfast spread all came together to make my heart skip a beat. I felt like the luckiest person alive, like I'd stumbled upon a treasure trove of happiness. And as we sat there, savoring each bite and every moment, I knew right then and there that I wanted to spend many more mornings just like this with you. The memory of that special day still warms my heart, and the promise I made to cook you breakfast someday has only grown stronger with time. It's a promise I intend to keep. In your eyes, I see it hiding a depth of you who I wish to explore more and more. And in your smile, I find my own happiness, my own reason for being. You make everything better just by being there. So here's to many more breakfasts together, aşkım... and to a lifetime of making memories that'll warm our hearts like that very first morning we shared.";
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
    

    function vernamCipher(key){
        let decodedText = ""


        if(key==="kahvaltı"){
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
                The Vernam Cipher, also known as the One-Time Pad (OTP), is a method of encryption where each letter in the plaintext is 'xored' with a random key. This results in an encoded text that can only be decrypted using the same key.
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
                    {vernamCipher(key)}
                </p>

                <br />
                <br />
            </div>
        </div>
    )
}


export default Vernam