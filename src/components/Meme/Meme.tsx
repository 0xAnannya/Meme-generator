import { useEffect, useState } from 'react'


export default function Meme() {
    const [topText, setTopTextt] = useState("");
    const[bottomText, setBottomText] = useState("");
    const [randomImageUrl, setrandomImagUrl] = useState("http://i.imgflip.com/1bij.jpg");
     const [allMemes, setAllMemes] = useState<any[]>([])
    

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
           
            
    },[])
   
    function getMemeImage() {
       
        const randomNum = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNum].url
        setrandomImagUrl(url);
        
    }

    function handleChangeTop(e:any) {
        setTopTextt(e.target.value)
    }

    function handleChangeBottom(e: any) {
        setBottomText(e.target.value)
    }

    
    return (
        <main>
            <div className="form">
                <input type="text"
                        placeholder="top-text"
                        className="form--input"
                        name='topText'
                        value={topText}
                        onChange={handleChangeTop}>
                        </input>
                <input type="text"
                        placeholder="bottom-text"
                        className="form--input"
                        name='bottomText'
                        value={bottomText}
                        onChange={handleChangeBottom}>
                        </input>
                <button className="form--button"
                        onClick={getMemeImage}>
                        Get a New Meme Image</button>            
            </div>
             <div className="meme">
                <img src={randomImageUrl} className="meme--image" />
                <h2 className="meme--text top">{topText }</h2>
                <h2 className="meme--text bottom">{bottomText }</h2>
            </div>
       </main>
    )
}