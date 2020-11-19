var app = new Vue({
    el: '#app',
    data: {
        message: "world",
        url: 'https://ko.vuejs.org/'
    },
    methods: {
        changeUrl: function () {
            this.url = '#'
        }
    }
})