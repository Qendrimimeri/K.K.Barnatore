$(document).ready(function () {
    $('#button-put').click(function () {
        let id = [];
        $.get("http://localhost:3000/users", function(data) {
            for (let i = 0; i < data.length; i++) {
                id.push(data[i].id);
            }
        });
        console.log(id);
    });
});