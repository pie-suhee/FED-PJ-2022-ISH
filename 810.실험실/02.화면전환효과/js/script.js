/* 타임아웃으로 일정시간 뒤 자동함수 셋팅 */
// setTimeout(함수,시간)
setTimeout(() => {
    // 대상:body
    let tg = document.body;
    tg.classList.add("on");

    // 2단계 .go 넣기
    setTimeout(() => {
        // 자체글자변경
        document.querySelector(".pg h1").innerText = "짜잔잔잔짠~!!!"
        // body에 .go 넣기
        tg.classList.add("go");
    }, 1000);
}, 2000); // setTimeout 함수