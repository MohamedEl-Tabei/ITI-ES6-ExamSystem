import goTo from "../utilities/goTo.js";
const Success = () => {
    const selectors = {
        toReady : document.getElementById("toReady"),
        mainDiv : document.getElementById("_success"),
    }
    let firstName = localStorage.getItem("fName");
    let lastName = localStorage.getItem("lName");
    
     const newHeading = document.createElement("h1");
     newHeading.classList.add("logo");
     newHeading.innerHTML = `${firstName} ${lastName}, You have Achieved {grade}`;

    selectors.toReady.parentNode.insertBefore(newHeading,selectors.toReady)

  selectors.toReady.addEventListener("click",() => {        
    goTo("_ready");
  });


}
export default Success;