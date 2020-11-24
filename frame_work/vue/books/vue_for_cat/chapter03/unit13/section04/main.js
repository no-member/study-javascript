var app = new Vue({
    el: '#app',
    methods: {
        handlerScroll() {
            console.log("use scroll");
        },
        handlerWheel() {
            console.log("use mouse-wheel");
        },
        handleDrag() {
            console.log("use drag")
        }
    }
})