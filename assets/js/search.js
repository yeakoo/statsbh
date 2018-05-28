(function() {

    const socket = io();

    document.getElementById('search').addEventListener('click', e => {
        let name = document.getElementById('player-search').value;
        if (name.length < 1) return;
        console.log(name);
    });

    document.getElementById('player-search').addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13)
            document.getElementById("search").click();
    });
})();
