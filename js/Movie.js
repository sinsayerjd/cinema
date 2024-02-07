// 로고 이미지 클릭 시 새로고침
let getLogo = document.querySelector("#logoCase");

getLogo.addEventListener("click", function() {
    open("Home.html","_self");
});

// 로그아웃 기능
let getLogoutBtn = document.querySelector("#logout");

getLogoutBtn.addEventListener("click", function() {
    alert("로그아웃 되었습니다.");
});

// 홈 버튼 기능
let getHomeBtn = document.querySelector("#homeBtn");

getHomeBtn.addEventListener("click", function() {
    open("Home.html","_self");
});

// 영화 버튼 기능
let getMovieBtn = document.querySelector("#movieBtn");

getMovieBtn.addEventListener("click", function() {
    open("Movie.html", "_self");
});

// 예매 버튼 기능
let getTicketingBtn = document.querySelector("#ticketingBtn");

getTicketingBtn.addEventListener("click", function() {
    open("Booking.html", "_self");
});

// 예매하기 버튼 기능
let getBookBtn = document.querySelectorAll(".bookBtn");

for(let i = 0; i < getBookBtn.length; i++) {
    getBookBtn[i].addEventListener("click", function() {
        open("Booking.html", "_self");
        
    });
};