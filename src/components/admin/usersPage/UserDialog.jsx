import { useState } from 'react'
import UserFeedback from './UserFeedback'
import { changeBeginningDate, changeStatus } from '../../../api/admin'

const UserDialog = ({ user, setCurrentUser }) => {
    const { id, name, email, phone, period, university, course, faculty, department, done, date, feedback, count } = user

    const [beginningDate, setBeginningDate] = useState('')

    const onChange = (event) => {
        setBeginningDate(event.target.value)
    }

    const changeDate = async (event) => {
        event.preventDefault()

        try {
            await changeBeginningDate(id, beginningDate)
            setCurrentUser(prev => ({
                ...prev,
                date: beginningDate,
            }))
            alert('Дата успешно изменена')
        } catch (e) {
            console.log(e)
        }
    }

    const updateStatus = async () => {
        try {
            await changeStatus(id, !done)
            setCurrentUser(prev => ({
                ...prev,
                done: !done
            }))
            alert('Статус успешно изменен')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className='user-dialog'>
            <p className='user-dialog__name'>{name}</p>

            <div className='user-dialog__information'>
                <p className='user-dialog__text'>
                    <span className='user-dialog__text_highlighted'>Почта:</span>{email}
                </p>
                <p className='user-dialog__text'>
                    <span className='user-dialog__text_highlighted'>Телефон:</span>{phone}
                </p>
                <p className='user-dialog__text'>
                    <span className='user-dialog__text_highlighted'>Период:</span>{period}
                </p>
                <p className='user-dialog__text'>
                    <span className='user-dialog__text_highlighted'>Университет:</span>{university}
                </p>
                <p className='user-dialog__text'>
                    <span className='user-dialog__text_highlighted'>Курс:</span>{course}
                </p>
                <p className='user-dialog__text'>
                    <span className='user-dialog__text_highlighted'>Факультет:</span>{faculty}
                </p>
                <p className='user-dialog__text'>
                    <span className='user-dialog__text_highlighted'>Подразделение:</span>{department}
                </p>
                <p className='user-dialog__text'>
                    <span className='user-dialog__text_highlighted'>Завершил:</span>{done ? 'Да' : 'Нет'}
                </p>
                <p className='user-dialog__text'>
                    <span className='user-dialog__text_highlighted'>Дата начала:</span>{date}
                </p>
                <p className='user-dialog__text'>
                    <span className='user-dialog__text_highlighted'>Кол-во регистраций:</span>{count}
                </p>
            </div>

            {
                feedback && feedback.length > 0 && <p className='user-dialog__feedback-title'>Отзывы</p>
            }

            <ul className='user-dialog__feedbacks'>
                {
                    feedback?.map((feed, index) => (
                        <li key={index}>
                            <UserFeedback feedback={feed} />
                        </li>
                    ))
                }
            </ul>

            <div className='user-dialog__footer'>

                <form onSubmit={changeDate}>
                    <input type='text' value={beginningDate} onChange={onChange} />

                    <button type='submit'>Применить</button>
                </form>

                <button onClick={updateStatus}>Изменить статус</button>
            </div>
        </div>
    )
}

export default UserDialog