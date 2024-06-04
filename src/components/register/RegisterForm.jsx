import React, { useState } from 'react'

import { registerUser } from '../../api/user'

import { universities, colleges, courses, departments } from '../../data/registerFormData'

import { checkForm } from '../../helpers/checkForm'

const RegisterForm = ({ setLoading, openCompleteDialog, openErrorDialog }) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        period: '',
        university: '',
        course: '',
        faculty: '',
        department: '',
    })
    const [checkedUniversity, setCheckedUniversity] = useState(false)
    const [checkedCollege, setCheckedCollege] = useState(false)

    const checkResult = (result) => {
        if (result.status) {
            openCompleteDialog(result.description)
            setForm({
                name: '',
                email: '',
                phone: '',
                period: '',
                university: '',
                course: '',
                faculty: '',
                department: '',
            })
        } else {
            openErrorDialog(result.description)
        }
    }

    const onChange = (event) => {
        setForm(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const onUniversitySelect = (event) => {
        setForm(prev => ({
            ...prev,
            university: event.target.value
        }))
    }

    const submit = async (event) => {
        event.preventDefault()

        if (checkForm(form)) {
            setLoading(true)
            await registerUser(form)
                .then(result => {
                    checkResult(result)
                })
                .catch(e => console.log(e))
                .finally(() => {
                    setLoading(false)
                })
        }
    }

    return (
        <form className='form' onSubmit={submit}>
            <input className='my-input' name='name' type='text' placeholder='Введите полное ФИО' value={form.name} onChange={onChange} />

            <input className='my-input' name='email' type='email' placeholder='Введите почту' value={form.email} onChange={onChange} />

            <input className='my-input' name='phone' type='text' placeholder='Введите номер телефона' value={form.phone} onChange={onChange} />

            <input className='my-input' name='period' type='text' placeholder='Введите период (пример: 01.01.22-01.02.22)' value={form.period} onChange={onChange} />

            <div className='form__checkboxes'>
                <label className='form__checkbox-label' htmlFor='universityCheckbox'>
                    <span className='form__checkbox-text'>Я студент университета</span>
                    <input id='universityCheckbox' name='universityCheckbox' type='checkbox' value={checkedUniversity} onChange={() => setCheckedUniversity(prev => !prev)} disabled={checkedCollege} />
                </label>

                <label className='form__checkbox-label' htmlFor='collegeCheckbox'>
                    <span className='form__checkbox-text'>Я студент колледжа</span>
                    <input id='collegeCheckbox' name='collegeCheckbox' type='checkbox' value={checkedCollege} onChange={() => setCheckedCollege(prev => !prev)} disabled={checkedUniversity} />
                </label>
            </div>

            <label htmlFor='university' className={`${checkedUniversity ? '' : 'element-hidden'} form__select-label`}>
                <span className='form__select-text'>Выберите университет</span>
                <select className='my-select' name='university' id='university' value={form.university} onChange={onUniversitySelect}>
                    <option value="" hidden></option>
                    {universities.map(((university) => (
                        <option key={university} className='' value={university}>{university}</option>
                    )))}
                </select>
            </label>

            <label htmlFor='college' className={`${checkedCollege ? '' : 'element-hidden'} form__select-label`}>
                <span className='form__select-text'>Выберите колледж</span>
                <select className='my-select' name='college' id='college' value={form.university} onChange={onUniversitySelect}>
                    <option value="" hidden></option>
                    {colleges.map(((college) => (
                        <option key={college} className='' value={college}>{college}</option>
                    )))}
                </select>
            </label>

            <label htmlFor='course' className='form__select-label'>
                <span className='form__select-text'>На каком вы сейчас курсе?</span>

                <select className='my-select' name='course' id='course' value={form.course} onChange={onChange}>
                    <option value="" hidden></option>
                    {courses.map(((course) => (
                        <option key={course} className='' value={course}>{course}</option>
                    )))}
                </select>
            </label>

            <input className='my-input' name='faculty' type='text' placeholder='Введите факультет' value={form.faculty} onChange={onChange} />

            <label htmlFor='department' className='form__select-label'>
                <span className='form__select-text'>Выберите подразделение, в котором планируете проходить практику</span>
                <select className='my-select' name='department' id='department' value={form.department} onChange={onChange}>
                    <option value="" hidden></option>
                    {departments.map(((department) => (
                        <option key={department} className='' value={department}>{department}</option>
                    )))}
                </select>
            </label>

            <button className='my-button' type='submit'>Зарегистрироваться</button>
        </form>
    )
}

export default RegisterForm