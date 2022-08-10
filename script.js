let pass1 = document.getElementById("pass1");
let pass2 = document.getElementById("pass2");
 

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X",
"Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", 
"1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",
",","|",":",";","<",">",".","?",
"/"];

function generate() {
    let password1 = "";
    let password2 = "";

   for (let i = 0;  i < 15; i++) {
    let firstPass = characters[Math.floor(Math.random()* characters.length)];
    let secondPass = characters[Math.floor(Math.random()* characters.length)];

    console.log(firstPass)

    password1 += firstPass;
    password2 += secondPass;
    
   }
   pass1.innerHTML = password1;
   pass2.innerHTML = password2;
}

    