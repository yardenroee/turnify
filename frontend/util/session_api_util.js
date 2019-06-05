export const signUpUser = (user) => {
    return $.ajax({
        method: 'post',
        url: 'api/users',
        data: {user}
    });
};

export const logInUser = (user) => {
    return $.ajax({
        method: 'post',
        url: 'api/session',
        data: {user}
    });
};

export const logOutUser = () => {
    return $.ajax({
        method: 'delete',
        url: 'api/session',
    });
};

export const logInDemoUser = () => {
    let data = { "user": { "username": "demo", "password": "123456"}};
    return $.ajax({
        method: 'post',
        url: 'api/session',
        data: data
    })
}