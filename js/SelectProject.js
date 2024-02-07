let getLogoutBtn = $("#logout");
// let getProject1 = $("#project1");
let getProject1 = document.querySelector("#project1");
let getProject2 = $("#project2");

getLogoutBtn.on("click", function() {
    alert("로그아웃 되었습니다.");
});

// getProject1.on("click", function() {
//     window.location.href = "Ticketing.html";
// });

getProject1.addEventListener("click", function() {
    open("Home.html", "_self");
});