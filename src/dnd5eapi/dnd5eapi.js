export const fetchResources = (url) => {
    return fetch(url)
        .then(res => res.json())
        .then(result => {
            return result;
        })
        .catch(error => console.log(error));
}

