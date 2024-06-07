import React, { useState } from 'react'

const UsersListHeader = ({ getUsers }) => {
  const [searchType, setSearchType] = useState('')
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

  const searchTypeSelect = (event) => {
    setSearchType(event.target.value)
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
      <label htmlFor='searchType' className='form__select-labe'>
        <span className='form__select-text'>Поиск по:</span>
        <select className='my-select' name='university' id='university' value={searchType} onChange={searchTypeSelect}>
          <option value="" hidden></option>
          <option className='' value='ФИО'>ФИО</option>
          <option className='' value='Учебное заведение'>Учебное заведение</option>
          <option className='' value='Подразделение'>Подразделение</option>
        </select>
      </label>

      <form onSubmit={searchByName} className={`${searchType === 'ФИО' ? '' : 'element-hidden'}`}>
        <label className='users__list-label' htmlFor='user-name'>
          <span>Введите ФИО</span>
          <input id='user-name' type='text' name='name' value={queryData.name} onChange={handleChange} />
        </label>

        <button className='users__list-button' type='submit'>Найти</button>
      </form>

      <form onSubmit={searchByUniversity} className={`${searchType === 'Учебное заведение' ? '' : 'element-hidden'}`}>
        <label className='users__list-label' htmlFor='user-university'>
          <span>Введите ВУЗ</span>
          <input id='user-university' type='text' name='university' value={queryData.university} onChange={handleChange} />
        </label>

        <button className='users__list-button' type='submit'>Найти</button>
      </form>

      <form onSubmit={searchByDepartment} className={`${searchType === 'Подразделение' ? '' : 'element-hidden'}`}>
        <label className='users__list-label' htmlFor='user-department'>
          <span>Введите подразделение</span>
          <input id='user-department' type='text' name='department' value={queryData.department} onChange={handleChange} />
        </label>

        <button className='users__list-button' type='submit'>Найти</button>
      </form>
    </div>
  )
}

export default UsersListHeader