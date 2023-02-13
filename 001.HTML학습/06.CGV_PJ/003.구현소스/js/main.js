// CGV PJ 메인 페이지 JS - main.js

// 요소선택함수 ////////
const qs = x => document.querySelector(x);
const qsa = x => document.querySelectorAll(x);

// 로드구역 ////////////////////
window.addEventListener("DOMContentLoaded",()=>{
    console.log("로딩완료!");

    /************************************ 
        [ 포스터 메뉴 클릭시 클래스주기 ]
        - 포스터 메뉴 클릭시 해당 li에
        클래스 "on"을 주고 나머지 li는
        "on"을 모두 지워서 선택된 li만
        일어서있는 CSS가 적용되게 한다!
    ************************************/
   // 1. 대상선정 : .mlist ul>li 
   // -> 이벤트+변경대상 일치
    const mlist = qsa(".mlist ul>li");
    // console.log(mlist);

    // 2. 클릭이벤트 함수 설정하기
    // for of사용! -> 배열/컬렉션 일때 사용!
    for(let x of mlist){ // x 각 li요소

        x.onclick = ()=>{

            // 1. li에 클래스 초기화!
            mlist.forEach(ele=>ele.classList.remove("on"));
            // forEach((요소,순번,객체)=>{코드})

            // 2.클릭된 li에 클래스 "on"넣기
            x.classList.add("on");
            // classList 객체사용!
            // add()메서드 사용!

        }; //////// click함수 //////

    } ///////// for of /////////////

    /******************************************** 
        [ 극장가는 길 구글맵보기 기능 ]
        - 극장가는길 박스 클릭시 구글맵 등장
        - 구글맵박스의 닫기버튼 클릭시 구글맵 퇴장
        -> 방법: CSS셋팅된 클래스"on"넣기/빼기
    ********************************************/

    const anibx = qs(".anibx");

    const gmap = qs(".gmap");

    const cbtn = qs(".cbtn");

    anibx.onclick = ()=>{
        gmap.classList.add("on");
        anibx.classList.add("on");
    };

    cbtn.onclick = ()=>{
        gmap.classList.remove("on");
        anibx.classList.remove("on");
    };
    
    const sns = qsa(".sns a");
    
    sns.forEach((ele)=>{
        ele.onclick = ()=>{
            let btxt = ele.innerText;
            console.log(btxt);

            let url = "";

            switch(btxt){
                case"페이스북 바로가기" :
                    url="https://www.facebook.com/CJCGV";
                    break;
                case"트위터 바로가기" :
                    url="https://twitter.com/CGV_ID";
                    break;
                case"인스타그램 바로가기" :
                    url="https://www.instagram.com/cgv_korea/";
                    break;

            }

            // 새창 -> window.open()
            // 페이지 이동 -> location.href = url값
            window.open().location.href = url;
        };
    }); // forEach


}); ///////////// 로드구역 ////////////////