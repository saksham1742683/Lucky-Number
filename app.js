const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
let outputMessage = document.querySelector('#output-message');

function CompareNumber(sum,luckyNumber)
{
    if(sum % luckyNumber ===0)
        {
            outputMessage.innerText = "your birthday is lucky congrats🎉"
        }
        else{
          outputMessage.innerText = "your birthday is not lucky😁 ";
        }
    }

function checkBirthdateIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  CompareNumber(sum,luckyNumber.value);
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < dob.length; index++) {
    sum = sum + Number(dob.charAt(index));
  }
  return sum;
}

checkNumberButton.addEventListener("click", checkBirthdateIsLucky);
