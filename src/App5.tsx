
function App5() {

    interface Member{
        readonly num:number
        name:string
        isMan:boolean
    }

    const m1:Member = {
        num:1,
        name:"김구라",
        isMan:true
    }

    m1.name = "원숭이";
    m1.isMan = false;
    // m1.num = 3; 

    return (
        <div>
            
        </div>
    );
}

export default App5;