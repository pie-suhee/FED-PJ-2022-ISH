// 큐브트립 메인 JS ///////////////////////

/**************************************************************
    [ 구현 요구사항 ]
    - 도시별 메뉴버튼을 클릭 시 해당도시의 데이터를 큐브회전 후
      도시와 매칭하여 정보를 화면에 출력한다!
**************************************************************/

// window.addEventListener("DOMContentLoaded", loadFn);


// 로딩구역
window.addEventListener("DOMContentLoaded", () => {
    console.log("로딩완료!");

    // 1. 대상선정
    // 1-1. 이벤트대상 : .city a
    const menu = document.querySelectorAll(".city a");
    
    // 1-2. 변경대상1 : .cube
    const cube = document.querySelector(".cube");

    // 1-3. 변경대상2 : .cbx
    const cbx = document.querySelector(".cbx");

    let cname = document.querySelector(".cname");
    let cinfo = document.querySelector(".cinfo");

    // console.log(cbx);

    // 2. 버튼에 클릭이벤트 설정하기
    // for of문
    for(let x of menu){ // x는 각각의 a요소
        x.onclick = () => {
            // 0. 도시 정보 박스 숨기기(트랜지션 없애기!!)
            cbx.style.opacity = "0";
            cbx.style.transition = "none";

            // 1. 메뉴 텍스트 읽기
            let mtxt = x.innerText;
            
            // 2. 회전값 셋팅하기
            // 회전값 변수
            let setval;

            switch(mtxt){
                case "출발":
                    setval ="rotateX(0deg) rotateY(0deg)";
                    break;
                case "서울":
                    setval ="rotateX(-90deg) rotateY(-360deg)";
                    break;
                case "뉴욕":
                    setval ="rotateX(450deg) rotateY(360deg)";
                    break;
                case "파리":
                    setval ="rotateX(720deg) rotateY(-180deg)";
                    break;
                case "베를린":
                    setval ="rotateX(-360deg) rotateY(90deg)";
                    break;
                case "런던":
                    setval ="rotateX(360deg) rotateY(-90deg)";
                    break;
                default:
                    setval ="";
            } // switch case문

            // console.log(setval);

            // 3. 회전값 적용하기(transform에 setval변수값 할당하기)
            cube.style.transform = setval;
            cube.style.transition = "1.5s ease-in-out";

            // 만약 "출발"을 클릭한 경우 아래 코드 실행 안하기!
            if(mtxt === "출발") return;

            // 4. 도시정보 셋팅하기
            // data.js에 셋팅된 객체의 속성값이 메뉴의 도시명과 같다!
            // 따라서 이 속성명으로 속성값을 가져와서 도시정보를 아래 요소에 셋팅한다!
            // 변경대상1 : .cname - 도시명 -> mtxt변수에 잇음
            // 변경대상2 : .cinfo - 도시정보 -> city[mtxt]에 있음
            // innerText로 할당!!

            //console.log(city[mtxt]);

            cname.innerText = mtxt;
            cinfo.innerText = city[mtxt];

            // 5. 도시정보박스 보이기
            // 대상: .cbx
            setTimeout(() => {
                cbx.style.opacity = "1";
                cbx.style.transition = "opacity .8s ease-in-out";
            },1500);

        }; // click 이벤트 함수
    } // for of문
}); // 로딩구역