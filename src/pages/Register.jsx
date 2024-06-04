import React, { useState, useRef } from 'react'
import RegisterForm from '../components/register/RegisterForm'
import Dialog from '../components/Dialog'
import RegisterError from '../components/register/RegisterError'
import RegisterComplete from '../components/register/RegisterComplete'
import Loading from '../components/Loading'

const Register = () => {
  const completeRef = useRef(null)
  const errorRef = useRef(null)

  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)

  const openCompleteDialog = (text) => {
    setDescription(text)
    completeRef.current.showModal()
  }

  const openErrorDialog = (text) => {
    setDescription(text)
    errorRef.current.showModal()
  }

  return (
    <>
        {
          loading ?

            <Loading />

          :

            <RegisterForm setLoading={setLoading} openCompleteDialog={openCompleteDialog} openErrorDialog={openErrorDialog} />
        }

        <Dialog ref={completeRef} children={ <RegisterComplete description={description} /> } close={() => completeRef.current.close()} />
        <Dialog ref={errorRef} children={ <RegisterError description={description} /> } close={() => errorRef.current.close()} />
    </>
  )
}

export default Register