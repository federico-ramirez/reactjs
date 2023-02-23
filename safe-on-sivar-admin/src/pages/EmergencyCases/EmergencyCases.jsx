import React, { useEffect, useState } from 'react'
import Bar from '../../components/Bar/Bar'
import EmergencyCasesRows from '../../components/EmergencyCasesRows/EmergencyCasesRows';
import Navbar from '../../components/Navbar/Navbar'
import { allEmergencyCasesServices, allEmergencyTypesServices } from '../../services/Admin/Admin.services';

function EmergencyCases() {
    const [emergencyCases, setEmergencyCases] = useState([]);
    const [emergencyTypes, setEmergencyTypes] = useState([]);
    const [recharge, setRecharge] = useState(false);

    // Getting Emergency Cases
    useEffect(() => {
        const fetchAllEmergencyCases = async () => {
            try {
                const response = await allEmergencyCasesServices.getAllEmergencyCases()
                const types = await allEmergencyTypesServices.getAllEmergencyTypes()

                if (!response.success) {
                    throw new Error('Something went wrong :(')
                }
                setRecharge(false)
                setEmergencyCases(response.items)
                setEmergencyTypes(types.items)
            } catch (error) {
                console.error(error);
            }
        };
        fetchAllEmergencyCases();
    }, [recharge])
    return (
        <div>
            <Navbar />
            <main className='container mt-5 bg-white w-100'>
                <div className='row mx-auto'>
                    <div className='col col-sm-12 text-center'>
                        <h1 className='mt-5'>Casos de emergencias</h1>
                    </div>
                    <Bar />
                    <div className='col col-sm-12 mx-auto'>
                        <div className='table-responsive mt-5'>
                            <table className="table table-striped table-hover text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Id</th>
                                        <th scope="col">Caso de emergencia</th>
                                        <th scope="col">Tipo</th>
                                        <th scope="col">Visible</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <EmergencyCasesRows 
                                        emergencyCases={emergencyCases}
                                        emergencyTypes={emergencyTypes} />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default EmergencyCases