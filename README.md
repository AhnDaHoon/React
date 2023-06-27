# React
리액트는 자바스크립트 라이브러리로 사용자 인터페이스를 만드는데 사용한다.
리액트는 컴포넌트 기반의 UI 라이브러리이고 컴포넌트에 중점을 두고 있다. 따라서 내장된 다른 기능들은 많지 않다.

## JSX란?
 
## Component란?
컴포넌트(Component)란 프로그래밍에 있어 재사용이 가능한 각각의 독립된 모듈을 뜻한다.

### 리액트는 왜 Component를 사용할까?
리액트가 Component의 개념을 도입한 것은 재사용이 가능하다는 점뿐만 아니라 우려사항들을 분리할 수 있도록 해주기 때문이다. 
이 두 개념은 일반적으로 프로그래밍에서 중요한 개념이다. 재사용 가능한 빌딩 블록은 반복을 피할 수 있게 해주며,
우려사항들을 분리하는 것은 코드베이스를 작고 관리 가능한 단위로 유지할 수 있게 해준다. 
모든 html, JavaScript, 전체 사용자 인터페이스가 들어있는 커다란 파일 대신 각각의 컴포넌트는 하나의 명확한 과제와 초점에 대해서만 집중할 수 있다.

## 리액트가 왜 필요할까?
최신의 다채롭고 복잡한 사용자 인터페이스를 쉽게 구축할 수 있게 해주기 때문이다. 
그리고 고수준의 구문을 제공해서  선언형 방식, 선언형 컴포넌트 중심의 방식으로 코드를 작성할 수 있게 해준다.
리액트 사용자가 정의하는 것은 홤녀에 나타내고 싶은 것들이고 최종 목표로 하는 것들이다.
개발자는 사용자 지정 html 요소(컴포넌트)를 생성하고 리액트가 나머지를 수행한다.

```JavaScript
const element = <h1>Hello, world!</h1>;
```
- 위에 희한한 태그 문법은 문자열도, HTML도 아니다. JSX라 하며 Javascript에 XML을 추가한 확장한 문법이다.
- JSX는 리액트로 프로젝트를 개발할 때 사용되므로 공식적인 자바스크립트 문법은 아니다.
- JSX는 HTML보다는 JavaScript에 가깝기 때문에, React DOM은 HTML 어트리뷰트 이름 대신 camelCase 프로퍼티 명명 규칙을 사용한다. 예를 들어, JSX에서 class는 className가 되고 tabindex는 tabIndex가 된다.
- 기본적으로 React DOM은 JSX에 삽입된 모든 값을 렌더링하기 전에 이스케이프 하므로 애플리케이션에서 명시적으로 작성되지 않은 내용은 주입되지 않는다. 모든 항목은 렌더링 되기 전에 문자열로 변환된다. 이런 특성으로 인해 XSS (cross-site-scripting) 공격을 방지할 수 있다.
    - 이스케이프: 특정 문자를 원래의 기능에서 벗어나게 변환하는 행위이다.
  
## 엘리먼트 렌더링
- React DOM은 해당 엘리먼트와 그 자식 엘리먼트를 이전의 엘리먼트와 비교하고 DOM을 원하는 상태로 만드는데 필요한 경우에만 DOM을 업데이트한다.
<img src="img/granular-dom-updates.gif" alt="granular-dom-updates.gif">

## state, props란?
- state 는 컴포넌트 내부에서 바꿀 수 있는, 바뀔 수 있는 값이다. 
  - 뷰에 렌더링돼야 하는 컴포넌트의 데이터를 저장하는 데 사용한다.
  - 상태는 데이터를 보유하고 시간이 지남에 따라 변경될 수 있다.
  - 이벤트 핸들러는 일반적으로 state를 업데이트한다.
- props는 부모 컴포넌트에서 설정하여 자식 컴포넌트로 전달하거나, 더 바깥의 컴포넌트에서 자기가 감싸고 있는 컴포넌트 내용을 표현하기 위해 사용한다.
  - 데이터, 이벤트 핸들러를 자식 컴포넌트에 전달하는 데 사용한다
  - props는 바뀔 수 없다. 한 번 설정되면 props를
    변경할 수 없다.
  - 상위 컴포넌트는 하위 컴포넌트에 대한 props를 설정한다.
## 이벤트 처리하기
React 엘리먼트에서 이벤트를 처리하는 방식은 DOM 엘리먼트에서 이벤트를 처리하는 방식과 매우 유사합니다. 몇 가지 문법 차이는 다음과 같다
- React의 이벤트는 소문자 대신 캐멀 케이스(camelCase)를 사용한다.
- JSX를 사용하여 문자열이 아닌 함수로 이벤트 핸들러를 전달한다.
```JavaScript
// 기존 HTML 코드
<button onclick="activateLasers()">
  Activate Lasers
</button>

// React 코드
<button onClick={activateLasers}>
  Activate Lasers
</button>

```

