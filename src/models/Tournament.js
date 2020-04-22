export default class Tournament {
    constructor() {
        this.maxRounds = 0
        this.currentRound = 0
        this.players = []
        this.matches = []
        this.date = new Date()
        this.timeLimit = 60
    }

    getRound(number) {
        return this.matches.filter(match => match.round === number)
    }

    addPlayer(player) {
        this.players.add(player)
    }

    createRound() {
        // TODO
        if (this.currentRound >= this.maxRounds)
            throw new Error('Reached maximum amount of rounds')
        this.currentRound++
    }
}