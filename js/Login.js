let getID = $("#user_ID");
let getPassword = $("#user_password")
let getLoginBtn = $("#loginBtn");

getLoginBtn.on("click", function() {
    console.log(getID.val());
    console.log(getPassword.val());

    // 다음 페이지로 넘어가기
    window.location.href = "SelectProject.html";
});
