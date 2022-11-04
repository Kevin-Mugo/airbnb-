

export  default function Card(props){
    let badgeText

    if (props.location  === "online"){
        badgeText = "ONLINE" ;
    }else if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    }

    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
           <img src={`./images/${props.coverImg}` } alt=""  className="card--image" />
           <div className="card--stats">

               <img src="./images/star.png" alt="" className="card--star" />
               <span>{props.stats.rating} </span>
               <span className="grey"> ({props.stats.reviewCount}) .</span>
               <span className="grey">{props.country} </span>

           </div>
           <p>{props.title}</p>
           <p><span className="bold">From ${props.price}</span>  / person</p>
           <div className="cart ">
            <button className="button1">Add to cart</button>

           </div>
        </div>
    )
}