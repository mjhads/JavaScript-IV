// CODE here for your Lambda Classes


// * We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// * Lambda personnel can be broken down into three different types of `people`.
//   * **Instructors** - extensions of Person
//   * **Students** - extensions of Person
//   * **Project Managers** - extensions of Instructors
// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:



// ```js
// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });
// ``




// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props



class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
    };

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    };
};



// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'



class Instructor extends Person {
    constructor(InstructorAtts) {
        super(InstructorAtts);
        this.specialty = InstructorAtts.specialty;
        this.favLanguage = InstructorAtts.favLanguage;
        this.catchPhrase = InstructorAtts.catchPhrase;
    };

    demo(subject) {
        console.log(`Today we are learning about ${this.subject}.`);
        return `Today we are learning about ${this.subject}`;
    };

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
}

const naomi = new Instructor({
    name: 'Naomi',
    location: 'Abilene',
    age: 29,
    favLanguage: 'Python',
    specialty: 'Front-end',
    catchPhrase: `How you doin?`
});

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const jesse = new Instructor({
    name: 'Jesse',
    location: 'Lubbock',
    age: 27,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Godfather advice for all situations.`
});

console.log(naomi);
console.log(fred);
console.log(jesse);

// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`




class Student extends Person {
    constructor(StudentAtts) {
        super(StudentAtts);
        this.previousBackground = StudentAtts.previousBackground;
        this.className = StudentAtts.ClassName;
        this.favSubjects = StudentAtts.favSubjects;
    };

    listsSubjects() {
        console.log(`${this.favSubjects}`);
        return `${this.favSubjects}`;
    };

    PRAssignment(subject) {
        console.log(`${student.name} has submitted a PR for ${subject}`);
        return `${student.name} has submitted a PR for ${subject}`;
    };

    sprintChallenge(subject) {
        console.log(`student.name has begun sprint challenge on ${this.subject} `);
        return `student.name has begun sprint challenge on ${this.subject} `;
    };
};

const gabby = new Student({
    name: 'Gabriele',
    location: 'Abilene',
    age: 26,
    previousBackground: 'Banking',
    className: 'WEBPT-7',
    favSubjects: `English, Physical Education, Computer Lab`
});

const mikayla = new Student({
    name: 'Mikayla',
    location: 'Boise',
    age: 25,
    previousBackground: 'model',
    className: 'WEBPT-7',
    favSubjects: `Science, Math, Career Focus`
});

const ebeth = new Student({
    name: 'Elizabeth',
    location: 'Tye',
    age: 28,
    previousBackground: 'Janitorial Work',
    className: 'WEBPT-7',
    favSubjects: `Choir, English, French`
});

console.log(gabby);
console.log(ebeth);
console.log(mikayla);

// #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`



class ProjectManager extends Instructor {
    constructor(PMAtts) {
        super(PMAtts);
        this.gradClassName = PMAtts.gradClassName;
        this.favInstructor = PMAtts.favInstructor;
    };

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
        return `${this.name} announces to ${channel}, @channel standy times!`;
    };

    debugsCode({ Student }, subject) {
        console.log(`{name} debugs {student.name}'s code on {subject}`);
        return `{name} debugs {student.name}'s code on {subject}`;
    };
};


const jordan = new ProjectManager({
    name: 'Jordan',
    location: 'Vancouver',
    age: 32,
    favLanguage: 'Python',
    specialty: 'back-end',
    catchPhrase: `Work hard so you can play hard.`,
    gradClassName: 'WEBPT7',
    favInstructor: 'Jesse'
});

const ashlee = new ProjectManager({
    name: 'Ashlee',
    location: 'Dallas',
    age: 28,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Wisdom takes you further than feelings.`,
    gradClassName: 'WEBPT7',
    favInstructor: 'Fred'
});

const leslie = new ProjectManager({
    name: 'Leslie',
    location: 'Abilene',
    age: 25,
    favLanguage: 'Java',
    specialty: 'back-end',
    catchPhrase: `Eat more nachos..`,
    gradClassName: 'WEBPT7',
    favInstructor: 'Naomi'
});

console.log(jordan);
console.log(ashlee);
console.log(leslie);

