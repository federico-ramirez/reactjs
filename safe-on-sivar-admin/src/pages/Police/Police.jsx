import { React, useEffect, useState } from 'react'
import Bar from '../../components/Bar/Bar'
import Navbar from '../../components/Navbar/Navbar'
import PoliceRows from '../../components/PoliceRows/PoliceRows'
import { allUserServices } from '../../services/Admin/Admin.services'

const Police = () => {
    const [users, setUsers] = useState([]);
    const [recharge, setRecharge] = useState(false);

    // Getting Users
    useEffect(() => {
        const fetchAllUsers = async () => {
            try {
                const response = await allUserServices.getUsers()

                if (!response.success) {
                    throw new Error('Something went wrong :(')
                }
                setRecharge(false)
                setUsers(response.items)
            } catch (error) {
                console.error(error);
            }
        };
        fetchAllUsers();
    }, [recharge])

    return (
        <div>
            <Navbar />
            <main className='container mt-5 bg-white w-100'>
                <div className='row mx-auto'>
                    <div className='col col-sm-12 text-center'>
                        <h1 className='mt-5'>Policías</h1>
                    </div>
                    <Bar />
                    <div className='col col-sm-12 mx-auto'>
                        <div className='table-responsive mt-5'>
                            <table className="table table-striped table-hover text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Apellido</th>
                                        <th scope="col">Correo electrónico</th>
                                        <th scope="col">Teléfono</th>
                                        <th scope="col">ONI</th>
                                        <th scope="col">Cuenta activa</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                    <PoliceRows users={users} />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Police