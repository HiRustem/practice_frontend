import { config, checkStatus } from './config'

export const registerUser = async (userData) => {
    return await fetch(`${config.baseUrl}/user/register`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify(userData)
    })
        .then(result => {
            return checkStatus(result)
        })
}

export const sendFeedback = async (feedbackData) => {
    return await fetch(`${config.baseUrl}/user/addFeedback`, {
        method: 'PUT',
        headers: config.headers,
        body: JSON.stringify(feedbackData)
    })
        .then(result => {
            return checkStatus(result)
        })
}