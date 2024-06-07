import React, { useEffect, useRef, useState } from 'react'
import UsersList from './UsersList'
import { getUserByName, getUsersByUniversity, getUsersDepartment, getUsersList } from '../../../api/admin'
import Loading from '../../Loading'
import Dialog from '../../Dialog'
import UserDialog from './UserDialog'

const Users = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [currentUser, setCurrentUser] = useState({})
    const userRef = useRef(null)

    const [query, setQuery] = useState({
        type: 'init',
        value: '',
    })

    const openUserCard = (user) => {
        setCurrentUser(user)
        userRef.current.showModal()
    }

    const closeUserCard = () => {
        userRef.current.close()
    }

    const getUsers = async (skip, take, type, value) => {
        setIsLoading(true)
        setQuery({
            type,
            value,
        })
        try {
            let data
            
            if (type === 'init') {
                data = await getUsersList(skip, take)
            }

            if (type === 'name') {
                data = await getUserByName(!value ? query.value : value)
            }

            if (type === 'university' || !type && query.type === 'university') {
                data = await getUsersByUniversity(skip, take, !value ? query.value : value)
            }

            if (type === 'department' || !type && query.type === 'university') {
                data = await getUsersDepartment(skip, take, !value ? query.value : value)
            }

            setUsers(data)
        } catch(err) {
            console.log(err)
        }
        setIsLoading(false)
    }
    
    return (
        <>
            {
                isLoading ?
                    <Loading />
                :
                <div className='user'>
                    {
                        users.length !== 0 ?
                            <UsersList users={users} openUserCard={openUserCard} getUsers={getUsers} />
                        :

                            <button className='my-button' onClick={() => getUsers(0, 20, 'init', '')}>Загрузить практикантов</button>

                    }

                    <Dialog ref={userRef} children={ <UserDialog user={currentUser} setCurrentUser={setCurrentUser} /> } close={closeUserCard} />
                </div>
            }
        </>
    )
}

export default React.memo(Users)