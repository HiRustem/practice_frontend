import React, { useState } from 'react'

const UsersListHeader = ({ getUsers }) => {
  const [queryData, setQueryData] = useState({
    name: '',
    university: '',
    department: '',
  })
  
  const handleChange = (event) => {
    setQueryData(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  const searchByName = (event) => {
    event.preventDefault()

    if (queryData.name !== '') {
      getUsers(0, 20, 'name', queryData.name)
      setQueryData({
        name: '',
        university: '',
        department: '',
      })
    } else {
      alert('Введите ФИО')
    }
  }

  const searchByUniversity = (event) => {
    event.preventDefault()

    if (queryData.university !== '') {
      getUsers(0, 20, 'university', queryData.university)
      setQueryData({
        name: '',
        university: '',
        department: '',
      })
    } else {
      alert('Введите название ВУЗа')
    }
  }

  const searchByDepartment = (event) => {
    event.preventDefault()

    if (queryData.department !== '') {
      getUsers(0, 20, 'department', queryData.department)
      setQueryData({
        name: '',
        university: '',
        department: '',
      })
    } else {
      alert('Введите название подразделения')
    }
  }

  return (
    <div className='users__list-header'>
      <form onSubmit={searchByName}>
        <label className='users__list-label' htmlFor='user-name'>
          <span>Поиск по ФИО</span>
          <input id='user-name' type='text' name='name' value={queryData.name} onChange={handleChange} />
        </label>

        <button className='users__list-button' type='submit'>Найти</button>
      </form>

      <form onSubmit={searchByUniversity}>
        <label className='users__list-label' htmlFor='user-university'>
          <span>Поиск по ВУЗу</span>
          <input id='user-university' type='text' name='university' value={queryData.university} onChange={handleChange} />
        </label>

        <button className='users__list-button' type='submit'>Найти</button>
      </form>

      <form onSubmit={searchByDepartment}>
        <label className='users__list-label' htmlFor='user-department'>
          <span>Поиск по подразделению</span>
          <input id='user-department' type='text' name='department' value={queryData.department} onChange={handleChange} />
        </label>

        <button className='users__list-button' type='submit'>Найти</button>
      </form>
    </div>
  )
}

export default UsersListHeader