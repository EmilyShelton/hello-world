const h1 = document.querySelector('h1');
const title = h1.textContent;

const greetUser = function greetUser(){
    let userName = prompt('What is your name?');

    while(userName == ''){
        userName = prompt('No seriously, what is your name?');
    }
    
    h1.textContent = title + ', Welcome ' + userName + '!';
};

greetUser();