function Mobile(props){
    return(
        <>
        <div className="main">
            <div className="submain"> 
                <img src={props.src}></img>
            </div>
                
            
             <div className="heading">
             <h3>{props.head}</h3>
             <ul >
                <li>{props.heading1}</li>
                <li>{props.heading2}</li>
                <li>{props.heading3}</li>
                <li>{props.heading4}</li>
                <li>{props.heading5}</li>
                <li>{props.heading6}</li>
             </ul>
             </div >
             <div className="price">
                <ul>
                  <p className="int">{props.price1}</p>
                  <p>{props.discount}</p>
                  <p>{props.free}</p>
                  <p>{props.offers}</p>
                  <p>{props.exchange}</p>
                </ul>
             </div>
             </div>
             
            
       
        
        
        
        </>
    );
}

export default Mobile;