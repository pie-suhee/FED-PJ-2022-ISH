// HTML 출력 JSX

// 변수에 태그를 jsx문법으로 작성하여 할당한다!
// JSX는 최상위 부모가 하나여야한다!(기본 XML문법과 동일)

// 배열 데이터 생성하기
const data = [
    {이름:"전소민", 전화번호:"010-222-3333", 생일:"90.3.4"},
    {이름:"김혁수", 전화번호:"010-555-7777", 생일:"02.5.8"},
    {이름:"이상화", 전화번호:"010-8888-2222", 생일:"00.7.8"},
];

// 배열 map메서드를 사용하여 태그를 데이터와 바인딩한다!
// 배열변수.map(변수=>태그구성)
// JSX파일은 태그구성시 태그를 그대로 사용해야 태그로 인식됨!
// 쉽게말해 따옴표를 쓰지 않는다!(Root는 하나!)

const list = data.map(val=>
    <tr>
        <th>{val.이름}</th>
        <th>{val.전화번호}</th>
        <th>{val.생일}</th>
    </tr>
); // map

const myele = (
    <div>
        <h1>♣ 나의 친구 리스트</h1>
        <table>
            <tr>
                <th>이름</th>
                <th>전화번호</th>
                <th>생일</th>
            </tr>
            {list}
        </table>
    </div>
);

// 화면출력
ReactDOM.render(myele,document.querySelector("#root"));