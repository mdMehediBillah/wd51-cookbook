var button = document.getElementById("myButton");

// 모달 요소를 가져옵니다.
var modal = document.getElementById("myModal");

// 모달을 닫는 버튼 요소를 가져옵니다.
var closeBtn = modal.querySelector(".close");

// 버튼에 클릭 이벤트 리스너를 추가합니다.
button.addEventListener("click", function() {
    // 버튼이 클릭되면 모달을 보여줍니다.
    modal.style.display = "block";
});

// 모달을 닫는 버튼에 클릭 이벤트 리스너를 추가합니다.
closeBtn.addEventListener("click", function() {
    // 닫기 버튼이 클릭되면 모달을 숨깁니다.
    modal.style.display = "none";
});