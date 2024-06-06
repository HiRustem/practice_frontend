import { config, checkStatus } from './config'

export const adminLogin = async (username, password) => {
    return await fetch(`${config.baseUrl}/admin/login?username=${username}&password=${password}`, {
        headers: config.headers
    })
        .then(result => {
            return checkStatus(result)
        })
}

export const adminLoginWithKey = async (key) => {
    return await fetch(`${config.baseUrl}/admin/loginWithKey/${key}`, {
        headers: config.headers,
    })
        .then(result => {
            return checkStatus(result)
        })
}

export const getUsersList = async (skip, take) => {
    return await fetch(`${config.baseUrl}/admin/getUsersList?skip=${skip}&take=${take}`, {
        headers: config.headers,
    })
        .then(result => {
            return checkStatus(result)
        })
}

export const getUserByName = async (name) => {
    return await fetch(`${config.baseUrl}/admin/getUserByName/${name}`, {
        headers: config.headers,
    })
        .then(result => {
            return checkStatus(result)
        })
}

export const getUsersByUniversity = async (skip, take, university) => {
    return await fetch(`${config.baseUrl}/admin/getUsersByUniversity?skip=${skip}&take=${take}&university=${university}`, {
        headers: config.headers,
    })
        .then(result => {
            return checkStatus(result)
        })
}

export const getUsersDepartment = async (skip, take, department) => {
    return await fetch(`${config.baseUrl}/admin/getUsersByDepartment?skip=${skip}&take=${take}&department=${department}`, {
        headers: config.headers,
    })
        .then(result => {
            return checkStatus(result)
        })
}