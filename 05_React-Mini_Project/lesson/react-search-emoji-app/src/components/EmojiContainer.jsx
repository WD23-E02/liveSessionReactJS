
import Emoji from "./Emoji"

export default function EmojiContainer({emojis}){
    return(
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
            {emojis.map(emoji=>(<Emoji symbol={emoji.symbol}/>))}
        </div>
    )
}