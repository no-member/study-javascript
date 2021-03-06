const app = new Vue({
    el: '#app',
    data: {
        monster_list: [
            {id: 1, name: '슬라임', hp: 100},
            {id: 2, name: '고블린', hp: 200},
            {id: 3, name: '드래곤', hp: 500}
        ]
    },
    methods: {
        doAttack: function (index) {
            this.monster_list[index].hp -= 10;
        },
        killUnderHp100: function () {
            this.monster_list = this.monster_list.filter(function (monster) {
                return monster.hp > 100
            });
        }
    }
})