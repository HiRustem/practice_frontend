import React, { useState } from 'react'
import { sendFeedback } from '../api/department'

const DepartmentFeedback = () => {
    const [form, setForm] = useState({
        intern: '',
        university: '',
        mentor: '',
        tasks: '',
        recommendation: '',
        additional: '',
    })

    const onChange = (event) => {
        setForm(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const submit = async (event) => {
        event.preventDefault()

        await sendFeedback(form)
            .then(result => {
                alert('Отзыв успешно отправлен!')
            })
            .catch(error => {
                console.log(error)
                alert('Произошла ошибка. Пожалуйста, сообщите о ней администратору')
            })

        setForm({
            intern: '',
            university: '',
            mentor: '',
            tasks: '',
            recommendation: '',
            additional: '',
        })
    }
    return (
        <form className='form' onSubmit={submit}>
            <input className='my-input' name='intern' type='text' placeholder='ФИО практиканта' value={form.intern} onChange={onChange} />

            <input className='my-input' name='university' type='text' placeholder='Образовательное учреждение' value={form.university} onChange={onChange} />

            <input className='my-input' name='mentor' type='text' placeholder='Закрепленный наставник (фио, должность)' value={form.mentor} onChange={onChange} />

            <input className='my-input' name='tasks' type='text' placeholder='Задачи, которые выполнял практикант' value={form.tasks} onChange={onChange} />

            <input className='my-input' name='recommendation' type='text' placeholder='Могли бы рекомендовать студента для трудоустройства в Мэрию Казани' value={form.recommendation} onChange={onChange} />

            <input className='my-input' name='additional' type='text' placeholder='Дополнительная информация (пожелания, рекомендации по организации практики)' value={form.additional} onChange={onChange} />

            <button className='my-button' type='submit'>Отправить</button>
        </form>
    )
}

export default DepartmentFeedback