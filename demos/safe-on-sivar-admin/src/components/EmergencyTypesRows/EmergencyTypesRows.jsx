const EmergencyTypesRows = ({ emergencyTypes = [] }) => {
    let number = 0
    return (
        emergencyTypes.map(emergencyType => {
            number += 1
            return (
                <tr key={emergencyType._id}>
                    <th scope="row">{number}</th>
                    <td>{emergencyType._id}</td>
                    <td>{emergencyType.type}</td>
                    {
                        <td>
                            { emergencyType.visible ? <i className="material-icons text-primary">visibility</i> 
                            : <i className="material-icons text-secondary">visibility_off</i>}
                        </td>
                    }
                    <td>
                        <span><i className='material-icons text-warning'>edit</i></span>
                    </td>
                </tr>
            )
        })
    )
}

export default EmergencyTypesRows