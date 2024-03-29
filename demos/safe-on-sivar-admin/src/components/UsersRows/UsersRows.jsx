const UsersRows = ({ users = [] }) => {
    return (
        users?.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.abilities}</td>
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
        })
    )
}

export default UsersRows