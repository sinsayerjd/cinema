let now = new Date();
let curYear = now.getFullYear();
let curMonth = now.getMonth();
let curDate = now.getDate(); // 오늘 날짜
let curDay = now.getDay(); // 일주일 기준 오늘 날짜가 몇번째 요일인지
let today = new Date(curYear, curMonth, curDate);   
let dayArr = ["일", "월", "화", "수", "목", "금", "토"]

let setYear = document.querySelector("#year");
let setMonth = document.querySelector("#month");
let setDate = document.querySelector("#date");


for(let i = 0; i < 7; i++) {
    let nextDate = new Date(today);
    nextDate.setDate(today.getDate() + i);
    let dayIndex = (curDay + i) % 7; // 요일 배열의 인덱스를 계산
    let dateText = `<div class = "showDate">${dayArr[dayIndex]} ${nextDate.getDate()}</div>`; // 요일 + (날짜) 형식으로 출력

    // 토요일(6)은 파란색, 일요일(0)은 빨간색으로 변경
    if (dayIndex === 6) {
        dateText = `<span style="color: blue;">${dateText}</span>`;
    } else if (dayIndex === 0) {
        dateText = `<span style="color: red;">${dateText}</span>`;
    }
    setDate.innerHTML += dateText + "<br>";
}

setYear.innerHTML = curYear;
setMonth.innerHTML = curMonth + 1;