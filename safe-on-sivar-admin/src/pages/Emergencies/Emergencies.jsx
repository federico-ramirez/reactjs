import { React, useState, useEffect } from 'react';
import AttendedEmergenciesRows from '../../components/AttendedEmergenciesRows/AttendedEmergenciesRows';
import Bar from '../../components/Bar/Bar'
import EmergenciesRows from '../../components/EmergenciesRows/EmergenciesRows';
import Navbar from '../../components/Navbar/Navbar'
import { allEmergencyServices } from '../../services/Admin/Admin.services';

function Emergencies() {
    const [emergencies, setEmergencies] = useState([]);
    const [recharge, setRecharge] = useState(false);

    // Getting emergencies
    useEffect(() => {
        const fetchAllEmergencies = async () => {
            try {
                const response = await allEmergencyServices.getAllEmergencies()

                if (!response.success) {
                    throw new Error('Something went wrong :(')
                }
                setRecharge(false)
                setEmergencies(response.items)
            } catch (error) {
                console.error(error);
            }
        };
        fetchAllEmergencies();
    }, [recharge])

    return (
        <div>
            <Navbar />
            <main className='container mt-5 bg-white w-100'>
                <div className='row mx-auto'>
                    <div className='col col-sm-12 text-center'>
                        <h1 className='mt-5'>Emergencias</h1>
                    </div>
                    <Bar />
                    <div className='col col-sm-12 mx-auto'>
                        <h3 className='text-center'>Emergencias pendientes de antender</h3>
                        <div className='table-responsive mt-5'>
                            <table className="table table-striped table-hover text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Emergencia</th>
                                        <th scope="col">Descripción</th>
                                        <th scope="col">Dirección</th>
                                        <th scope="col">Latitud</th>
                                        <th scope="col">Longitud</th>
                                        <th scope="col">Fecha reportada</th>
                                        <th scope="col">Reportada por</th>
                                        <th scope="col">Estado</th>
                                        <th scope="col">Visible</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                    <EmergenciesRows 
                                        emergencies={emergencies} />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Emergencies