import React, { useEffect, useState } from 'react'
import Bar from '../../components/Bar/Bar';
import BloodTypesRows from '../../components/BloodTypesRows/BloodTypesRows';
import Navbar from '../../components/Navbar/Navbar'
import { allBloodTypeServices } from '../../services/Admin/Admin.services';

function BloodTypes() {
    const [bloodTypes, setBloodTypes] = useState([]);
    const [recharge, setRecharge] = useState(false);

    // Getting Emergency Cases
    useEffect(() => {
        const fetchAllBloodTypes = async () => {
            try {
                const response = await allBloodTypeServices.getAllBloodTypes()

                if (!response.success) {
                    throw new Error('Something went wrong :(')
                }
                setRecharge(false)
                setBloodTypes(response.items)
            } catch (error) {
                console.error(error);
            }
        };
        fetchAllBloodTypes();
    }, [recharge])
    return (
        <div>
            <Navbar />
            <main className='container mt-5 bg-white w-100'>
                <div className='row mx-auto'>
                    <div className='col col-sm-12 text-center'>
                        <h1 className='mt-5'>Tipos de sangre</h1>
                    </div>
                    <Bar />
                    <div className='col col-sm-12 mx-auto'>
                        <div className='table-responsive mt-5'>
                            <table className="table table-striped table-hover text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Id</th>
                                        <th scope="col">Tipo de sangre</th>
                                        <th scope="col">Visible</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <BloodTypesRows bloodTypes={bloodTypes} />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default BloodTypes