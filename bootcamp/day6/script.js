var isClicked=false;
function buttonClick(val){
    if(isClicked==true){
        document.getElementById("screen").value="";
    }
    document.getElementById("screen").value+=val;
}

function clearDisplay(){
    document.getElementById("screen").value="";
}

function equalClicked(){
    var text=document.getElementById("screen").value;
    var result=eval(text);
    console.log("Result = "+result);
    document.getElementById("screen").value=result;
    isClicked=true;

}