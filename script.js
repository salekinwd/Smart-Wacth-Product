const ringButton = document.querySelectorAll(".ring-button");

for (let i = 0; i < ringButton.length; i++){
    const ringBtn = ringButton [i];
    ringBtn.addEventListener('click', function(){
        console.log("clicked");
    })
}