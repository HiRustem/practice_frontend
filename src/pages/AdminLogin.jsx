import React, { useRef, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { setLocalStore } from '../api/config'

import { adminLogin } from '../api/admin'
import Loading from '../components/Loading'
import AdminError from '../components/admin/AdminError'
import Dialog from '../components/Dialog'

const AdminLogin = () => {
    const navigate = useNavigate()

    const errorRef = useRef(null)

    const [adminData, setAdminData] = useState({
        username: '',
        password: '',
    })
    const [loading, setLoading] = useState(false)
    const [description, setDescription] = useState('')

    const onChange = (event) => {
        setAdminData(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const openErrorDialog = (text) => {
        setDescription(text)
        errorRef.current.showModal()
    }

    const submit = async (event) => {
        event.preventDefault()

        setLoading(true)

        await adminLogin(adminData.username, adminData.password)
            .then(result => {
                if (result.status) {
                    setLocalStore(result.description)
                    navigate('/admin')
                } else {
                    openErrorDialog(result.description)
                }
            })
            .catch()
            .finally(() => setLoading(false))
    }

    return (
        <>
            {
                loading ?

                    <Loading />

                :

                    <form className='form' onSubmit={submit}>
                        <input className='my-input' name='username' type='text' placeholder='Введите логин' value={adminData.username} onChange={onChange} />
                        
                        <input className='my-input' name='password' type='text' placeholder='Введите пароль' value={adminData.password} onChange={onChange} />

                        <button className='my-button' type='submit'>Войти</button>
                    </form>
            }

            <Dialog ref={errorRef} children={ <AdminError description={description} /> } close={() => errorRef.current.close()} />
        </>
    )
}

export default AdminLogin