const EmergencyCasesRows = ({ emergencyCases = [], emergencyTypes = [] }) => {
    let number = 0

    return (
        emergencyCases.map(emergencyCase => {
            number += 1

            let emergencyCaseType = emergencyTypes.findIndex(e => e._id === emergencyCase.emergencyType)
            
            return (
                <tr key={emergencyCase._id}>
                    <th scope="row">{number}</th>
                    <td>{emergencyCase._id}</td>
                    <td>{emergencyCase.emergencyCase}</td>
                    <td>{emergencyCaseType}</td>
                    {
                        <td>
                            { emergencyCase.visible ? <i className="material-icons text-primary">visibility</i> 
                            : <i className="material-icons text-secondary">visibility_off</i>}
                        </td>
                    }
                    <td>
                        <span><i className='material-icons text-warning'>edit</i></span>
                        <span><i className='material-icons text-danger'>delete</i></span>
                    </td>
                </tr>
            )
        })
    )
}

export default EmergencyCasesRows