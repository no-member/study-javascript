const o = {
    name: 'Julie',
    greetBackwards: function () {
        function getReverseName() {
            let nameBackward = '';
            for (let i = this.name.length - 1; i >= 0; i--) {
                nameBackward += this.name[i];
            }
            return nameBackward;
        }

        return `${getReverseName()} si eman ym, olloH`;
    }
};

console.log(o.greetBackwards())
o.greetBackwards();