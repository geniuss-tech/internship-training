const fetchWithTimeout = (url, options, timeout = 1000) => {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error('Request timed out')), timeout);
        fetch(url, options)
            .then(response => {
                clearTimeout(timer);
                resolve(response);
            })
            .catch(err => {
                clearTimeout(timer);
                reject(err);
            });
    });
};

function updateMessage(id, value, success = false) {
    const element = document.querySelector("#message_for_task_" + id);
    element.innerHTML = value;
    if (success) {
        element.style.color = 'green';
    } else {
        element.style.color = 'red';
    }

}