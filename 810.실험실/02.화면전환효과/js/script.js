/* 타임아웃으로 일정시간 뒤 자동함수 셋팅 */
// setTimeout(함수,시간)
setTimeout(() => {
    // 대상:body
    let tg = document.body;
    tg.classList.add("on");

    // 2단계 .go 넣기
    setTimeout(() => {
        tg.classList.add("go");
    }, 1000);
}, 2000); // setTimeout 함수