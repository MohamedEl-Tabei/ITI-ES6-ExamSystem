import goTo from "../utilities/goTo.js";
const Fail = () => {
    const selectors = {
        toReadyf : document.getElementById("toReadyf"),
        mainDiv : document.getElementById("_fail"),
    }
    let firstName = localStorage.getItem("fName");
    let lastName = localStorage.getItem("lName");
    
     const newHead = document.createElement("h1");
     newHead.classList.add("failo");
     newHead.innerHTML = `${firstName} ${lastName}, You have Achieved {grade}`;
     const newHead2 = document.createElement("h1");
     newHead2.classList.add("failo");
     newHead2.classList.add("text-center");
     newHead2.innerHTML = `No Matter How many Times you Fail, what Matters is How many times you get up AGAIN !!
`;
    
     console.log(newHead);
    
    selectors.toReadyf.parentNode.insertBefore(newHead,selectors.toReadyf);
    selectors.toReadyf.parentNode.insertBefore(newHead2,selectors.toReadyf);


    selectors.toReadyf.addEventListener("click", function(){
        console.log("Hi");
        
        goTo("_ready");
        
    })


}
export default Fail;