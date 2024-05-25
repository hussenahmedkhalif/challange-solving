// first varified the variables
let  studentGrade = prompt();
studentGrade = parseInt(studentGrade);
let output;

switch (true) {
    case (studentGrade <=79 && studentGrade >=60):
        output ="A";
        break;
        case (studentGrade <=60 && studentGrade >=49):
            output ="B";
            break;
            case (studentGrade<=49 && studentGrade >=40):
                output = "C";
                break;
                case (studentGrade<=40 && studentGrade >=30):
                output ="D";
                break;
                case (studentGrade<=30 && studentGrade >=0):
                    output = "E";
                    break;


    default:
        console.log("invalid input"); 
        break;
}console.log(output);
document.write(output) 