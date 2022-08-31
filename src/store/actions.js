export const Login = (email, password) => {
    const token = email+password;;
    return ({
        type: 'LOGIN',
        payload: token,
    })
}
export const Logout = () => {
    return ({
        type: 'LOGIN',
        payload: null,
    })
}

export const tryAuth = (authData) => {
    return {
        type: 'TRY_AUTH',
        authData: authData
    }
}