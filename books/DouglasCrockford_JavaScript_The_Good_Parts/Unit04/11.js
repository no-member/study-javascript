// request = prepare_the_request();
// response =send_request_synchronously(request);
// display(response);

request = prepare_the_request();
send_request_asynchronously(request, function (response) {
    display(response);
});


