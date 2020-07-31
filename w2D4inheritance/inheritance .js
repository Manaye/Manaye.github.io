/* Ex1: 
    Define a filter function on the String object. The function accepts an array of strings
     that specifies a list of banned words.*/
String.prototype.filter = function (banned) {
    let splitted = this.split(" ");
    return splitted.filter(s => s !== banned
).join(" ");
}
console.log("I am not smart".filter("not"));
/*"Exercise 2:  Write a BubbleSort algorithm on the Array object. 
 Bubble sort is a simple sorting algorithm that works by repeatedly 
 stepping through the list to be sorted,
Example:[6,4,0, 3,-2,1].bubbleSort();Output : */
Array.prototype.bubbleSort = function () {
    let length = this.length;
    for (let i = (length - 1); i >= 0; i--) {
        for (let j = (length - i); j > 0; j--) {
            if (this[j] < this[j - 1]) {
                let tmp = this[j];
                this[j] = this[j - 1];
                this[j - 1] = tmp;
            }
        }
    }
    return this;
}

 /*#3*/
function Person(name) {
    this.name = name;
};   
const teacher = new Person("Michael Zijlstra");
Person.prototype.teach = function (subject) {
    return this.name + " is now teaching" + subject;
}
console.log(teacher.teach(" WAP"));

const person = function () {
    return {name: "Paul"}
};
const teach = Object.create(person());
teach.name = "Michael Zijlstra";
teach.course = function (subject) {
    return this.name + " is now teaching " + subject
};
console.log(teach.course("WAP"));

 //Using Object Prototype Aproach
const Persons = {
    name: "Unknown", age: 20, greeting: function () {
        return "Geeetings: my name is" + this.name + "and I am " + name.age + "years Old"
    },
    salute: function () {
        return "Good morning!, and in case I dont see you,good afternoon, good evening and good night!"
    }
}
const Student = Object.create(Persons);
Student.major = "Unknown";
Student.greeting = function () {
    return "Hey my name is " + this.name + " and I am studying " + this.major
};
Student.name = "Hiwot Nega";
Student.major = "WAP";
console.log(Student.greeting());
const Professor = Object.create(Persons);
Professor.department = "Unknown";
Professor.salute = function () {
    return "Good day Good day,\n" +
        "my name is " + this.name + " and I am in the " + this.department + " department.";
}

Professor.name = "Michael Zijlstra";
Professor.department = "Computer Science";
console.log(Professor.salute());
const professor = Object.create(Professor);
const student = Object.create(Student);
console.log(professor.salute());
console.log(student.greeting());

