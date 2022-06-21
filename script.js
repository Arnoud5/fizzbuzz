const enter = () =>{
    const root = document.querySelector('#root');
    const number = parseInt(document.querySelector('input').value);
    // remove all .numberp class if there is .numberp
    let test = document.querySelectorAll('p.numberp')
    if( test != 0){
        for (let i = 0; i < test.length; i++) {
            test[i].remove();
        }
    }
        // number hold a number value i.e 10.
        // then we want to loop over to append the number to the html
        if(number===0){
            console.log('enter valid number')
        }else{
            for(let i=1;i<=number;i++){
                if(i%3===0 && i%5===0){
                    const p = document.createElement('p');
                    p.classList.add(`numberp`)
                    p.classList.add(`numberp-${i}`)
                    p.textContent = 'FizzBuzz';
                    root.appendChild(p)
                } else if(i%3===0){
                    const p = document.createElement('p');
                    p.classList.add(`numberp`)
                    p.classList.add(`numberp-${i}`)
                    p.textContent = 'Buzz';
                    root.appendChild(p)
                } else if(i%5===0){
                    const p = document.createElement('p');
                    p.classList.add(`numberp`)
                    p.classList.add(`numberp-${i}`)
                    p.textContent = 'Fizz';
                    root.appendChild(p)
                } else {
                    const p = document.createElement('p');
                    p.classList.add(`numberp`)
                    p.classList.add(`numberp-${i}`)
                    p.textContent = i;
                    root.appendChild(p)
                }
            }
        }
    
}