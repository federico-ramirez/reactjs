import React, { useEffect, useState } from 'react'
import Bar from '../../components/Bar/Bar'
import EmergencyTypesRows from '../../components/EmergencyTypesRows/EmergencyTypesRows';
import Navbar from '../../components/Navbar/Navbar'
import { allEmergencyTypesServices } from '../../services/Admin/Admin.services';

function EmergencyTypes() {
    const [emergencyTypes, setEmergencyTypes] = useState([]);
    const [recharge, setRecharge] = useState(false);

    // Getting Emergency Cases
    useEffect(() => {
        const fetchAllEmergencyTypes = async () => {
            try {
                const response = await allEmergencyTypesServices.getAllEmergencyTypes()

                if (!response.success) {
                    throw new Error('Something went wrong :(')
                }
                setRecharge(false)
                setEmergencyTypes(response.items)
            } catch (error) {
                console.error(error);
            }
        };
        fetchAllEmergencyTypes();
    }, [recharge])
    return (
        <div>
            <Navbar />
            <main className='container mt-5 bg-white w-100'>
                <div className='row mx-auto'>
                    <div className='col col-sm-12 text-center'>
                        <h1 className='mt-5'>Tipos de emergencias</h1>
                    </div>
                    <Bar />
                    <div className='col col-sm-12 mx-auto'>
                        <div className='table-responsive mt-5'>
                            <table className="table table-striped table-hover text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Id</th>
                                        <th scope="col">Tipo de emergencia</th>
                                        <th scope="col">Visible</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <EmergencyTypesRows emergencyTypes={emergencyTypes} />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default EmergencyTypes