switch(tottalBet) {
    case 7:
        tottalBet = funds;
        break;
    case 13:
        funds = funds - 1;
        // 위와 같이 break를 생략하는 경우는 반드시 comment를 남길 것
    case 11:
        tottalBet = 0;
        break;
    case 21:
        tottalBet = 21;
        break;
}
