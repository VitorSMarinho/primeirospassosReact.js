function Olamundo() {
    const alerta = () => {
        alert('Clique!');
    }

    return(
        <div onClick={alerta}>Olá mundo</div>
    )
}

export default Olamundo;