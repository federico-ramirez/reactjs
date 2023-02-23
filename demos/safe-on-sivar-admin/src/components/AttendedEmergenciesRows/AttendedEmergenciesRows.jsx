const AttendedEmergenciesRows = ({ emergencies = [], users = [] }) => {
    return (
        // Array mapping for attended emergencies
        emergencies.map(emergency => {
            if (emergency.isAttended) {
                return (
                    <tr >
                        <td>{emergency._id}</td>
                        <td>{emergency.emergency}</td>
                        <td>{emergency.description}</td>
                        <td>{emergency.address}</td>
                        <td>{emergency.latitude}</td>
                        <td>{emergency.longitude}</td>
                        <td>{emergency.reportTime}</td>
                        <td>{emergency.report}</td>
                        {
                            <td>
                                { emergency.isAttended ? <p className='text-success fw-bold'>Atendida</p>
                                : <p className='text-warning fw-bold'>En espera</p> }
                            </td>
                        }
                        {
                            <td>
                                { emergency.visible ? <i className="material-icons text-primary">visibility</i> 
                                : <i className="material-icons text-secondary">visibility_off</i>}
                            </td>
                        }
                        <td>
                            <span><i className='material-icons text-warning'>edit</i></span>
                            <span><i className='material-icons text-danger'>delete</i></span>
                        </td>
                    </tr>
                )
            }
        })
    )
}

export default AttendedEmergenciesRows