
const Kibria = {
    id: 101,
    balance: 5000,
    name: 'Rj Kibria',
    treatDay: function (expance, tax) {
        this.balance = this.balance - expance - boksis - tax;
        console.log('here555', this);
        return this.balance;
    }
}

const heroBalam = {
    id: 102,
    balance: 6000,
    name: 'Hero Balam',
}

const normalGolam = {
    id: 102,
    balance: 8000,
    name: 'Normal Golam'
}

// Kibria.treatDay.call(heroBalam, 500, 100, 50)
Kibria.treatDay.apply(heroBalam, [500, 100, 50])