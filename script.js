const endDate = "7 April 2023 11:07 PM";
document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input");

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    console.log(now );
    console.log(end);
    const diff = (end - now) / 1000;
    if (diff < 0) {
        alert("welcome!");
        return;
       
    }
   
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 60) % 24;
    inputs[2].value = Math.floor(diff / 60)%60;
    inputs[3].value = Math.floor(diff %60);


}
clock();

setInterval(
    () => {
        clock();
    }
)