import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*
  let 변수명 : type = 값;
*/

function App() {
  // 숫자는 number type 
  let num:number = 10;
  // 문자는 string type 
  let name:string = "kim";
  // 논리는 boolean type
  let isMan:boolean = true;
  /*
    object type 은 javascript 의 기본 데이터 type 을 제외한 모든 type 을 담을 수 있다.
    기본 데이터 type  : number , string, boolean, null, undefined 등이 기본 data type 이다.
  */

  let mem:object;
  //object type 에 우리가 알고 있는 object 를 대입할 수가 있다.
  mem = {num:1 , name:"김구라" , addr:"노량진"};
  
  let arr:object;
  //배열도 대입 가능
  arr = [];

  let action: object;
  //함수도 대입 가능
  action = function(){};



  return (
    <div>
      <p>번호 : <strong>{num}</strong></p>
      <p>이름 : <strong>{name}</strong></p>
      <p>성별 : {isMan ? <strong>남자</strong> : <strong>여자</strong>}</p>

    </div>
  )
}

export default App
