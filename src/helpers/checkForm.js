const checkName = (name) => {
    const regex = /[А-Яа-я]{2,} [А-Яа-я]{2,} [А-Яа-я]{2,}/gm

    return regex.test(name)
}

const checkEmail = (email) => {
    const regex = /^\S+@\S+\.\S+$/

    return regex.test(email)
}

const checkPhone = (phone) => {
    const regex = /^\+?[1-9][0-9]{7,14}$/

    return regex.test(phone)
}

const checkPeriod = (period) => {
    const regex = /[0-9]{2}.[0-9]{2}.[0-9]{2}-[0-9]{2}.[0-9]{2}.[0-9]{2}/gm

    return regex.test(period)
}

const checkMark = (mark) => {
    if (mark < 0 && mark > 10) {
        return false
    }

    return true
}


export const checkForm = (form) => {
    for (let name of Object.keys(form)) {
        if (form[name] === '') {
            alert('Заполните все поля')
            return false
        }
    }

    if (form.name && !checkName(form.name)) {
        alert('Введите полное ФИО')
        return false
    }

    if (form.email && !checkEmail(form.email)) {
        alert('Введите корректную почту')
        return false
    }

    if (form.phone && !checkPhone(form.phone)) {
        alert('Введите корректный номер телефона')
        return false
    }

    if (form.period && !checkPeriod(form.period)) {
        alert('Введите корректный период. Пример: 01.01.22-01.02.22')
        return false
    }

    return true
}

export const checkFeedback = (form) => {
    if (form.email === '') {
        alert('Введите почту')
        return false
    }

    if (form.mark === '') {
        alert('Введите оценку')
        return false
    }

    if (form.description === '') {
        alert('Расскажите, как прошла практика')
        return false
    }

    if (!checkEmail(form.email)) {
        alert('Введите корректную почту')
        return false
    }

    if (!checkMark(form.mark)) {
        alert('Введите корректную оценку')
        return false
    }

    return true
}