// let username = prompt("Enter your name")
// let age = Number(prompt("Enter your age"))
// let money = Number(prompt("Enter your balance"))


// if(age >= 18 && money >= 20000){
//     alert("Welcome to the Clubhouse ✔")
//     alert("Thank you for choosing EKO Clubhouse ✔")
// }else{
//     if(age < 18 && money < 20000){
//         alert("❌ Please your not allowed to enter the club house because you are young and broke")
//     } 
//     else if(age < 18){
//         alert("❌ Please you are not of age to enter the club. Strictly +18")
//     }else{
//         alert("❌ Your balance is too poor. Please come again later. Thank you")
//     }
// }

// let firstname = prompt("Enter your First name")
// let lastname = prompt("Enter your Last name")
// let english = Number(prompt("Enter your English score here"))
// let math = Number(prompt("Enter your Math score"))
// let history = Number(prompt("Enter your History score"))
// let biology = Number(prompt("Enter your Biology score"))

// let total = english + math + history + biology
// let score = parseInt(total / 4).toFixed((1))

// if(score >= 90){
//     alert(firstname + " Execellent")
// }else{
//     if(score >= 80){
//         alert(firstname +  score + " Very good")
//     }
//     else if(score >= 70){
//         alert(firstname +  score + " Good")
//     }
//     else if(score >= 60){
//         alert(firstname +  score + " Pass")
//     }
//     else if(score >= 50){
//         alert(firstname +  score + " Fair")
//     }
//     else if(score < 49){
//         alert(firstname +  score + " you failed.")
//     }else{
//         alert(firstname +  score + " be like you the mad.")
//     }
// }

let score = Number(prompt("Enter any value. \n1. Covert to Fahrenheit\n2. Convert to Gram\n3. Convert to Kilogram\n4. Convert to Celsius"))

switch(score){

    case 1:
        let fahrenheit = Number(prompt("Please enter any value to convert to Fahrenheit"))

        let total = fahrenheit * 2
        let tota = total + 30
        alert(tota + " Fahrenheit")
        break;

        case 2:
            let gram = Number(prompt("Please enter any value to convert to Gram"))

            let choice = parseInt(gram * 1000)
            alert(choice + " Gram")
            break;

            case 3:
                let kilo = Number(prompt("Please enter any value to convert to Kilogram"))

                let kill = parseInt(kilo / 1000)
                alert(kill + " Kilogram")
                break;

                case 4:
                    let celsius = Number(prompt("Please enter any value to convert to Celsius"))

                    let cel = celsius - 30
                    let tot = cel / 2
                    alert(tot + " Celsius")
                    break;

                    default:
                        alert("Please enter a value")
}