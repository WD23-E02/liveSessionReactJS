export default function Emoji(props) {
  return (
    <div style={{width:"200px",height:"200px",boxShadow:"2px 3px 5px black,inset 1px 1px 5px white",borderRadius:"20px", textAlign:"center",lineHeight:"160px",margin:"10px", cursor:"pointer"}} onClick={()=>window.navigator.clipboard.writeText(props.symbol)}>
      <h1>{props.symbol}</h1>
    </div>
  );
}
/* export default function Emoji({symbol}){
    return(<div>
        <h1>{symbol}</h1>
    </div>)
} */
