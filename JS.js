const passbox  = document.getElementById('password');
const length =10 ;
const uppercase='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercase = 'abcdefghijklmnopqrstuvwxyz'
const nums ='0123456789'
const symbols ='!@#$%^&*?|\/><{}[]'
const allchar= uppercase + lowercase + nums + symbols 

function creatpass(){
    let password='';

    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += nums[Math.floor(Math.random() * nums.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    
    while (length>password.length ) {
        password += allchar[Math.floor(Math.random() * allchar.length)];
        
    }
    passbox.value =password;
}


function copyPass(){
    passbox.select();
    document.execCommand('copy')


}
