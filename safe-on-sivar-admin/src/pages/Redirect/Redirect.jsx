import { useAdminContext } from '../../contexts/AdminContext';
import { Navigate } from 'react-router-dom';

const rolePages = {
  "admin": "/dashboard",
  "paciente": "/403",
  "doctor": "/403",
  "policia": "/403",
  "bombero": "/403"
}

const Redirect = () => {
  const { user } = useAdminContext();

  if(!user) return <p> No se puede redireccionar </p>;

  return <Navigate replace to={rolePages[user.role] ?? "/"} />
}

export default Redirect;