import React from 'react'

const DepartmentFeedbackCard = ({ feedback }) => {
    const { id, intern, university, mentor, tasks, recommendation, additional } = feedback

    return (
        <div>
            <p>Id: {id}</p>

            <p>ФИО практиканта: {intern}</p>

            <p>Образовательное учреждение: {university}</p>

            <p>Закрепленный наставник (фио, должность): {mentor}</p>

            <p>Задачи, которые выполнял практикант: {tasks}</p>

            <p>Могли бы рекомендовать студента для трудоустройства в Мэрию Казани: {recommendation}</p>
            
            <p>Дополнительная информация (пожелания, рекомендации по организации практики): {additional}</p>
        </div>
    )
}

export default DepartmentFeedbackCard