var app = new Vue({
    el: '#app',
    data: {
        toggleTest: true
    },
    methods: {
        toggle: function () {
            this.toggleTest = !this.toggleTest;
        }
    }
})