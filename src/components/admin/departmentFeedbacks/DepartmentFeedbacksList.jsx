import React from 'react'
import { createFeedbackTable } from '../../../helpers/createTable'
import { getFeedbacks } from '../../../api/department'
import DepartmentFeedbackCard from './DepartmentFeedbackCard'

const DepartmentFeedbacksList = ({ feedbacks }) => {

    const getTable = async () => {
        const data = await getFeedbacks()

        createFeedbackTable(data)
    }

    return (
        <div className='feedbacks'>
            <h1 className='feedbacks__title'>Отзывы подразделений</h1>

            <button className='my-button' onClick={getTable}>Выгрузить таблицу</button>

            <ul className='feedback__list'>
                {
                    feedbacks.map(feedback => (
                        <li key={feedback.id} className='feedback__item'>
                            <DepartmentFeedbackCard feedback={feedback} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default DepartmentFeedbacksList