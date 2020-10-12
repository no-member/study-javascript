const func = function (a, b, c) {
    console.log(a, b, c, this);
};

func(1, 2, 3);
func.call({x: 1}, 4, 5, 6);
func.call(4, 5, 6, {x: 1});
