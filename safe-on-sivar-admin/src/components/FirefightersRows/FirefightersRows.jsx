const FirefightersRows = ({ users = [] }) => {
    return (
        users.map(user => {
            if (user.role === 'bombero' || user.role === 'Bombero') {
                return (
                    <tr key={user._id}>
                        <td>{user._id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNumber}</td>
                        {
                            <td>
                                {user.visible ? <i className="material-icons text-success">check_circle</i>
                                    : <i className="material-icons text-danger">cancel</i>}
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

export default FirefightersRows