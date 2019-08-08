// Працює для будь-якої кількості таймерів на сторінці + для модальних вікон.
// Задати для тегів відповідні класси "hours", "minutes", "seconds".

// Для сторінок, де час відображається порозрядно, вказуємо different = true (15 рядок).
// Приклад image.prntscr.com/image/TzEcLkY_T_SiX5GrLlIvdw.png

// Для очищення localStorage в консолі браузера прописуємо localStorage.clear();

document.addEventListener('DOMContentLoaded', function () {
    if (!localStorage.getItem("heytimer")) {
        var time = {
            days: 0,            // Кількість днів;
            hours: 24,           // Кількість годин;
            minutes: 59,        // Кількість хвилин;
            seconds: 45          // Кількість секунд;
        }, different = false;

        time = time.days * 86400 + time.hours * 3600 + time.minutes * 60 + time.seconds;


        localStorage.setItem("time", time);
        localStorage.setItem("heytimer", true);
        localStorage.setItem("different", different);
    }
    hellotimer();
});

function hellotimer() {
    var time = localStorage.getItem('time'),
        different = localStorage.getItem('different') === "true",
        days = parseInt(time / 86400, 10),
        hours = parseInt(time % 86400 / 3600, 10),
        minutes = parseInt((time - (days * 86400 + hours * 3600) ) / 60, 10),
        seconds = parseInt(time % 60, 10);

    minutes = minutes < 10 ? "0" + minutes :  "" + minutes;
    seconds = seconds < 10 ? "0" + seconds :  "" + seconds;
    hours = hours < 10 ? "0" + hours :  "" + hours;
    days = days < 10 ? "0" + days : "" + days;

    if (--time < 0) {
        return;
    }

    var daysHTML = document.getElementsByClassName("days");
    var hoursHTML = document.getElementsByClassName("hours");
    var minutesHTML = document.getElementsByClassName("minutes");
    var secondsHTML = document.getElementsByClassName("seconds");

    if (different) {
        seconds = seconds.split("");
        minutes = minutes.split("");
        hours = hours.split("");
        days = days.split("");

        doubleFilling(daysHTML, days);
        doubleFilling(hoursHTML, hours);
        doubleFilling(minutesHTML, minutes);
        doubleFilling(secondsHTML, seconds);
    } else {
        filling(daysHTML, days);
        filling(hoursHTML, hours);
        filling(minutesHTML, minutes);
        filling(secondsHTML, seconds);
    }

    localStorage.setItem("time", time);
    setTimeout(hellotimer, 1000);
}

function filling(obj, value) {
    for (var i = 0; i < obj.length; i++) {
        obj[i].innerHTML = value;
    }
};

function doubleFilling(obj, value) {
    for (var i = 0; i < obj.length; i++) {
        obj[i].innerHTML = value[i % 2];
    }
}

// Для відміни записку localStorage, закоментувати 21 рядок localStorage.setItem("heytimer", true);