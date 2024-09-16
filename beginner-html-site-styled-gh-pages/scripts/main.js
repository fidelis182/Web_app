const myHeading = document.querySelector("h1");
myHeading.textContent= "Hello World !";
// let iceCream = "chocolate";
// if (iceCream === "chocolate") {
//   alert("Yay, I love chocolate ice cream!");
// } else {
//   alert("Awwww, but chocolate is my favorite…");
// }

function checkData() {
  if (document.form1.threeChar.value.length === 3) {
    return true;
  } else {
    alert(
      `Enter exactly three characters. ${document.form1.threeChar.value} is not valid.`,
    );
    return false;
  }
}