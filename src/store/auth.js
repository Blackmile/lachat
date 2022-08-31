export const tryAuth = (authData, token) => {
    return dispatch => {
        dispatch(auth(authData, token))
    }
}

export const auth = (authData, token) => {
    console.log(authData.email, authData.password, 'from auth')
    return dispatch => {
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBMsWtc1ZFL6WMNaFZ0b0pZzoT21Ifvaes',{
            method: 'POST',
            body: JSON.stringify({
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(token = true)
        .catch(err => {
            console.log(err);
            alert("Authentication failed, please try again");
        })
        .then(res => res.json())
        .then(parsedRes => {
            console.log(parsedRes);
        })
    }
}