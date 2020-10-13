switch(totalBet) {
    case 7:
        totalBet = funds;
        break;
    case 13:
        funds = funds - 1;
        // 위와 같이 break를 생략하는 경우는 반드시 comment를 남길 것
    case 11:
        totalBet = 0;
        break;
    case 21:
        tottalBet = 21;
        break;
    default:
        console.log("No superstition here!");
        break;
}
