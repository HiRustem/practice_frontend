import UserFeedback from "./UserFeedback"

const UserDialog = ({ user }) => {
    const { id, name, email, phone, period, university, course, faculty, department, done, date, feedback, count } = user

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
                    <span className='user-dialog__text_highlighted'>Завершил:</span>{done}
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
        </div>
    )
}

export default UserDialog