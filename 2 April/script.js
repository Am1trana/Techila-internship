const button = document.getElementsByClassName("btn");
const content = document.getElementsByClassName("content");
const wrapper = document.getElementById("wrap");


// wrapper.addEventListener('click', function(e){
//    if(clickCounter%2 === 0 ){

//     const clickedBtn = e.target.parentNode;
//     const mainBox = clickedBtn.parentNode.children[1];
//     mainBox.style.display = "block";
//     clickCounter++;
//    }
// else if(clickCounter%2 === 1 ){
//     const clickedBtn = e.target.parentNode;
//     const mainBox = clickedBtn.parentNode.children[1];
//     mainBox.style.display = "none";
//     clickCounter++;
// }
// });



wrapper.addEventListener('click', function (e) {
    const clickedBtn = e.target.parentNode;
    const mainBox = clickedBtn.parentNode.children[1];

    if (mainBox.style.display === "block") {
        mainBox.style.display = "none";
    }
    else
    {
        mainBox.style.display = "block";
    }
});





