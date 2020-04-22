import Player from "./Player";

export default class Participant extends Player {
    constructor(args) {
        super(args)
        this.matches = {
            total: 0,
            won: 0,
            drawn: 0
        }
        this.games = {
            total: 0,
            won: 0,
            drawn: 0
        }
        this.opponents = []
        this.active = true // player is not dropped
    }

    drop() {
        this.active = false
    }
}