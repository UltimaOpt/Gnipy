let nav = 0;
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const calendar = document.getElementById('calendar');

function load() {
    const dt = new Date();

    if (nav !== 0) {
        dt.setMonth(new Date().getMonth() + nav);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();
    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dateString = firstDayOfMonth.toLocaleDateString('en-au', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });

    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

    const monthDisplay = document.getElementById('monthDisplay');
    monthDisplay.innerText = `${dt.toLocaleString('en-au', { month: 'long' })} ${year}`;

    calendar.innerHTML = '';

    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
        const clickedDate = new Date(year, month, i - paddingDays);
        const daySquare = document.createElement('div');
        daySquare.classList.add('day');

        if (i > paddingDays) {
            daySquare.innerText = i - paddingDays;
            daySquare.addEventListener('click', () => showTimes(clickedDate));
        } else {
            daySquare.classList.add('padding');
        }

        calendar.appendChild(daySquare);
    }

    function showTimes(clickedDate){
        var newWeekdays = weekdays[clickedDate.getDate()];


        const options = {
            newWeekdays: 'long',
            month: 'long',
            day: 'long',
        };
        dateDisplay.innerText= `${clickedDate.toLocaleString('en-au',{options})}`;

        console.log()
        console.log(newWeekdays);
        

    }


}

function nextClicked() {
    document.getElementById('nextClicked').addEventListener('click', () => {
        nav++;
        load();
    });
}

function backClicked() {
    document.getElementById('backClicked').addEventListener('click', () => {
        nav--;
        load();
    });
}



nextClicked();
backClicked();
load();
