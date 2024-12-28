let students = [{
    name: "Kent Roman",
    email: "kent@gmail.com",
    subject: "Math 2"
},{
    name: "Jhon Smith",
    email: "jhon@gmail.com",
    subject: "Math 1"
},{
    name: "Peter Parker",
    email: "peter@gmail.com",
    subject: "Math 3"
},{
    name: "Jen Timy",
    email: "jen@gmail.com",
    subject: "Science 2"
},{
    name: "Karen Freeman",
    email: "karen@gmail.com",
    subject: "Science 1"
}]

const btn = document.querySelector(".btn-confirm");
const container = document.querySelector(".grid-container");

for (student in students) {
    let data = students[student];
    let name = data["name"];
    let email = data["email"];
    let subject = data["subject"];
    let htmlCode = `
    <div class="grid-item name">${name}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item subject">${subject}</div>
    <div class="grid-item week">
        <select class="week-select">
            <option value="week 1">Week 1</option>
            <option value="week 2">Week 2</option>
        </select>
    </div>`;
    container.innerHTML += htmlCode;
}

btn.addEventListener("click",()=>{
    let confirmar = confirm("Do you want confirm?");
    if (confirmar) {
    document.body.removeChild(btn)
    let elements = document.querySelectorAll(".week");
    let weeksSelect = document.querySelectorAll(".week-select");
    for (element in elements) {
        week = elements[element];
        week.innerHTML = weeksSelect[element].value;
    }
    }
})