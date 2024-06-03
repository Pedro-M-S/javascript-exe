

export const URL_API = 'https://jsonplaceholder.typicode.com';

export function fetchUsersFromWS(success, failure) {
    fetch(`${URL_API}/users`)
        .then(res => res.json())
        .then(res => success(res))
        .catch(err => failure(err.message))
        ;
}

export function fetchUserToDosFromWS(success, failure, id) {
    fetch(`${URL_API}/posts?userId=${id}`)
        .then(res => res.json())
        .then(res => success(res))
        .catch(err => failure(err.message))
        ;
}

