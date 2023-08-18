export default function Card(props : any) {

    return(
        <div className="card--div">
            <img className="card--image" src={`../images/${props.item.imageUrl}`} alt="Destination image" />
            <div className="card--text_div">
                <div className="card--location_div">
                    <img src="../images/location-pin.png" alt="Pin image" />
                    <h3>{props.item.location}</h3>
                    <a href={props.item.googleMapsUrl}>View on Google maps</a>
                </div>
                <h1>{props.item.title}</h1>
                <h4>{props.item.startDate} - {props.item.endDate}</h4>
                <p className="card--text">{props.item.description}</p>
            </div>
        </div>
    );
}