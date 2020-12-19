// preventDefault 테스트
function logEvent(handlerName, type, cancel, stop, stopImmediate) {
    return function (evt) {
        if (cancel) {
            evt.preventDefault();
        }

        if (stop) {
            evt.stopPropagation();
        }

        if (stopImmediate) {
            evt.stopImmediatePropagation();
        }

        console.log(`${type}: ${handlerName}` + (evt.defaultPrevented ? ' (canceled)' : ''));
    }
}

function addEventLogger(elt, type, action) {
    const capture = type === 'capture';

    elt.addEventListener('click',
        logEvent(elt.tagName, type, action === 'cancel',
            action === 'stop', action === 'stop!'), capture);
}

const body = document.querySelector('body');
const div = document.querySelector('div');
const button = document.querySelector('button');
addEventLogger(body, 'capture');
addEventLogger(body, 'bubble');
addEventLogger(div, 'capture', 'cancel');
addEventLogger(div, 'bubble');
addEventLogger(button, 'capture');
addEventLogger(button, 'bubble');

