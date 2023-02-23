import React from 'react'
import Bar from '../../components/Bar/Bar'
import Navbar from '../../components/Navbar/Navbar'

function Diseases() {
    return (
        <div>
            <Navbar />
            <main className='container mt-5 bg-white w-100'>
                <div className='row mx-auto'>
                    <div className='col col-sm-12 text-center'>
                        <h1 className='mt-5'>Enfermedades</h1>
                    </div>
                    <Bar />
                    <div className='col col-sm-12 mx-auto'>
                        <div className='table-responsive mt-5'>
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Id</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Visible</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>62c461ea96e69ed7e663310e</td>
                                        <td>Epilepsia</td>
                                        <td>
                                            <span><i className='material-icons text-primary'>visibility</i></span>
                                        </td>
                                        <td>
                                            <span><i className='material-icons text-warning'>edit</i></span>
                                            <span><i className='material-icons text-danger'>delete</i></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>62c461ea96e69ed7e663310e</td>
                                        <td>Hipertensión</td>
                                        <td>
                                            <span><i className='material-icons text-primary'>visibility</i></span>
                                        </td>
                                        <td>
                                            <span><i className='material-icons text-warning'>edit</i></span>
                                            <span><i className='material-icons text-danger'>delete</i></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>62c461ea96e69ed7e663310e</td>
                                        <td>Diabetes</td>
                                        <td>
                                            <span><i className='material-icons text-primary'>visibility</i></span>
                                        </td>
                                        <td>
                                            <span><i className='material-icons text-warning'>edit</i></span>
                                            <span><i className='material-icons text-danger'>delete</i></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>62c461ea96e69ed7e663310e</td>
                                        <td>Parkinson</td>
                                        <td>
                                            <span><i className='material-icons text-primary'>visibility</i></span>
                                        </td>
                                        <td>
                                            <span><i className='material-icons text-warning'>edit</i></span>
                                            <span><i className='material-icons text-danger'>delete</i></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>62c461ea96e69ed7e663310e</td>
                                        <td>Asma</td>
                                        <td>
                                            <span><i className='material-icons text-primary'>visibility</i></span>
                                        </td>
                                        <td>
                                            <span><i className='material-icons text-warning'>edit</i></span>
                                            <span><i className='material-icons text-danger'>delete</i></span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Diseases