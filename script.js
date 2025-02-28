const ringButton = document.querySelectorAll(".ring-button");

for (let i = 0; i < ringButton.length; i++){
    const ringBtn = ringButton [i];
    ringBtn.addEventListener('click', function(event){
        const color = event.target.id.replace("-color","");
        console.log(color);
        // color add korar aghe purple color aghe thke thakle take remove korchi...
        for(let j = 0; j < ringButton.length; j++){
            ringButton[j].classList.remove("border-purple-600");
        }
        // color add korchi.....
      event.target.classList.add("border-purple-600");

      const productImage =document.getElementById("product-image");
      productImage.src = "../images/"+ color +".png";
    })
}