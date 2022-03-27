
const Kibria = {
    id: 101,
    balance: 5000,
    name: 'Rj Kibria',
    treatDay: function (expance) {
        this.balance = this.balance - expance;
        console.log('here555', this);
        return this.balance;
    }
}

const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam',
}
Kibria.treatDay(100);

const heroTreatDay = Kibria.treatDay.bind(heroBalam)
heroTreatDay(500);
heroTreatDay(300);
heroTreatDay(200);
heroTreatDay(300);