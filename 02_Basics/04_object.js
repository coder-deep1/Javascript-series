// object literal => const myobj =  {}   // (this non singleton object )

// const fbUser = new Object();
// this is singleton object

const fbUser = {};

fbUser.id = "464abcd";
fbUser.name = "harry";
fbUser.email = "harry@gmail.com";
fbUser.isLoggedIn = true;

// console.log(fbUser);

const regUser = {
  email: "omere@gmail.com",
  fullname: {
    userfullname: {
      firstname: "omer",
      lastname: "developer"
    }
  }
};
// console.log(regUser.fullname.userfullname);

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { d: 1, e: 2, f: 3 };
const obj3 = { g: 1, h: 2, i: 3 };
const obj4 = { a: 1, b: 2, c: 3 };

const obj5 = { ...obj1, ...obj2, ...obj3, ...obj4 };
// console.log(obj5);

const Users = [
  {
    id: 1,
    email: "fuser@gmail.com"
  },
  {
    id: 2,
    email: "fuser@gmail.com"
  },
  {
    id: 3,
    email: "fuser@gmail.com"
  },
  {
    id: 4,
    email: "fuser@gmail.com"
  }
];

Users[1].email;
// console.log(fbUser);

// console.log(Object.keys(fbUser));
// console.log(Object.values(fbUser))
// console.log(Object.entries(fbUser))

// console.log(fbUser.hasOwnProperty('isLoggedIn'));

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh"
};

// course.courseInstructor;
const { courseInstructor: instructor } = course;

console.log(instructor);
