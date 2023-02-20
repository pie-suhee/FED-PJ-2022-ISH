// 인트로 페이지 JS - intro.js

window.addEventListener("DOMContentLoaded",loadFn);

function loadFn(){

    /*
        동영상 시간을 체크하여 일정시간 후
        메인페이지로 넘길 수 있음!
        setTimeout(() => {
            location.href = "main.html";
        }, 40000);
    */
    // 그러나 동영상 시간 이벤트를 사용하여 넘기자!
    
    // 동영상 재생 중 발생하는 이벤트는?
    // timeupdate -> 동영상재생 시간이 게속 업데이트시 발생!

    // 대상 : #myvid
    const myvid = document.querySelector("#myvid");

    myvid.addEventListener("timeupdate", chkVid);

    function chkVid(){
        // 비디오가 멈추면 재생 끝이므로 비디오 멈춤상태 체크함!
        // paused 속성이 멈추면 true / 아니면 false 리턴
        // 주의: 비디오가 loop면 안된다!

        if(myvid.paused){
            location.href = "main.html";
        } // if문
    } // chkVid 함수
} // loadFn 함수