const { create } = require("domain");
const { stringify } = require("querystring");
const readline = require("readline");

const rl  = readline.createInterface({
input:process.stdin,
output : process.stdout,
});

rl.question("Enter String to Check Paradrome : " ,function (str){

    let forr = "";
    let revv = ""
 

for (let i = 0; i < str.length; i++)
        forr = forr + str[i];

    
            console.log(`Forword String: "${forr}"` );
for (let i = str.length - 1; i >= 0; i--) {
        revv = revv + str[i];
      
    }
            console.log(`reverse String: "${revv}"` );

  if(forr == revv){
    console.log(`Yes Paradrom` );
  }else{
    console.log(`Not a Paradrom` );
  }


} );