
function Boton(props) {
    return(
        <div className="container">
        <button onClick={props.onClick}>
            <div className='boton'>
            {props.texto}
            <p>CURRICULUM</p>
            </div>
        </button>
        </div>
    )
}  

export default Boton;