const solution = require('./solution');

test('[leo, kiki, eden],[eden, kiki]을 넣었을 때 leo가 나오도록 함', () => {
    expect(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki'])
        ).toEqual('leo');
});