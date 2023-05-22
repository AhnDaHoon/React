# React

## JSX란?

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
