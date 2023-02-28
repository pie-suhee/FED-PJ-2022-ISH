// 도깨비 PJ 링크 시스템 JS - linksys.js

// 로딩구역 //////////////////////
window.addEventListener("DOMContentLoaded",()=>{
    ////////////////////////////////////////////////
    // 링크 시스템 : 메뉴의 a요소 링크를 셋업한다! ////
    ////////////////////////////////////////////////

    // 대상: .top a -> 상단영역의 모든 a요소
    const link = document.querySelectorAll(".top a");
    // console.log(link);

    // 클릭 이벤트 함수 셋팅하기
    for(let x of link){ // x는 각 a요소
        x.onclick = () => {
            // 1. a 요소의 글자데이터
            let atxt = x.innerText;
            //console.log(atxt);

            // 만약 이미지가 있으면 img요소의 alt 읽어서 atxt변수에 재할당하기!
            // if(true){
            // if(null){
            // if(undefined){
            // ->> 데이터가 null이거나 undefined인 경우에는 if문에서 false와 같이 취급된다!
            // 만약 요소가 없으면 null이 리턴된다!
            // undefined는 변수의 값이나 함수가 생성되지 않은 경우 리턴되는 기본 할당 값이다! 

            // 클릭된 a요소의 하위의 img요소를 가져옴
            let chk = x.querySelector("img");
            
            if(chk){

                // atxt변수에 img의 alt속성값 넣기
                atxt = chk.alt;
                // console.log("재할당!",atxt);
            } // if문

            // 주소할당변수
            let url;

            // 2. 링크 분기하기
            switch(atxt){
                case "tvN로고" :
                    url = "index";
                    break;
                case "인물관계도" :
                    url = "cat";
                    break;
                case "로그인" :
                    url = "login";
                    break;
                case "회원가입" :
                     url = "member";
                    break;
                case "페이스북 바로가기" :
                     url = "https://www.facebook.com/tvNdokebi/";
                    break;
                case "인스타그램 바로가기" :
                     url = "https://www.instagram.com/tvn_joy/";
                    break;
                case "트위터 바로가기" :
                     url = "https://twitter.com/chtvn";
                    break;
                default :
                    url = "esc";
            } // switch case문

            // 3. 내용에 따른 처리
            if(url === "esc"){
                alert(`
                    공사중입니다~!^^
                `);
            } // if
            // sns일 경우 처리분기문
            else if(atxt === "페이스북 바로가기" || atxt === "인스타그램 바로가기" || atxt === "트위터 바로가기") {
                // 새창열기
                window.open().location.href = url;
            } // else if문
            // 기타 내부시스템 페이지 이동하기
            else {
                /*
                    메인페이지 이동일 경우
                    html?code=m을 보내주자!
                */
                
                location.href=
                url + ".html" + (atxt==="tvN로고"?"?code=m":"");
                /*
                    [ 페이지 이동하기 ]
                    ((현재창열기))
                    window.location.href = 이동할주소
                    -> window는 주로 생략함
                    location.href = 이동할주소

                    ((새창열기))
                    window.open().location.href = 이동할주소
                    -> window.open()은 원래 팝업창 띄우기임!
                */
                // location.href = url+".html";
            } // else

            // a요소의 기본이동 기능을 막는다!
            return false;
            /*
                이 함수를 호출한 곳으로 돌아갈 때
                false를 가지고 돌아가라!
                false는 빛이 없음, 즉 신호없음
                -> 브라우저는 기본 기능을 없애준다!

                (확인) 각 a요소의 href="#" 으로 인한 상단 이동이 안됨!
                tvN 로고 이동기능이 안됨!
            */
        }; // click 이벤트 함수

    } //for of 문
}); // 로드구역