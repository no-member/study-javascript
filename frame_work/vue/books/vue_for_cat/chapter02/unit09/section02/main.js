var app = new Vue({
    el: '#app',
    data: {
        ok: true
    },
    methods: {
        changeOk() {
            this.ok = !this.ok;
        }
    }
})