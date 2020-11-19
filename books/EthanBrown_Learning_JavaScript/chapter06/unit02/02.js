function getGreeting() {
    console.log("Hello world!");
}

const o = {};
o.f = getGreeting;
o.f();
