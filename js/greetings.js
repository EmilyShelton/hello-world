const verifyName = function verifyName(){
    const userName = prompt('What is your name?');
    
    if(userName === 'Emily'){
        console.log('hooray!');
    }
    else{
        console.log('oops!');
    }
};

verifyName();
// document.querySelector('h1').addEventListener('click', () => console.log )