const BloodTypesRows = ({ bloodTypes = [] }) => {
    let number = 0
    return (
        bloodTypes.map(bloodType => {
            number += 1
            return (
                <tr key={bloodType._id}>
                    <th scope="row">{number}</th>
                    <td>{bloodType._id}</td>
                    <td>{bloodType.bloodType}</td>
                    {
                        <td>
                            { bloodType.visible ? <i className="material-icons text-primary">visibility</i> 
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

export default BloodTypesRows