## 리스트와 Key
### 여러개의 컴포넌트 렌더링 하기
엘리먼트 모음을 만들고 중괄호 {}를 이용하여 JSX에 포함 시킬 수 있다.
```JavaScript
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) =>
  {numbers}
);

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render({listItems});

<!-- result
1
2
3
4
5
-->
```
### Key
- 위에 코드를 실행하면 리스트의 각 항목에 key를 넣어야 한다는 경고가 표시된다. key는 엘리먼트 리스트를 만들 때 포함해야 하는 특수한 문자열 어트리뷰트이다.
- Key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕는다.
- key는 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야 한다.
- Key를 선택하는 가장 좋은 방법은 리스트의 다른 항목들 사이에서 해당 항목을 고유하게 식별할 수 있는 문자열을 사용하는 것이다. 대부분의 경우 데이터의 ID를 key로 사용한다.
- 최후의 수단으로 index를 key로 사용할 수 있다. 그러나 이방법은 성능이 저하되거나 컴포넌트의 state와 관련된 문제가 발생할 수 있다. 
  -   컴포넌트는 key 를 보고 갱신되고 재사용된다. index를 사용했다면 항목의 순서가 바뀌었을 경우 key 또한 바뀌었을 거고 이는 state를 엉망으로 만들거나 원하지 않는 방식으로 컴포넌트를 바꿀 수 있다. (https://ko.legacy.reactjs.org/docs/reconciliation.html#recursing-on-children)
- key는 형제 사이에서만 고유한 값이어야 한다.
  - Key는 배열 안에서 형제 사이에서 고유해야 하고 전체 범위에서 고유할 필요는 없다. 두 개의 다른 배열을 만들 때 동일한 key를 사용할 수 있다. (https://ko.legacy.reactjs.org/docs/lists-and-keys.html)

## useEffect()
- 컴포넌트가 렌더링 될 때 특정 작업을 실행할 수 있도록 하는 Hook이다.
- 렌더링 이후 실행할 함수(리액트는 이 함수를 기억 했다가 DOM 업데이트 후 불러낸다.)
```JavaScript
  // 컴포넌트가 렌더링 될 때마다 실행됨
  useEffect(() => {
    console.log("EFFECT RUNNING");
  });
  
  // 맨 처음 렌더링때 실행하고 의존성이 변경되면 실행된다. (data)
  useEffect(() => {
    console.log("EFFECT RUNNING");
  }, [data]);
```
### Clean-up 함수
- clean-up 함수는 useEffect Hook 내에서 return되는 함수이다.
- 컴포넌트가 사라질 때(unmount 시점), 특정 값이 변경되기 직전(update 직전)에 실행할 작업을 지정할 수 있다.
- 클린업 함수는 첫번째 렌더링때는 실행되지 않는다.
- 클린업 함수가 먼저 실행되고 useEffect 함수가 실행된다.
```JavaScript
  // 컴포넌트가 렌더링 될 때마다 실행됨
  
  // 맨 처음 렌더링때 실행하고 의존성이 변경되면 실행된다. (data)
  useEffect(() => {
    console.log("EFFECT RUNNING");

    return () => {
      console.log("클린업 함수");
    };
  }, [data]);
```

## useReducer()
- useState를 대체할 수 있는 함수이다.
- 좀 더 복잡한 상태 관리가 필요한 경우 reducer를 사용할 수 있다.
- reducer는 이전 상태와 Action을 합쳐, 새로운 state를 만드는 조작을 말한다.
```JavaScript
  const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);
  // useReducer는 항상 두 개의 값이 있는 배열을 반환한다. [state, dispatchFn]

  // state: 최신 스냅샷

  // dispatchFn: 스냅샷을 업데이트 할 수 있게 해주는 함수
  // 첫번째 인자인 reducer 함수를 실행시킨다.

  // reducerFn: 컴포넌트 외부에서 state를 업데이트 하는 함수
  // 현재state, action 객체를 인자로 받아, 기존의 state를 대체하여 새로운 state를 반환하는 함수

  // initialState: 초기 state

  // initFn: 초기 함수 (초기 state를 조금 지연해서 생성하기 위해 사용)

const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){

    // 컴포넌트가 처음 렌더링 되고 email input으로 aa@naver.com을 입력했을때
    console.log(state) // {value: '', isValid: false}
    console.log(action) // {type: 'USER_INPUT', val: 'aa@naver.com'}
    return {value: action.val, isValid: action.val.includes('@')}
  }
  if(action.type === 'INPUT_BLUR'){
    return {value: state.val, isValid: state.value.includes('@')}
  }
  return {value: '', isValid: false}
}

const Login = (props) => {
   // ..... 나머지 코드 생략
  const [emailState, dispatchEmail] = useReducer(emailReducer, {value:'', isValid: false});

  const emailChangeHandler = (event) => {
    dispatchEmail({type:'USER_INPUT', val:event.target.value}); // dispatchFn를 사용하면 emailReducer에서 action를 이용해 업데이트한 데이터들을 받을 수 있다.
  };
  // ..... 나머지 코드 생략
}
```

## useState() vs useReducer()
useState()와 useReducer()는 언제 사용하는 것이 좋을까?
- useState()
  - 개별 state, 간단한 state에 사용하기가 적합하다.
  - state 업데이트가 쉽고 몇 종류가 안 되는 경우에 적합하다.
- useReducer()
  - state가 객체거나 복잡한 state가 있을 때 사용하기가 적합하다.
  - 연관된 state로 구성된 state 관련 데이터를 다룰 때 적합하다.

## 리액트 훅으로 작업할 때 지켜야 할 규칙
1. 리액트 훅은 리액트 함수에서만 호출해야 한다.
2. 중첩 함수, block문에서 호출하지 말아야 한다.
   1. useEffect(), if문 for문 등등
   2. 리액트 훅은 함수의 최상위 수준에서 직접 호출되어야 한다.
3. useEffect()함수에서 사용하는 데이터들은 전부 다 의존성 배열로 추가해줘야 한다.

## useMemo()
- https://ui.toast.com/weekly-pick/ko_20190731
- useMemo()는 컴포넌트를 재사용할 때도 쓰이지만 데이터를 재사용할 때도 쓰인다.
  - 정렬과 같이 자주 쓰이면 성능이 느려지는 데이터에 쓰면 성능개선 효과를 볼 수 있다.
 ```JavaScript
function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  // 의존성에 빈배열을 넣어서 처음 렌더링 될때만 초기화 시킨다.
  const items = useMemo(() => {
    return [5, 1, 6, 7, 8, 2, 3];
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} items={items} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Show Paragraph</Button>
    </div>
  );
}

const DemoOutput = (props) => {
  const { items } = props;

  /*
    DemoOutput은 showParagraph가 바뀔 때마다 sortedList도 바뀌어서 sort 함수를 자주 호출하지만
    useMemo()를 이용해 리스트의 값이 바뀌지 않으면 sort를 사용해 데이터를 다시 정렬하지 않고 기존에 사용했던 
    데이터를 재사용한다.
  */

  const sortedList = useMemo(() => {
    console.log("list!");
    return items.sort((a, b) => a - b);
  }, [items]);
  console.log("demo");
  return (
    <Fragment>
      <p>{props.show ? "This is new!" : ""}</p>;
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
};
```
### useCallback()
useMemo를 사용하면 Primitive Values일 때는 괜찮지만 Reference을 쓸 때 문제가 발생한다. 
 ```JavaScript
let a = 1
let b = 1
a === b // true 
// 위와 같이 기본값들을 비교했을 때 true가 나오지만

let obj1 = {}
let obj2 = {}
obj1 === obj2 // Reference을 비교하면 false가 나오기 때문이다.

```
- 위에 코드와 같이 이전 Reference와 현재 Reference를 비교하면 메모리 주소가 다르기 때문에 false가 나온다 그래서 useCallback()를 이용하여 함수를 재사용 해야한다.
- useMemo()는 이전 값과 현재 값을 비교해 같으면 함수를 호출하지 않는다, useCallback()은 특정 함수를 새로 만들지 않고 재사용하고 싶을때 사용한다.
- useCallback()에서 특정 값을 가져와 사용할 때는 의존성에 넣어줘야 한다.
 ```JavaScript
function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleParagraphHandler = useCallback(() => {
   // 지금 이 함수를 보면 위에서 정의한 allowToggle state를 가져와 사용하는걸로 보인다.
   // 그러나 useCallback()함수는 값을 의존성으로 넣어주지 않으면 위에서 정의된 변수를 가져오지 않고
   // 상수를 만들기 때문에 비어있는 상수가 된다. (같은 변수명이지만 서로 다르다, javascript 스코프의 개념이다.)
   // 만약 위에서 정의한 state allowToggle를 사용하려면 의존성을 추가해줘야 한다.(1.1)
    if (allowToggle) {   
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]); // (1.1) allowToggle 의존성 추가

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Show Paragraph</Button>
    </div>
  );
}
```

## 스케줄링 (!중요)
https://velog.io/@kim98111/State-Update


