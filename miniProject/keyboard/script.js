let insert = document.getElementById('insert');

window.addEventListener('keydown',(e) => {
    insert.innerHTML = `
    <table border='1'>
        <tr>
            <th>Key</th>
            <th>KeyName</th>
            <th>KeyCode</th>
        </tr>
        <tr>
            <td>${e.code}</td>
            <td>${e.key === " " ? "space" : e.key}</td>
            <td>${e.keyCode}</td>
        </tr>
    </table>
    `
})

