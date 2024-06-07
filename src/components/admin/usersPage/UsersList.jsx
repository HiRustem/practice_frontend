import React, { useState } from 'react'
import UserCard from './UserCard'
import UsersListHeader from './UsersListHeader'

const UsersList = ({ users, openUserCard, getUsers }) => {
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
    </div>
  )
}

export default UsersList