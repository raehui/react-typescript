
function App4() {
    type Person = {
        name: string
        age: number
    }

    type Contact = {
        phone: string
        email: string
    }

    const p1: Person = { name: "김구라", age: 30 };
    const c1: Contact = { phone: "010-1234-5678", email: "aaaa@naver.com" };

    // Person 과 Contact 의 교집합 type
    type PersonInfo = Person & Contact;

    const p2: PersonInfo = {
        name: "해골",
        age: 20,
        phone: "010",
        email: "aaa@"

    };
    
    type NumOrStr = number | string;

    const data1: NumOrStr = 10;
    const data2: NumOrStr = "김구라";




    return (
        <div>

        </div>
    );
}

export default App4;