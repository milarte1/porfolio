function Card () {
    return (
        <div className="card">
        <img className="card-img"src="images/tanjiro.png" alt="tanjiro" />
        <div className="card-body">
            <h5 className="card-title">TANJIRO</h5>
            <p className="card-text">Proyecto con Boostrap.</p>
            <button className="btn btn-primary">MIRAME</button>
        </div>
        </div>
        );
}

export default Card;