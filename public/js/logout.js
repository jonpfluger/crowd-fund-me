document.getElementById('logout').addEventListener('click', e => {
    e.preventDefault()
    fetch('/api/users/logout', {
        method: 'POST'
    })
        .then(response => {
            if (response.ok === true) {
                window.location.href = '/login'
            }
        })
        .catch(err => console.log(err))
})