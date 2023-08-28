export default function Article(props){
    return      <div style={{margin:"5px",boxShadow:"2px 5px 3px white",borderRadius:"20px",overflow:"hidden" ,width:"400px"}}>

        <h2>{props.title} </h2>  
        <p style={{height:"200px"}}>{props.text}</p> 
        <img src={props.image} alt="" width={300}/>
        
        </div>
}