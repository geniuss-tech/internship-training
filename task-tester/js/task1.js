const TASK_NUMBER = 1;

async function testFirstEndpoint() {
    const response = await fetchWithTimeout("http://localhost:3000/task1", {});

    if (response.status !== 200) {
        throw new Error("Status code isn't 200");
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('text/plain')) {
        throw new Error("Content-Type isn't plain text.");
    }

    const text = await response.text();
    if (text.trim() !== "hello world") {
        throw new Error("The response isn't \"hello world\"");
    }

    return true;
}

const btn = document.querySelector("#task1");
btn.addEventListener('click', async function () {
    try {
        updateMessage(TASK_NUMBER, "");
        await testFirstEndpoint();
        updateMessage(TASK_NUMBER, `Task passed all the requirements, great job!`, true);
    } catch (e) {
        updateMessage(TASK_NUMBER, "Unsuccessful task: " + e);
    }
})
btn.click();