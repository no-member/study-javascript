const areYouPlayingBanjo = require('./Banjo');

test('areYouPlayingBanjo("Martin")은 Martin does not play banjo를 반환함',() =>{
    expect(areYouPlayingBanjo("Martin")).toBe('Martin does not play banjo');
});

test('areYouPlayingBanjo("Mark")은 Mark does not play banjo를 반환함',() =>{
    expect(areYouPlayingBanjo("Mark")).toBe('Mark does not play banjo');
});
