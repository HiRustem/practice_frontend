import React, { useState } from 'react'
import Loading from '../../Loading'
import Users from './Users'

const UsersPage = () => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div>
      {
        isLoading ?

          <Loading />

        :

          <Users setIsLoading={setIsLoading} />
      }
    </div>
  )
}

export default UsersPage