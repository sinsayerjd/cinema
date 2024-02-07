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

// 영화 차트 n번째 상세보기 버튼
let getMovieInfoBtn = document.querySelectorAll(".movieInfo");

for(let i = 0; i < getMovieInfoBtn.length; i++) {
    getMovieInfoBtn[i].addEventListener("click", function() {
        if(i == 0) {
            open("MovieDetail1.html", "_self");
        } else if (i == 1) {
            open("MovieDetail2.html", "_self");
        } else if (i == 2) {
            open("MovieDetail3.html", "_self");
        } else if (i == 3) {
            open("MovieDetail4.html", "_self");
        } else if (i == 4) {
            open("MovieDetail5.html", "_self");
        };
    });
};

//영화 포스터 기능

// jQuery 사용
$(function() {
    let getMoviePoster = $(".moviePoster");
    let getMovieInfoBtn = $(".movieInfo");
    
    
    // 포스터 사진에 포커스 갔을 때
    getMoviePoster.on("mouseover focus", function() {
        $(this).css({"opacity":"0.2"});
        $(this).parent().children().eq(3).css({"display":"block"})
    })
    getMovieInfoBtn.on("mouseover focus", function() {
        $(this).parent().children().eq(0).css({"opacity":"0.2"});
        $(this).css({"display":"block"})
    });

    // 포스터 사진에 포커스가 빠졌을 때
    getMoviePoster.on("mouseout blur", function() {
        $(this).css({"opacity":"1"});
        $(this).parent().children().eq(3).css({"display":"none"})
    });
    getMovieInfoBtn.on("mouseout blur", function() {
        $(this).css({"opacity":"1"});
    });
});