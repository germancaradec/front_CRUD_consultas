import { Link } from "react-router-dom"

const BarraNav=()=>{
    return(
    <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid bg-dark">
            <span className="navbar-brand" href="http://127.0.0.1:8000/login/">SESIÓN INICIADA</span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link" to="/">Lista de consultas</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/formConsulta">Nueva consulta</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    )
}

export default BarraNav