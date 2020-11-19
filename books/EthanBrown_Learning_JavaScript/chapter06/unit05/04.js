const o = {
    name: 'Julie',
    greetBackwards: function () {
        const self = this;

        function getReverseName() {
            let nameBackward = '';
            for (let i = self.name.length - 1; i >= 0; i--) {
                nameBackward += self.name[i];
            }
            return nameBackward;
        }

        return `${getReverseName()} si eman ym, olloH`;
    }
};

console.log(o.greetBackwards())
o.greetBackwards();
