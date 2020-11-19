var app = new Vue({
    el: '#app',
    methods: {
        increment: function () {
            // 미리 다른 변수에 대입하면 setTimeout 내부에서 사용할 수 있음
            var vm = this;
            setTimeout(function () {
                vm.count++
            }, 100);

            // bind로 this를 변경하는 방법
            setTimeout(function () {
                this.count++
            }.bind(this), 100);

            // 화살표 함수를 사용하면 setTimeout이 호출되는 increment 메서드의 this가 되므로
            // Vue 인스턴스에 접근할 수 있음
            setTimeout(() => {
                this.count++
            }, 100)

            // 익명 함수가 아니라 메서드를 지정하는 방법
            setTimeout(this.callback, 100)

        }
    }
})