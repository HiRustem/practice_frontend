import React, { useEffect, useState } from 'react'
import UsersList from './UsersList'
import { getUsersList } from '../../../api/admin'

const Users = ({ setIsLoading }) => {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        setIsLoading(true)
        await getUsersList(0, 20)
            .then(result => {
                console.log(result)
                setUsers(result)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    useEffect(() => {
        console.log(users)
    }, [users])
    
    return (
        <div>
            {
                users.length !== 0 ?
                    <UsersList users={users} setUsers={setUsers} setIsLoading={setIsLoading} />
                :

                    <button onClick={getUsers}>Загрузить практикантов</button>

            }
        </div>
    )
}

export default Users