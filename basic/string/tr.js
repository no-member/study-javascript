const tr = (str, from, to) => {
    const fixupDash = s => {
        const range = (l, h) => {
            // let's assume a dash in the first or last position is a literal dash
            if (typeof l !== 'string' || typeof h !== 'string') {
                return l || h;
            }
            l = l.charCodeAt(0);
            h = h.charCodeAt(0);
            let sgn = Math.sign(h-l);
            l += sgn;
            h -= sgn;
            return Array.from({length:Math.abs(h-l)+1}, (_, i) => String.fromCharCode(sgn * i + l)).join('');
        }
        return s.split('').map((c, i, a) => c === '-' ? range(a[i-1], a[i+1]) : c).join('');
    }
    from = fixupDash(from);
    to = fixupDash(to).padEnd(from.length, to[to.length-1]);
    if (from[0] == '^') {
        const mapper = Object.assign({}, ...from.split('').map((f, i) => ({[f]: to[i]})));
        return str.split('').map(c => mapper.hasOwnProperty(c) ? mapper[c] : c).join('');
    } else {
        to = to[0];
        const mapper = Object.assign({}, ...from.split('').map((f, i) => ({[f]: f})));
        return str.split('').map(c => mapper.hasOwnProperty(c) ? mapper[c] : to).join('');
    }
};

String.prototype.tr = function(from, to) {
    return tr(this, from, to);
};

console.log("hello".tr('el', 'ip'))      //#=> "hippo"
console.log("hello".tr('aeiou', '*'))    //#=> "h*ll*"
console.log("hello".tr('a-y', 'b-z'))    //#=> "ifmmp"
console.log("hello".tr('^aeiou', '*'))   //#=> "*e**o"
