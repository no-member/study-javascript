const app = new Vue({
    el: '#app',
    data: {
        monster_name: '',
        monster_list: [
            {id: 1, name: '슬라임', hp: 100},
            {id: 2, name: '고블린', hp: 200},
            {id: 3, name: '드래곤', hp: 500}
        ]
    },
    methods: {
        addMonster: function () {
            const ids = this.monster_list.map(monster => monster.id);
            const currentMaxId = Math.max(...ids);

            this.monster_list.push({
                id: currentMaxId + 1,
                name: this.monster_name,
                hp: this.getRandomInt(1, 999)
            })
        },

        getRandomInt: function (min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
        },

        removeMonster: function (index) {
            this.monster_list.splice(index, 1);
        }
    }
})