const student = {
    name : "Ali",
    age : 14,
    class : 9,
    subjects : ["physics", "chemistry", "computer", "math"],
    username : "ali@123",
    password : "abcd",
    city : "Feroza"
}

// let user = student.username;

let {username: user,  password: secret, city: place = "Lahore"} = student;
