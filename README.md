# useReducer

- dispatch : state의 정보값 변경을 요청
- action : dispatch로 요청을 보내기 위한 변경사항이 담겨있는 객체 {type, payload}
- reducer : dispatch요청에 따른 전역 state 정보값 변경
- useReducer의 장점은 action이라는 특별한 객체를 전달받음으로서 액션에 지정된 타입에 따라서만 안전하게 전역 state값을 변경가능
- 특정 state값을 다양한 방식으로 변경해야 될때 리듀서로 타입에 따라 변경방식을 효율적으로 관리가능
