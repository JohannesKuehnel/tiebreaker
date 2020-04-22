export default class Player {
    constructor({ firstname = '', lastname = '', dci }) {
        this.firstname = firstname
        this.lastname = lastname
        this.dci = dci
    }

    get name() {
        return `${this.firstname} ${this.lastname}`
    }
}