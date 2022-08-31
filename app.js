
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn")
let count =0;



btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }else if(styles.contains('increase')){
            count++;
        }else{
            count = 0;
        }
        value.textContent = count;
        value.style.color = GetColor();
    });
});


function GetColor()
{
    var color = "#222";
    if(count>0)
    {
        color = "green";
    }else if(count<0){
        color = "red";
    }
    return color;
}