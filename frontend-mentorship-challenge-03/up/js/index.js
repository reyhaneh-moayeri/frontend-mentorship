
const searchBtn = document.querySelector('.btn')
const dateIn = document.querySelector(".check-in");
const dateOut = document.querySelector(".check-out");




searchBtn.addEventListener('click', (e) => {
    e.preventDefault()

    console.log(dateIn.value < dateOut.value);
        if(dateIn.value < dateOut.value){
        alert("Successful!");
    }
    else{
        alert("dates are wrong! Please select the correct dates.")
    }
})