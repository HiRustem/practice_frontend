import React from 'react'
import UserCard from './UserCard'

const UsersList = ({ users, setUsers, setIsLoading }) => {
  return (
    <div>
      <ul>
        {
          users.map(user => (
            <UserCard user={user} />
          ))
        }
      </ul>

      
    </div>
  )
}

export default UsersList