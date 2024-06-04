export const config = {
    baseUrl: 'https://practice-backend-gamma.vercel.app',
    headers: {
        'Content-Type': 'application/json'
    }
}

export const checkStatus = (result) => {
    if (result.ok) {
        return result.json()
    }

    return Promise.reject(`Ошибка ${result.status}`)
}

export const setLocalStore = (key) => {
    if (key) {
        localStorage.setItem('kk_practice_key', key)

        return true
    }

    return false
}