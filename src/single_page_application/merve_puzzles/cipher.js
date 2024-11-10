import React, {useState} from 'react';
import "./src/cipher.css"
// import './Poem.css';

function Cipher(){


    const [key, setKey] = useState();

    let encodedText = "PA DHZ AOPZ KHF AOHA P MPYZA TLA FVB. P KVU'A RUVD DOF IBA P ZAPSS YLTLTILY TF MPYZA APTL PU PZAHUIBS DPAO LEAYLTL CPCPK KLAHPS. P AOVBNOA AOHA PZAHUIBS LUAYHUJLK TL ZV TBJO AOHA P JHU'A NLA PA VBA VM TF OLHK. IBA AOL AYBAO PZ, P KVU'A YLTLTILY TBJO VM AOL AYPW. AOL VUSF AOPUN P YLTLTILY PU KLAHPS, PZ AOL APTL P ZWLUA DPAO FVB. P KVU'A RUVD OVD IBA LHJO HUK LCLYF KLAHPS FVB ZHPK VY KPK DPAO TL QBZA NLAZ LAJOLK ZV JSLHYSF PU TF IYHPU P QBZA JHU'A MVYNLA PA. DOLU P DHZ OLYL PU HBNBZA, AOL VUSF AOPUN P YLTLTILY JSLHYSF PZ AOL PJL JYLHT ZOVW DL TLA BW HA. P YLTLTILY DL OHK H ZJVVW VM PJL JYLHT LHJO MPYZA HUK AOLU OHK AOL JOPJRLU IYLHZA KLZZLYA. P YLTLTILY LHJO ZLJVUK VM AOL APTL P ZWLUA DPAO FVB LCLY ZV JSLHYSF. P KVU'A RUVD DOHA P KPK ILMVYL AOHA, P KVU'A RUVD DOHA P KPK HMALY AOHA!!! PA'Z ZBJO H ISBY. P YLTLTILY LCLYFAOPUN AOHA OHWWLULK AOL ULEA KHF ILJHBZL P ZWLUA AOL LUAPYL KHF DPAO FVB. MYVT OHCPUN IYLHRMHZA AV JSPTIPUN APSS WPLYYL SVAAP HUK YBUUPUN AV JHAJO AOL MLYYF HUK AOLU OLHKPUN IHJR HUK TL AHRPUN H JHI IHJR AV PZA. P QBZA YLTLTILY AOL APTL P ZWLUA DPAO FVB. AOL VUSF YLHZVU DOF P YLTLTILY AOL KLJLTILY AYPW PU KLAHPS DHZ ILJHBZL FVB DLYL AOLYL. P AOPUR P ZOVBSK OHCL ZHPK PA ILMVYL IBA P KPKU'A SVCL PZAHUIBS ILJHBZL VM AOL JPAF. P SVCLK PA VUSF ILJHBZL FVB DLYL AOLYL. HUK P SVCLK LCLYF ZLJVUK P ZWLUK DPAO FVB. P DVBSK MPUK HUF LEJBZL, HUF YLHZVU QBZA AV ZWLUK HUVAOLY ZLJVUK DPAO FVB. QBZA AV IL AOLYL DPAO FVB. P JVUZAHUASF MPUK H YLHZVU AV JVTL AV PZAHUIBS ILJHBZL VM FVB. HSDHFZ OHCL HUK HSDHFZ DPSS.";

    function handleKeyChange(event){
        setKey(event.target.value)
    }

    function caesarCipher(key){
        if(key==null){
            return ""
        }

        let key_int = Number(key);

        const letters ={
            "a":0, "b":1, "c":2, "d":3, "e":4, "f":5, "g":6, "h":7, "i":8, "j":9, "k":10, "l":11, "m":12, "n":13, "o":14, "p":15, "q":16, "r":17, "s":18, "t":19, "u":20, "v":21, "w":22, "x":23, "y":24, "z":25,
            "A":0, "B":1, "C":2, "D":3, "E":4, "F":5, "G":6, "H":7, "I":8, "J":9, "K":10, "L":11, "M":12, "N":13, "O":14, "P":15, "Q":16, "R":17, "S":18, "T":19, "U":20, "V":21, "W":22, "X":23, "Y":24, "Z":25,
            0: "A", 1: "B", 2: "C", 3: "D", 4: "E", 5: "F", 6: "G", 7: "H", 8: "I", 9: "J", 10: "K", 11: "L", 12: "M", 13: "N", 14: "O", 15: "P", 16: "Q", 17: "R", 18: "S", 19: "T", 20: "U", 21: "V", 22: "W", 23: "X", 24: "Y", 25: "Z"
        }
        let decodedText = "";

        for(let i=0; i<encodedText.length;i++){
            if(encodedText[i]!==" " && encodedText[i]!=="." && encodedText[i]!=="," && encodedText[i]!=="'" && encodedText[i]!=="!")
                decodedText += letters[(letters[encodedText[i]]+key_int)%26]
            else
                decodedText += encodedText[i]

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
                The Caesar Cipher is a type of substitution cipher where each letter in the plaintext is 'shifted' a certain number of places down the alphabet. For the key you may want to checkout the box again :P.
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
                    {caesarCipher(key)}
                </p>

                <br />
                <br />
            </div>
        </div>
    )
}


export default Cipher