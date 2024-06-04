import React, { useState } from 'react'
import { checkFeedback } from '../../helpers/checkForm'
import { sendFeedback } from '../../api/user'

const FeedbackForm = ({ setLoading, openCompleteDialog, openErrorDialog }) => {
    const [form, setForm] = useState({
        email: '',
        mark: '',
        department: false,
        excursion: false,
        mentor: false,
        interest: false,
        advice: false,
        presentation: false,
        description: '',
    })

    const onInput = (event) => {
        setForm(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const onCheck = (name, value) => {
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const checkResult = (result) => {
        if (result.status) {
            openCompleteDialog(result.description)
            setForm({
                email: '',
                mark: '',
                department: false,
                excursion: false,
                mentor: false,
                interest: false,
                advice: false,
                presentation: false,
                description: '',
            })
        } else {
            openErrorDialog(result.description)
        }
    }

    const submit = async (event) => {
        event.preventDefault()

        if (checkFeedback(form)) {
            setLoading(true)
            await sendFeedback({
                email: form.email,
                feedback: {
                    mark: form.mark,
                    department: form.department,
                    excursion: form.excursion,
                    mentor: form.mentor,
                    interest: form.interest,
                    advice: form.advice,
                    presentation: form.presentation,
                    description: form.description,
                }
            })
            .then(result => {
                checkResult(result)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
        }
    }

    return (
        <form className='form' onSubmit={submit}>
            <input className='my-input' name='email' type='text' placeholder='Введите почту, с которой зарегистрировались' value={form.email} onChange={onInput} />

            <label className='form__number-input-label' htmlFor="mark">
                <span className='form__number-input-text'>Оцени практику от 1 до 10:</span>
                <input className='form__number-input' name='mark' type='number' placeholder='' min='0' max='10' value={form.mark} onChange={onInput} />
            </label>

            <div className=''>
                <p className='form__checkbox-text'>Является ли актуальным прохождение практики в данном подразделении?</p>

                <div className='form__checkbox-container'>
                    <label className='form__checkbox-label'>
                        <span>Да</span>
                        <input type='checkbox' placeholder='Да' value={form.department} onChange={() => onCheck('department', true)} checked={form.department} />
                    </label>

                    <label className='form__checkbox-label'>
                        <span>Нет</span>
                        <input type='checkbox' placeholder='Да' value={form.department} onChange={() => onCheck('department', false)} checked={!form.department} />
                    </label>
                </div>
            </div>

            <div className=''>
                <p className='form__checkbox-text'>Провели ли для тебя ознакомительную экскурсию по подразделению?</p>

                <div className='form__checkbox-container'>
                    <label className='form__checkbox-label'>
                        <span>Да</span>
                        <input type='checkbox' placeholder='Да' value={form.excursion} onChange={() => onCheck('excursion', true)} checked={form.excursion} />
                    </label>

                    <label className='form__checkbox-label'>
                        <span>Нет</span>
                        <input type='checkbox' placeholder='Да' value={form.excursion} onChange={() => onCheck('excursion', false)} checked={!form.excursion} />
                    </label>
                </div>
            </div>

            <div className=''>
                <p className='form__checkbox-text'>Был ли у тебя наставник?</p>

                <div className='form__checkbox-container'>
                    <label className='form__checkbox-label'>
                        <span>Да</span>
                        <input type='checkbox' placeholder='Да' value={form.mentor} onChange={() => onCheck('mentor', true)} checked={form.mentor} />
                    </label>

                    <label className='form__checkbox-label'>
                        <span>Нет</span>
                        <input type='checkbox' placeholder='Да' value={form.mentor} onChange={() => onCheck('mentor', false)} checked={!form.mentor} />
                    </label>
                </div>
            </div>

            <div className=''>
                <p className='form__checkbox-text'>Тебе было бы интересно работать в Мэрии?</p>

                <div className='form__checkbox-container'>
                    <label className='form__checkbox-label'>
                        <span>Да</span>
                        <input type='checkbox' placeholder='Да' value={form.interest} onChange={() => onCheck('interest', true)} checked={form.interest} />
                    </label>

                    <label className='form__checkbox-label'>
                        <span>Нет</span>
                        <input type='checkbox' placeholder='Да' value={form.interest} onChange={() => onCheck('interest', false)} checked={!form.interest} />
                    </label>
                </div>
            </div>
            
            <div className=''>
                <p className='form__checkbox-text'>Посоветовал бы ты своим друзьям и знакомым Мэрию Казани местом для прохождения практики?</p>

                <div className='form__checkbox-container'>
                    <label className='form__checkbox-label'>
                        <span>Да</span>
                        <input type='checkbox' placeholder='Да' value={form.advice} onChange={() => onCheck('advice', true)} checked={form.advice} />
                    </label>

                    <label className='form__checkbox-label'>
                        <span>Нет</span>
                        <input type='checkbox' placeholder='Да' value={form.advice} onChange={() => onCheck('advice', false)} checked={!form.advice} />
                    </label>
                </div>
            </div>

            <div className=''>
                <p className='form__checkbox-text'>Была ли полезна вводная презентация о структуре Мэрии Казани?</p>

                <div className='form__checkbox-container'>
                    <label className='form__checkbox-label'>
                        <span>Да</span>
                        <input type='checkbox' placeholder='Да' value={form.presentation} onChange={() => onCheck('presentation', true)} checked={form.presentation} />
                    </label>

                    <label className='form__checkbox-label'>
                        <span>Нет</span>
                        <input type='checkbox' placeholder='Да' value={form.presentation} onChange={() => onCheck('presentation', false)} checked={!form.presentation} />
                    </label>
                </div>
            </div>

            <textarea className='my-textarea' name='description' type='text' placeholder='Расскажи, как прошла практика' value={form.description} onChange={onInput} />

            <button className='my-button' type='submit'>Отправить</button>
        </form>
    )
}

export default FeedbackForm