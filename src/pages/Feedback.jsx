import React, { useState, useRef } from 'react'
import Loading from '../components/Loading'
import FeedbackForm from '../components/feedback/FeedbackForm'
import Dialog from '../components/Dialog'
import FeedbackComplete from '../components/feedback/FeedbackComplete'
import FeedbackError from '../components/feedback/FeedbackError'

const Feedback = () => {
  const completeRef = useRef(null)
  const errorRef = useRef(null)

  const [loading, setLoading] = useState(false)
  const [description, setDescription] = useState('')

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

          <FeedbackForm setLoading={setLoading} openCompleteDialog={openCompleteDialog} openErrorDialog={openErrorDialog} />
      }

      <Dialog ref={completeRef} children={ <FeedbackComplete description={description} /> } close={() => completeRef.current.close()} />
      <Dialog ref={errorRef} children={ <FeedbackError description={description} /> } close={() => errorRef.current.close()} />
    </>
  )
}

export default Feedback