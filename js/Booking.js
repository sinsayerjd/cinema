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



// 옵션1 영화 선택 기능
let getOptionMovieContent = document.querySelectorAll(".optionMovieContent");
let idx1 = -1;

for(let i = 0; i < getOptionMovieContent.length; i++) {
    getOptionMovieContent[i].addEventListener("click", function() {
        if(idx1 == -1) {
            getOptionMovieContent[i].style.backgroundColor = "rgb(230, 228, 217)";
            getOptionMovieContent[i].classList.add("selectMovie");
        }
        else {
            getOptionMovieContent[idx1].style.backgroundColor = "";
            getOptionMovieContent[idx1].classList.remove("selectMovie");
            getOptionMovieContent[i].style.backgroundColor = "rgb(230, 228, 217)";
            getOptionMovieContent[i].classList.add("selectMovie");
        }
        idx1 = i;
    });
};

// 옵션1 극장 선택 기능
let getOptionTheaterContent = document.querySelectorAll(".optionTheaterContent");
let getCinema1 = document.querySelector("#cinema1");
let getCinema2 = document.querySelector("#cinema2");

for(let i = 0; i < getOptionTheaterContent.length; i++) {
    getOptionTheaterContent[i].addEventListener("click", function() {
        if(i == 0) {
            getOptionTheaterContent[0].style.backgroundColor = "rgb(230, 228, 217)";
            getOptionTheaterContent[0].classList.add("selectTheater");
            getOptionTheaterContent[1].style.backgroundColor = "";
            getOptionTheaterContent[1].classList.remove("selectTheater");
            getCinema1.style.display = "block";
            getCinema2.style.display = "none";
        } else if (i == 1) {
            getOptionTheaterContent[1].style.backgroundColor = "rgb(230, 228, 217)";
            getOptionTheaterContent[1].classList.add("selectTheater");
            getOptionTheaterContent[0].style.backgroundColor = "";
            getOptionTheaterContent[0].classList.remove("selectTheater");
            getCinema2.style.display = "block";
            getCinema1.style.display = "none";
        }
    });
}


// 옵션1 날짜 선택 기능

// 옵션1 시간 선택 기능
let getOptionTimeContent = document.querySelectorAll(".optionTimeContent");
let idx3 = -1;

for(let i = 0; i < getOptionTimeContent.length; i++) {
    getOptionTimeContent[i].addEventListener("click", function() {
        if(idx3 == -1) {
            getOptionTimeContent[i].style.backgroundColor = "rgb(230, 228, 217)";
            getOptionTimeContent[i].classList.add("selectTime");
        }
        else {
            getOptionTimeContent[idx3].style.backgroundColor = "";
            getOptionTimeContent[idx3].classList.remove("selectTime");
            getOptionTimeContent[i].style.backgroundColor = "rgb(230, 228, 217)";
            getOptionTimeContent[i].classList.add("selectTime");
        }
        idx3 = i;
    });
};

// 옵션2 : 인원 선택 기능
// 성인
let getAdultMinusBtn = document.querySelector("#adultMinus");
let getAdultPlusBtn = document.querySelector("#adultPlus");
let getAdultNumber = document.querySelector("#adultNumber");

let adultNumber = 0;
let adolescentNumber = 0;
let SeniorNumber = 0;
let DisabledNumber = 0;


getAdultPlusBtn.addEventListener("click", function() {
    if((adultNumber + adolescentNumber + SeniorNumber + DisabledNumber) < 8) {
        getAdultNumber.innerHTML = ++adultNumber;
    } else {
        // 모달 창 띄우기
        alert("최대 인원은 8명 입니다.")
    }
    console.log("+"+adultNumber)
});

getAdultMinusBtn.addEventListener("click", function() {
    if(adultNumber > 0)  {
        getAdultNumber.innerHTML = --adultNumber;
    } else {
        // 모달 창 띄우기
        alert("인원을 입력하세요.");
    }
    console.log("-" + adultNumber)

});

// 청소년
let getAdolescentMinusBtn = document.querySelector("#adolescentMinus");
let getAdolescentPlusBtn = document.querySelector("#adolescentPlus");
let getAdolescentNumber = document.querySelector("#adolescentNumber");

getAdolescentPlusBtn.addEventListener("click", function() {
    if((adultNumber + adolescentNumber + SeniorNumber + DisabledNumber) < 8) {
        getAdolescentNumber.innerHTML = ++adolescentNumber;
    } else {
        // 모달 창 띄우기
        alert("최대 인원은 8명 입니다.")
    }
});

getAdolescentMinusBtn.addEventListener("click", function() {
    if(adolescentNumber > 0)  {
        getAdolescentNumber.innerHTML = --adolescentNumber;
    } else {
        // 모달 창 띄우기
        alert("인원을 입력하세요.");
    }
});

// 시니어
let getSeniorMinusBtn = document.querySelector("#seniorMinus");
let getSeniorPlusBtn = document.querySelector("#seniorPlus");
let getSeniorNumber = document.querySelector("#seniorNumber");

getSeniorPlusBtn.addEventListener("click", function() {
    if((adultNumber + adolescentNumber + SeniorNumber + DisabledNumber) < 8) {
        getSeniorNumber.innerHTML = ++SeniorNumber;
    } else {
        // 모달 창 띄우기
        alert("최대 인원은 8명 입니다.")
    }
});

getSeniorMinusBtn.addEventListener("click", function() {
    if(SeniorNumber > 0)  {
        getSeniorNumber.innerHTML = --SeniorNumber;
    } else {
        // 모달 창 띄우기
        alert("인원을 입력하세요.");
    }
});

// 장애인
let getDisabledMinusBtn = document.querySelector("#disabledMinus");
let getDisabledPlusBtn = document.querySelector("#disabledPlus");
let getDisabledNumber = document.querySelector("#disabledNumber");

getDisabledPlusBtn.addEventListener("click", function() {
    if((adultNumber + adolescentNumber + SeniorNumber + DisabledNumber) < 8) {
        getDisabledNumber.innerHTML = ++DisabledNumber;
    } else {
        // 모달 창 띄우기
        alert("최대 인원은 8명 입니다.")
    }
});

getDisabledMinusBtn.addEventListener("click", function() {
    if(DisabledNumber > 0)  {
        getDisabledNumber.innerHTML = --DisabledNumber;
    } else {
        // 모달 창 띄우기
        alert("인원을 입력하세요.");
    }
});

// 옵션3 : 좌석 선택 기능
$(function() {
    $(".seat").on("click", function() {
        if($(this).hasClass("selectSeat")) {
            $(this).css({"backgroundColor":""}).removeClass("selectSeat");
        } else {
            $(this).css({"backgroundColor":"black"}).addClass("selectSeat");
        }
    });
});

// 결제하기 버튼 기능
let getPaymentBtn = document.querySelector("#payment");

getPaymentBtn.addEventListener("click", function() {
    open("Payment.html", "_self");
});