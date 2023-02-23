var list = document.getElementById('user-list')

function newUser(){
    let name = document.getElementById('name')
    let email = document.getElementById("inputEmail");
    let dob = document.getElementById("dateOb");
    let gender = document.getElementById("gender");
    let hobby = document.getElementById("hobby");
    let country = document.getElementById("country");
    let state = document.getElementById("state");
    let city = document.getElementById("city");

    let obj = document.createElement('li')
    obj.appendChild(document.createTextNode(name + ' ' + email + ' ' + dob + ' ' + gender + ' ' + hobby + ' ' + country + ' ' + state + ' ' + city));
    list.appendChild(obj);

    return false;
}