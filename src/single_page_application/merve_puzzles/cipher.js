import React, {useState} from 'react';
// import './Poem.css';

function Cipher(){


    const [key, setKey] = useState();

    let encodedText = "This is a Caesar Cipher. The cipher shifts each letter in the text by a fixed number of letters.";

    function handleKeyChange(event){
        setKey(event.target.value)
    }

    function caesarCipher(key){
        let key_int = Number(key);
        return key_int+10
    }

    return (
        <div className="cipher">
            <h1>Caesar Cipher</h1>
            <p>
                {encodedText}
            </p>

            <input value={key} onChange={handleKeyChange} />

            <div className="cipher-output">
                <p>
                    {caesarCipher(key)}
                </p>
            </div>
        </div>
    )
}


export default Cipher