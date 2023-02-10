// cube 애니 js


/***************************************************
    [ 구현내용 ]
    - "돌아!"버튼을 클릭하면 멈춰있던 큐브가 돌아감.
      이때 버튼이 "멈춰!"버튼으로 변경되어 있음!
    - "멈춰!"버튼을 클릭하면 돌고있던 큐브가 멈춤.
      이때 버튼이 "돌아!"버튼으로 변경되어 있음!
***************************************************/

// 로드구역
window.addEventListener("DOMContentLoaded",()=>{
    console.log("로딩완료!");

    // 1. 대상선정
    // 1-1. 이벤트 대상 : .btngo
    const btngo = document.querySelector(".btngo");
    
    // 1-2. 변경 대상 : .cube
    const cube = document.querySelector(".cube");

    // console.log(btngo, cube);

    // 2. 버튼 클릭 이벤트 설정
    btngo.onclick = ()=>{

        // 큐브에 클래스 "on"넣기
        cube.classList.toggle("on");

        let isOn = cube.classList.contains("on");
        console.log(isOn);

        btngo.innerText = isOn?"멈춰!":"돌아!";
        // 삼항연산자(조건연산자) -> 비?집: 놀이동산
        
    }; // click 이벤트 함수

    /********************************************** 
        [ JS 클래스 컨트롤 내장객체 ]
        classList 객체

        -> 요소에 클래스를 넣거나 빼는 등 필요작업을
        하는 객체

        ((관련메서드))
        1. add(클래스명) : 클래스추가
        2. remove(클래스명) : 클래스제거
        3. toggle(클래스명) : 클래스추가/제거
        4. contains(클래스명) : 클래스있으면 true
        5. replace(이전클래스명,변경클래스명)
            : 특정클래스를 다른 클래스로 변경

        -> 클래스 추가/제거시 콤마로 구분하여
        여러개의 클래스를 추가하거나 제거할 수 있다!
        예) 요소.classList.add("tt","cc","dd")
        예) 요소.classList.remove("bb","ee")

    **********************************************/
}); // 로드구역