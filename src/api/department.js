import { config, checkStatus } from './config'

export const sendFeedback = async (data) => {
    return await fetch(`${config.baseUrl}/department/sendFeedback`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify(data)
    })
        .then(result => {
            return checkStatus(result)
        })
}

export const getFeedbacks = async () => {
    return await fetch(`${config.baseUrl}/department/getFeedbacks`, {
        headers: config.headers,
    })
        .then(result => {
            return checkStatus(result)
        })
}