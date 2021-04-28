export const currencyInit = () => {
    return fetch(`http://data.fixer.io/api/latest?access_key=9b27add0d6a820fdc347874e8aec2378`, {
        method: 'GET',
        headers: {
            'Content-Type': 'text/plain'
        }
    })
        .then((res) => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        }
        )
}

export const getCurrencyNames = () => {
    return fetch(`http://data.fixer.io/api/symbols?access_key=9b27add0d6a820fdc347874e8aec2378`, {
        method: 'GET',
        headers: {
            'Content-Type': 'text/plain'
        }
    })
        .then((res) => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        }
        )
}