var app = new Vue({
    el: '#app',
    data: {
        message: "Hello!",
        message2: "Test2"
    },
    methods: {
        changeMessage2(event) {
            this.message2 = event.target.value;
        }
    }
})