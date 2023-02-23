import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    const onClick = (e) => {
        navigate("/login");
    };

    return (
        <div className="container mx-auto justify-center items-center w-screen h-screen bg-gray-100">
            <h1 className="text-danger text-center mt-5"><i className="material-icons title-404">error</i></h1>
            <h1 className="text-center text-danger title-404">404</h1>
            <h2 className="text-center text-danger">Página no encontrada</h2>
            <p className="text-center text-danger">
                La página que buscas no existe.
            </p>
            <div className="d-grid gap-2 col-3 mx-auto">

                <button
                    className="btn btn-secondary btn-lg m-4 py-2 px-4 rounded"
                    onClick={(e) => onClick(e)}
                >
                    Ir al inicio de sesión
                </button>
            </div>
        </div>
    );
};

export default NotFound;