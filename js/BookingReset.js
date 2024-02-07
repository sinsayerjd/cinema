$(function() {
    $(".showDate").on("click", function() {
        $(this).addClass("selectDate").css({"backgroundColor":"rgb(230, 228, 217)"});
        $(".showDate").not(this).removeClass("selectDate").css({"backgroundColor":""});
    });

    // 초기화 버튼
    $("#resetBtn").on("click", function() {
        $(".selectMovie").css({"backgroundColor":""}).removeClass("selectMovie");
        $(".selectTheater").css({"backgroundColor":""}).removeClass("selectTheater");
        $(".selectDate").css({"backgroundColor":""}).removeClass("selectDate");
        $(".selectTime").css({"backgroundColor":""}).removeClass("selectTime");
        
        $("#resultMovie").text("");
        $("#resultTheater").text("");
        $("#resultDate").text("");
        $("#resultTime").text("");
    });
});