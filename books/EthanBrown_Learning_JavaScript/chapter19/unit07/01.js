function refreshServerInfo() {
    const $serverInfo = $('.serverInfo');
    $.get('http://localhost:7070').then(
        function (data) {
            Object.keys(data).forEach(p => {
                $(`[data-replace="${p}"]`).text(data[p]);
            });
            console.log(data);
        },
        function (jqXHR, textStatus, err) {
            console.error(err);
            $serverInfo.addClass('error')
                .html('Error connecting to server.');
        }
    )
}

setInterval(refreshServerInfo, 200);
