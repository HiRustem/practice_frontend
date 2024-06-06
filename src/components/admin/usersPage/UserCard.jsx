import React, { useEffect } from 'react'

const UserCard = ({ user, openUserCard }) => {
    return (
        <button className='user-card' onClick={() => openUserCard(user)}>
            <span className='user-card__name'>{user.name}</span>
        </button>
    )
}

export default UserCard