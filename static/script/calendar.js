//https://webdesign.tutsplus.com/learn-how-to-code-a-simple-javascript-calendar-and-datepicker--cms-108322t

let display = document.querySelector(".display");
let days = document.querySelector(".days");
let previous = document.querySelector(".left");
let next = document.querySelector(".right");
let selected = document.querySelector(".selected");

let date = new Date();

let year = date.getFullYear();
let month = date.getMonth();

function displayCalendar() {
    const firstDay = new Date(year, month, 1);

    const lastDay = new Date(year, month + 1, 0);

    const firstDayIndex = firstDay.getDay(); //4

    const numberOfDays = lastDay.getDate(); //31

    let formattedDate = date.toLocaleString("en-US", {
        month: "long",
        year: "numeric"
    });

    display.innerHTML = `${formattedDate}`;

    for (let x = 1; x <= firstDayIndex; x++) {
        const div = document.createElement("div");
        div.innerHTML += "";

        days.appendChild(div);
    }

    for (let i = 1; i <= numberOfDays; i++) {
        let div = document.createElement("div");
        let currentDate = new Date(year, month, i);

        div.dataset.date = currentDate.toDateString();

        div.innerHTML += i;
        days.appendChild(div);
        if (
            currentDate.getFullYear() === new Date().getFullYear() &&
            currentDate.getMonth() === new Date().getMonth() &&
            currentDate.getDate() === new Date().getDate()
        ) {
            div.classList.add("current-date");
        }
    }
}

// Call the function to display the calendar
displayCalendar();

previous.addEventListener("click", () => {
    days.innerHTML = "";
    selected.innerHTML = "";

    if (month < 0) {
        month = 11;
        year = year - 1;
    }

    console.log(month)
    month = month - 1;
    console.log(month)

    const d = new Date();
    let currMonth = d.getMonth();
    console.log(currMonth)

    if (currMonth === month) {
        document.getElementById("prev").classList.add("no-click")
    }

    date.setMonth(month);

    document.getElementById("next").classList.remove("no-click")

    displayCalendar();
    displaySelected();
});

next.addEventListener("click", () => {
    days.innerHTML = "";
    selected.innerHTML = "";

    if (month > 11) {
        month = 0;
        year = year + 1;
    }

    limit = threeMonth ()

    month = month + 1;
    date.setMonth(month);

    if (month === limit) {
        document.getElementById("next").classList.add("no-click")
    }

    document.getElementById("prev").classList.remove("no-click")

    displayCalendar();
    displaySelected();
});

function threeMonth () {
    const d = new Date();
    let currMonth = d.getMonth();
    currMonth += 3

    if (currMonth === 12) {
        currMonth = 0;
    } else if (currMonth === 13) {
        currMonth = 1;
    } else if (currMonth === 14) {
        currMonth = 2;
    }

    return currMonth;

}

function displaySelected() {
    const dayElements = document.querySelectorAll(".days div");
    dayElements.forEach((day) => {
        day.addEventListener("click", (e) => {
            const selectedDate = e.target.dataset.date;
            selected.innerHTML = `Selected Date : ${selectedDate}`;
        });
    });
}
displaySelected();