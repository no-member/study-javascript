const MAX_AGE: number = 100;

export function makeRandomNumber(max: number = MAX_AGE): number {
    return Math.ceil((Math.random() * max));
};
