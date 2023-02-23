import { useAdminContext } from '../../contexts/AdminContext'
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
    const navigate = useNavigate();
    const { logout } = useAdminContext();

    const logoutHandler = () => {
        logout()
        navigate("/login")
    }

    return (
        <div className="container mx-auto justify-center items-center w-screen h-screen bg-gray-100">
            <h1 className="text-danger text-center mt-5"><i className="material-icons title-404">error</i></h1>
            <h1 className="text-center text-danger title-404">403</h1>
            <h2 className="text-center text-danger">Acceso no autorizado</h2>
            <p className="text-center text-danger">
                No tienes permitido ingresar a este sitio.
            </p>
            <div className="d-grid gap-2 col-6 mx-auto">

                <button
                    className="btn btn-secondary btn-lg m-4 py-2 px-4 rounded"
                    onClick={logoutHandler}
                >
                    Regresar al inicio de sesión
                </button>
            </div>
        </div>
    );
};

export default Unauthorized;