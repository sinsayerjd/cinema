// 종합해서 보여주기
let showMovie = document.querySelector("#resultMovie");
let showTheater = document.querySelector("#resultTheater");
let showTime = document.querySelector("#resultTime");
let showDate = document.querySelector("#resultDate");

// 영화 정보 가져오기
let getMovie = document.querySelectorAll(".optionMovieContent");

for(let i = 0; i < getMovie.length; i++) {
    getMovie[i].addEventListener("click", function() {
        showMovie.innerHTML = getMovie[i].textContent;        
    });
};

// 극장 정보 가져오기
let getTheater = document.querySelectorAll(".optionTheaterContent");

for(let i = 0; i < getTheater.length; i++) {
    getTheater[i].addEventListener("click", function() {
        showTheater.innerHTML = getTheater[i].textContent;
    });
};

// 날짜 정보 가져오기
let showYear;
let showMonth;
let showDay;

$(function() {
    $(".showDate").on("click", function() {
        showYear = $("#year").text();
        showMonth = $("#month").text();
        showDay = $(this).text()

        $("#resultDate").text(showYear + "년" + showMonth + "월 " + showDay + "일")
    })
})

// 상영 시간 정보 가져오기
let getTime = document.querySelectorAll(".optionTimeContent");

for(let i = 0; i < getTime.length; i++) {
    getTime[i].addEventListener("click", function() {
        showTime.innerHTML = getTime[i].textContent + " 입니다.";
    });
};
