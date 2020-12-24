const appInfo = {
  company: 'White Knight Software, Inc.',
  version: '1.3.5',
  buildId: '0a9995',
  copyright() {
    return `${new Date.getFullYear()}, ${this.company}`;
  },
};

Object.freeze(appInfo);
console.log(Object.isFrozen(appInfo));

appInfo.newProp = 'test'; // error when env is strict mode
console.log(appInfo);
console.log();

delete appInfo.company; // error when env is strict mode
console.log(appInfo);
console.log();

appInfo.company = 'test'; // error when env is strict mode
console.log(appInfo);
console.log();

Object.defineProperty(appInfo, 'company', {enumerable: false}); // error when env is strict mode
console.log(appInfo);
console.log();

