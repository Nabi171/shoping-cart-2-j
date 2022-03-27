// // // // // const person = new Object();
// // // // // // console.log(person);
// // // // // const human = Object.create(student);
// // // // // console.log(human.job);

// // // // class people {
// // // //     constructor(name, age) {
// // // //         this.name = name;
// // // //         this.age;
// // // //     }
// // // // }
// // // // const peop = new people('Mansu', 12);
// // // // // console.log(peop);

// // // // function Manus(name) {
// // // //     this.name = name;
// // // // }
// // // // const man = new Manus('Kader');
// // // // console.log(man);



// // // const student = {
// // //     id: 101,
// // //     balance: 5000,
// // //     name: 'Rj Kibria',
// // //     major: 'mathematicds',
// // //     isRich: false,
// // //     subjects: ['english', 'economics', 'math 101', 'calculas'],
// // //     bestFriend: {
// // //         name: 'kindi',
// // //         major: 'mathematics'
// // //     },
// // //     takeExam: function () {
// // //         console.log(this.name, 'taking exam')
// // //     },
// // //     treatDay: function (expance) {
// // //         this.balance = this.balance - expance;
// // //         return this.balance;
// // //     }
// // // }

// // // student.takeExam();
// // // const remaining = student.treatDay(900);
// // // const remaining2 = student.treatDay(1000);
// // // console.log(remaining2);



// // const botlle = {
// //     color: 'yellow',
// //     hold: 'water',
// //     price: 90,
// //     isCln: true
// // };
// // // getting all property names
// // const keys = Object.keys(botlle);
// // // console.log(keys);
// // const values = Object.values(botlle);
// // // console.log(values);\
// // const pairs = Object.entries(botlle);
// // // console.log(pairs);
// // delete botlle.isCln;
// // // console.log(botlle);




// const botlle = {
//     color: 'yellow',
//     hold: 'water',
//     price: 90,
//     isCln: true
// };
// for (const [key, value] of Object.entries(botlle)) {
//     console.log(key, value);
// }
// // const entries = Object.entries(botlle);
// // console.log(entries);

const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };
// if (first == second) {
//     console.log('objects are equal');
// }
// else {
//     console.log('obj r different');
// }
console.log(JSON.stringify(first));
console.log(JSON.stringify(second));
// if(JSON.stringify(first)===JSON.stringify(second)){
//     console.log('objects are equal')
// }

function compareObjects(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }
    return true;
}
const isEqual = compareObjects(first2, second2);
console.log(isEqual);