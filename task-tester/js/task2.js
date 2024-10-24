const TASK_NUMBER_2 = 2;

async function testJsonSuccess(response, prefix = "") {
    if (response.status !== 200) {
        throw new Error(prefix + "Status code isn't 200");
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
        throw new Error(prefix + "Content-Type isn't json.");
    }

    const data = await response.json();
    if (data.success !== true) {
        throw new Error(prefix + "The response isn't {success: true}");
    }
}

async function testTask2Endpoints() {
    const methods = ["GET", "POST", "PATCH", "PUT", "DELETE"];
    for (const method of methods) {
        const response = await fetchWithTimeout("http://localhost:3000/task2", { method });
        const methodMessage = "Method " + method + " :";
        await testJsonSuccess(response, methodMessage);
    }
    return true;
}

const btn2 = document.querySelector("#task2");
btn2.addEventListener('click', async function () {
    try {
        updateMessage(TASK_NUMBER_2, "");
        await testTask2Endpoints();
        updateMessage(TASK_NUMBER_2, `Task passed all the requirements, great job!`, true);
    } catch (e) {
        updateMessage(TASK_NUMBER_2, "Unsuccessful task: " + e);
    }
})
btn2.click();