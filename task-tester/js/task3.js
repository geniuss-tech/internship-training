const TASK_NUMBER_3 = 3;

async function testTask3Unauthorized() {
    const response = await fetchWithTimeout("http://localhost:3000/task3", {});
    if (response.status !== 401) {
        throw new Error("Unauthenticated: Status code isn't 401");
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
        throw new Error("Unauthenticated: Content-Type isn't json.");
    }

    const data = await response.json();
    if (data.message !== "meeeeeeen?") {
        throw new Error("Unauthenticated: The response isn't {message: \"meeeeeeen ?\"}");
    }
    return true;
}

async function testTask3Authorized() {
    const response = await fetchWithTimeout("http://localhost:3000/task3", { headers: { "authorization": "ya 3m ana 3omda efta7" } });
    await testJsonSuccess(response, "Authenticated: ");
    return true;
}

const btn3 = document.querySelector("#task" + TASK_NUMBER_3);
btn3.addEventListener('click', async function () {
    try {
        updateMessage(TASK_NUMBER_3, "");
        await testTask3Unauthorized();
        await testTask3Authorized();
        updateMessage(TASK_NUMBER_3, `Task passed all the requirements, great job!`, true);
    } catch (e) {
        updateMessage(TASK_NUMBER_3, "Unsuccessful task: " + e);
    }
})
btn3.click();