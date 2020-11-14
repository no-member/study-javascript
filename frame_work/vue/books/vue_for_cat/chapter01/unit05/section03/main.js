var app = new Vue({
    el: '#app',
    data: {
        handleClick:function (event) {
            alert(event.target)
        }
    }
});
