import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import UsersPage from '../components/admin/usersPage/UsersPage'

const Admin = () => {
  const navigate = useNavigate()
  const key = localStorage.getItem('kk_practice_key')

  useEffect(() => {
    if (!key) {
      navigate('/')
    }
  }, [])

  return (
    <div>
      {
        key ?

          <UsersPage />
        
          :

            null
      }
    </div>
  )
}

export default Admin