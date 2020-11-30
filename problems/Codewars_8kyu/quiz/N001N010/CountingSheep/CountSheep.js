/**
 * 주어진 리스트에서 true의 개수를 반환하는 함수
 * @param {array} list
 * @return {number} 주어진 리스트에서 true의 개수
 */
const countSheep = list => {
    if (list === null) {
        return 0;
    }
    return list.filter(Boolean).length;
};

module.exports = countSheep;
