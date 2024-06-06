const UserFeedback = ({ feedback }) => {
    const { mark, department, excursion, mentor, interest, advice, presentation, description } = feedback

    return (
        <div className='user-feedback'>
            <p className='user-feedback__text'>
                <span className='user-feedback__text_highlighted'>Оценка:</span>
                {mark ? 'Да' : 'Нет'}
            </p>
            <p className='user-feedback__text'>
                <span className='user-feedback__text_highlighted'>Является ли актуальным прохождение практики в данном подразделении:</span>{department ? 'Да' : 'Нет'}
            </p>
            <p className='user-feedback__text'>
                <span className='user-feedback__text_highlighted'>Провели ознакомительную экскурсию по подразделению:</span>{excursion ? 'Да' : 'Нет'}
            </p>
            <p className='user-feedback__text'>
                <span className='user-feedback__text_highlighted'>Был ли наставник:</span>{mentor ? 'Да' : 'Нет'}
            </p>
            <p className='user-feedback__text'>
                <span className='user-feedback__text_highlighted'>Было бы интересно работать в Мэрии:</span>{interest ? 'Да' : 'Нет'}
            </p>
            <p className='user-feedback__text'>
                <span className='user-feedback__text_highlighted'>Посоветовал бы своим друзьям и знакомым Мэрию Казани местом для прохождения практики:</span>{advice ? 'Да' : 'Нет'}
            </p>
            <p className='user-feedback__text'>
                <span className='user-feedback__text_highlighted'>Была ли полезна вводная презентация о структуре Мэрии Казани:</span>{presentation ? 'Да' : 'Нет'}
            </p>
            <p className='user-feedback__text'>
                <span className='user-feedback__text_highlighted'>Как прошла практика:</span>{description ? description : '-'}
            </p>
        </div>
    )
}

export default UserFeedback