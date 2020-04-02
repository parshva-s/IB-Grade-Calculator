//java file
"use script";
let grade;//the ib grade (1-7)

document.getElementById('Calculate').addEventListener('click', calculate);
function calculate() {
    let warning = false;
    //values of input
    let EE = document.getElementById('EE').value.toUpperCase();
    let TOK = document.getElementById('ToK').value.toUpperCase();
    //checks to see if all inputs are within range
    if ((EE =='A'||EE == 'B'||EE == 'C'||EE == 'D'||EE == 'E')&&(TOK == 'A'||TOK == 'B'||TOK == 'C'||TOK == 'D'||TOK == 'E')){
        //grade is determined through comparing marks of user to the pre-existing markband        
        if (EE == 'A' && TOK == 'A'){
            grade = 3;
        } else if (EE == 'A' && TOK == 'B'){
            grade = 3;
        }else if (EE == 'A' && TOK == 'C'){
            grade = 2;
        }else if (EE == 'A' && TOK == 'D'){
            grade = 2;
        }else if (EE == 'A' && TOK == 'E'){
            grade = 1;
        }else if (EE == 'B' && TOK == 'A'){
            grade = 3;
        }else if (EE == 'B' && TOK == 'B'){
            grade = 2;
        }else if (EE == 'B' && TOK == 'C'){
            grade = 1;
        }else if (EE == 'B' && TOK == 'D'){
            grade = 1;
        }else if (EE == 'C' && TOK == 'A'){
            grade = 2;
        }else if (EE == 'C' && TOK == 'B'){
            grade = 1;
        }else if (EE == 'C' && TOK == 'C'){
            grade = 1;
        }else if (EE == 'D' && TOK == 'A'){
            grade = 2;
        }else if (EE == 'D' && TOK == 'B'){
            grade = 1;
        }else if (EE == 'E' && TOK == 'A'){
            grade = 1;
        }else {
            grade = 0;
        }
        //mark is shown
        document.getElementById('grade').innerHTML = "Your IB grade is: "+ grade;
    //if number is not within range, alert is sent out
    }else {
        warning = true;
    }
    //alert message
    if (warning) {
        alert("The letters are not within the range. Try Again.");
    }
}
