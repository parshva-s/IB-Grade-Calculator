//java file
"use script";
let grade;//the ib grade (1-7)

document.getElementById('Calculate').addEventListener('click', calculate);
function calculate() {
    let warning = false;
    //values of input
    let P1 = ((document.getElementById('paper1CS').value)/70)*0.45;
    let P2 = ((document.getElementById('paper2CS').value)/32)*0.25;
    let IA = ((document.getElementById('IACS').value)/34)*0.30;
    let total=0;//total of all assessments
    //checks to see if all inputs are within range
    if((P1>=0 && P1<=0.45)&&(P2>=0 && P2<=0.25)&&(IA>=0 && IA<=0.3)) {
        total = (P1+P2+IA);//adds marks of all assessments
        //grade is determined through comparing marks of user to the pre-existing markband        
        if (total >= 0.72 && total <= 1.00){
        grade = 7;
        } else if (total <= 0.71 && total >= 0.61){
        grade = 6;
        }else if (total <= 0.60 && total >= 0.52){
        grade = 5;
        }else if (total <= 0.51 && total >= 0.42){
        grade = 4;
        }else if (total <= 0.41 && total >= 0.29){
        grade = 3;
        }else if (total <= 0.28 && total >= 0.15){
        grade = 2;
        }else if (total <= 0.14 && total >= 0){
        grade = 1;
        }
        //mark is shown
        document.getElementById('grade').innerHTML = "Your IB grade is: "+ grade;
    //if number is not within range, alert is sent out
    }else {
        warning = true;
    }
    //alert message
    if (warning) {
        alert("The numbers are not within the range. Try Again.");
    }
}