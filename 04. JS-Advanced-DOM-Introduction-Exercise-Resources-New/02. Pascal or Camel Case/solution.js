function solve() {
  let input=document.getElementById("text").value.toLowerCase();
  let convention=document.getElementById("naming-convention").value;
  let result=document.getElementById("result");
  let splitInput=input.split(' ');

  switch (convention) {
    case "Camel Case":
      result.textContent=splitInput.map((element,i) =>element=i !== 0 ? element[0].toUpperCase()+element.slice(1) : element).join('');
      break;
    case "Pascal Case":
      result.textContent=splitInput.map((element) =>element[0].toUpperCase()+element.slice(1)).join('');
    break;
    default:
      result.textContent="Error!";
      break;
  }
  
}