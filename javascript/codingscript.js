document.getElementById('run-code').addEventListener('click', function() {
    var userCode = document.getElementById('user-code').value;
    document.getElementById('output-area').innerText = userCode;
});
