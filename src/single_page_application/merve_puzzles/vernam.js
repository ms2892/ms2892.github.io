import React, {useState} from 'react';
import "./src/cipher.css"
// import './Poem.css';

function Vernam(){


    const [key, setKey] = useState();


    let originalDecodedText = "It was somewhere around here where we had breakfast. It was the sweetest thing anyone had ever done for me. I felt way too special haha. And it was here where I did say, I would love to cook you breakfast someday. Well we managed to see through that promise together :P.";
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