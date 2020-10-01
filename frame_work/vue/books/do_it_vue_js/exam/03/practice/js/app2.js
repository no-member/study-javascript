Vue.component('sibling-component',{
    props: ['hello'],
    template: '<p>{{ hello }}</p>'
});

Vue.component('child-component', {
    props: ['propsdata'],
    template: '<p>{{ propsdata }}</p>'
});

const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue! paseed from Parent Component',
        anotherMessage: 'Hello World!'
    }
})