
const form = document.querySelector(".form");
const list = document.querySelector(".list");
const addFoo = document.querySelector("#add-button");
const resetButton = document.querySelector("#reset-button");

// items.forEach(item => {
//     item.addEventListener('click',()=>{
//         item.classList.toggle('done');
//     })
// })


// resetButton.addEventListener('click', () => {
//     const items = document.querySelectorAll (".item");
//     resetButton.classList.toggle('done');
//     setTimeout(() => {
//         items.forEach(item => {
//             item.classList.remove('done');
//             resetButton.classList.remove('done');
//             addFoo.classList.remove('done');
//         })
//     },3000)
    
// })

let isTimerStarted = false;
let timeout = null

resetButton.addEventListener('click', () => {
    const items = document.querySelectorAll (".item");
    if (!isTimerStarted){
        isTimerStarted = true;
        resetButton.textContent = "ОТМЕНИТЬ"
        timeout = setTimeout(() => {
                    items.forEach(item => {
                        item.classList.remove('done');
                        resetButton.classList.remove('done');
                    })
                },3000)
    }else{
        isTimerStarted = false;
        resetButton.textContent = "Сброс";
        clearInterval(timeout);
    }

})


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector(".input");
    const text = input.value; 
    input.value = ' ';

    const newItem = document.createElement('li');
    list.append(newItem);
    newItem.append(text);
    newItem.classList.add('item');

    // list.innerHTML += `<li class="item">${text}</li>`
} )


const foo = () => {
    list.addEventListener('click', (event) => {
        const targetElement = event.target;
        if(targetElement.classList.contains('item')){
            targetElement.classList.toggle('done')
        }
    })
}


const addFooClick = () => {
    addFoo.addEventListener('click', () => {
        addFoo.classList.toggle('done');
        foo()
        })
}
addFooClick();




// //----------------------------------------------------
// const items = document.querySelectorAll('.item');
// const addFoo = document.querySelector('#add-button');
// const reset = document.querySelector('#reset-button');
// const form = document.querySelector('.form');
// const list = document.querySelector('.list');

// let isTimerStarted = false;
// let timeout = null

// reset.addEventListener('click', (event) =>{
//     if(!isTimerStarted){
//         isTimerStarted = true;
//         reset.textContent='ОТМЕНИТЬ';
//         timeout = setTimeout (() => {
//             items.forEach (el => {
//                 el.classList.remove('done');
//                 })
//         },3000)

//     }else{
//         clearInterval(timeout)
//         isTimerStarted = false;
//         reset.textContent = 'СБРОС'; 
//     }

    
// })





// // reset.addEventListener('click', (event) =>{
// //     setTimeout (() => {
// //         items.forEach (el => {
// //             el.classList.remove('done');
// //             })
// //     },3000)
    
// // })


// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const input = document.querySelector('.input');
//     const text = input.value;
//     input.value = '';
//     console.log(text);

//     const newItem = document.createElement('li');
//     list.append(newItem);
//     newItem.append(text);
//     newItem.classList.add('item');

//     // newItem.addEventListener('click', () => {
//     //     newItem.classList.toggle('done')
//     // })

// });



// const foo = () => {
// list.addEventListener('click', (event) => {
//     const targetElement = event.target;
//     if (targetElement.classList.contains('item')){
//         targetElement.classList.toggle('done')
//     }
    
// })
// }


// const addFooClick = () => {
//     addFoo.addEventListener('click', () => {
//         addFoo.classList.toggle('done');
//         foo();
//     })
// }


// addFooClick();




// //____________________________________________

// // const items = document.querySelectorAll('.item');
// // const addFoo = document.querySelector('#add-button');
// // const form = document.querySelector('.form');

// // form.addEventListener('submit', (event) => {
// //     event.preventDefault();
// //     const input = document.querySelector('.input');
// //     const text = input.value;
// //     input.value = '';
// //     console.log(text);

// //     const list = document.querySelector('.list');
// //     const newItem = document.createElement('li');
// //     list.append(newItem);
// //     newItem.append(text);
// //     newItem.classList.add('item');

// //     newItem.addEventListener('click', () => {
// //         newItem.classList.toggle('done')
// //     })

// // });



// //     // const newTable = document.createElement('table');
// //     // const tr = document.createElement('tr');
// //     // const td = document.createElement('td');
// //     // list.append(newTable);
// //     // newTable.append(tr);
// //     // tr.append(td);
// //     // td.append(text);







// // const addFooClick = () => {
// //     addFoo.addEventListener('click', () => {
// //         addFoo.classList.toggle('done');
// //         foo();
// //     })
// // }

// // const foo = () => {
// //     items.forEach(el => {
// //         return (
// //             el.addEventListener('click', () => {
// //                 el.classList.toggle('done');
// //             })
// //         )
// //     });
// // }


// // addFooClick();




// //____________________________________________
// // for(let i = 0; i < items.length; i++){
// //     items[i].addEventListener('click', el => {
// //     items[i].classList.toggle('done');
// //     })
// // }


// // const array = Array.from(items);
// // console.log(array);
// // array.map(el => {
// //     return(
// //         el.addEventListener('click', () => {
// //             el.classList.toggle('done');
// //         } )
// //     )
// // })




