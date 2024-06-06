import React, { useState } from 'react'
import UserCard from './UserCard'
import UsersListHeader from './UsersListHeader'

const UsersList = ({ users, setUsers, setIsLoading, openUserCard, getUsers }) => {
  const [currentPage, setCurrentPage] = useState(0)

  const prevPage = () => {
    setCurrentPage(prev => prev - 1)

    getUsers(20 * currentPage, 20)
  }

  const nextPage = async () => {
    setCurrentPage(prev => prev + 1)

    await getUsers(20 * currentPage, 20)
  }

  return (
    <div className='users'>
      <h1 className='users__title'>Список практикантов</h1>

      <UsersListHeader getUsers={getUsers} />

      <ul className='users-list'>
        {
          users.map(user => (
            <li key={user.id} className='users-item'>
              <UserCard user={user} openUserCard={openUserCard} />
            </li>
          ))
        }
      </ul>
        
      <div className='users__footer'>
        <button className='my-button users__prev' disabled={currentPage === 0} onClick={prevPage}>Назад</button>
        <span className='users__current'>{currentPage + 1}</span>
        <button className='my-button users__next' onClick={nextPage}>Вперед</button>
      </div>
    </div>
  )
}

export default UsersList