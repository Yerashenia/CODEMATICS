document.getElementById('run-code').addEventListener('click', function() {
    let userCode = document.getElementById('user-code').value;
    let outputArea = document.getElementById('output-area');

    try {
        let output = eval(userCode);
        outputArea.innerText = `Result: \n${output}`;
    } catch (error) {
        outputArea.innerText = `Error: \n${error}`;
    }
});
