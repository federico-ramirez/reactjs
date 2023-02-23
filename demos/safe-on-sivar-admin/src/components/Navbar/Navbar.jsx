import { useAdminContext } from '../../contexts/AdminContext'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/img/safe-on-sivar-logo.png'


export default function Navbar() {

    const navigate = useNavigate();
    const { logout } = useAdminContext();

    // Navigation consts
    const navigateToDashboard = () => {
        navigate("/dashboard")
    }

    const navigateToUsers = () => {
        navigate("/users")
    }

    const navigateToDoctors = () => {
        navigate("/doctors")
    }

    const navigateToFirefighters = () => {
        navigate("/firefighters")
    }

    const navigateToPolice = () => {
        navigate("/police")
    }

    const navigateToEmergencies = () => {
        navigate("/emergencies")
    }

    const navigateToEmergencyCases = () => {
        navigate("/emergency-cases")
    }

    const navigateToEmergencyTypes = () => {
        navigate("/emergency-types")
    }

    const navigateToBloodTypes = () => {
        navigate("/blood-types")
    }

    const navigateToDiseases = () => {
        navigate("/diseases")
    }

    const logoutHandler = () => {
        logout()
        navigate("/login")
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top bg-danger px-4">
                <div className="container-fluid">
                    <span className="navbar-brand" onClick={navigateToDashboard}>
                        <img src={logo} alt="Safe On Sivar Logo" width="40" height="40" />
                    </span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item" onClick={navigateToDashboard}>
                                <span className="nav-link active text-white" aria-current="page">Tablero</span>
                            </li>
                            <li className="nav-item" onClick={navigateToUsers}>
                                <span className="nav-link text-white">Usuarios</span>
                            </li>
                            <li className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Agentes
                                </span>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li onClick={navigateToDoctors}>
                                        <span className="dropdown-item">Doctores</span>
                                    </li>
                                    <li onClick={navigateToPolice}>
                                        <span className="dropdown-item">Policías</span>
                                    </li>
                                    <li onClick={navigateToFirefighters}>
                                        <span className="dropdown-item">Bomberos</span>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item" onClick={navigateToEmergencies}>
                                <span className="nav-link text-white">Emergencias</span>
                            </li>
                            <li className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Catálogos
                                </span>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li onClick={navigateToEmergencyCases}>
                                        <span className="dropdown-item">Casos de emergencias</span>
                                    </li>
                                    <li onClick={navigateToEmergencyTypes}>
                                        <span className="dropdown-item">Tipos de emergencia</span>
                                    </li>
                                    <li onClick={navigateToBloodTypes}>
                                        <span className="dropdown-item">Tipos de sangre</span>
                                    </li>
                                    <li className="nav-item" onClick={navigateToDiseases}>
                                        <span className="dropdown-item">Enfermedades</span>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item" onClick={logoutHandler}>
                                <span className="nav-link text-white d-flex me-2">Cerrar sesión</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}