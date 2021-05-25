const memName = document.querySelector('#mem-name');
const memAge = document.querySelector('#mem-age');
const errMsg = document.querySelector('#error-msg');
const addBtn = document.querySelector('#btn-add');
const classList = document.querySelector('.member-list');

const onClick = (e) => {
    if(!memName.value || !memAge.value) {
        errMsg.style.visibility = "visible";
    }
    else {
        errMsg.style.visibility = "hidden";
        const member = document.createElement('li');
        member.innerHTML = `${memName.value} is ${memAge.value}`;
        classList.appendChild(member);

        memName.value = '';
        memAge.value = '';
    }    
}


addBtn.addEventListener('click', onClick);


// My Test //////////////
//1) Sort 'fruits' in string format.

const numArry = [2, 96, 24, -2, 56, 38];

console.log(numArry.sort()[numArry.length - 1]);


