

function App2() {
    /*
        [any type]
        - java 의 object 와 비슷한 type
        - any type 을 남발하면 typescript 의 장점이 사라진다.
        - 경우에 따라 사용 못하도록 설정 할수도 있다.
    */
    let anything: any;

    anything = 10;
    anything = "kim";
    anything = true;

    /*
        function type
    */
    function sum(num1: number, num2: number): number {
        return num1 + num2;
    }
    // result 는 number type 으로 추론(infer) 된다.
    const result = sum(10, 20);

    // 리턴해주는 값이 없으면 void 이다.
    function printMsg(msg:string):void{
        console.log(msg);
    }

    // return type 을 명시 하지 않으면 return type 도 infer 된다.
    function getMsg(){
        return "hello";
    }
    // result2 는 string type 으로 infer 되기 때문에
    let result2:string = getMsg(); 
    
    // result2 = 10; // 다른 type 대입 불가

    // f1은 무슨 type 일까? () => {} type , 이 자체가 타입임
    const f1 = function(){};

    const f2:()=>void = function(){};

    const f3:(a:number)=> void = function(num1:number){
        console.log(num1);
    };
    
    f3(10);

    // 함수의 type 을 선언하는 방법 (number, string)=>{object} type
    const f4:(a:number, b:string)=>object = (id:number, name:string)=>{
        return {id, name};
    };

    const result3 :object = f4(1,"김구라");

    console.log(result3);

    
    

    

    return (
        <div>

        </div>
    );
}

export default App2;