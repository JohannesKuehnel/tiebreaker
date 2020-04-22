export default class Match {
    constructor(round, playerA, playerB) {
        this.players = {
            a: playerA,
            b: playerB
        }
        this.round = round
        this.score = {
            a: 0,
            b: 0,
            draw: 0
        }
    }
}