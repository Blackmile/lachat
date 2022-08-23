export const Login = (email, password) => {
    const token = email+password;;
    return ({
        type: 'LOGIN',
        payload: token,
    })
}