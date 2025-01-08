//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Ryan"
tinderUser.isLoogedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "ryan@mail.com",
    fullName: {
        username: {
            firstName: "jack",
            lastname: "Ryan",
        }
    }
}
//console.log(regularUser.fullName.username.firstName.lastname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

//const obj4 = {obj1, obj2}
//const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}   //This metod is mostly used.
//console.log(obj4);


const user = [
    {
        id: 1,
        email: "ryan@mail.com"
    },
    {
        id: 1,
        email: "ryan@mail.com"
    },
    {
        id: 1,
        email: "ryan@mail.com"
    }
]

user[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));




//-----------------------------*************----------------------------------//
/*-----------------------------OBJECT DE-STRUCTURE----------------------------*/

const course = {
    coursename: "chai aur js",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor);


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]