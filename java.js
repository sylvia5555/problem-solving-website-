// toggle menu

let menu = document.querySelector('.toggle-menu');
let box = document.querySelector('.box');

menu.onclick = function (){
    if (box.id === 'hidden'){
        box.id = 'show'
        menu.setAttribute('class','fa-solid fa-xmark toggle-menu c-white');
        menu.style.fontSize = '30px';
    }
    else{
        box.id = 'hidden'
        menu.setAttribute('class','fa-solid fa-bars toggle-menu c-white');
        menu.style.fontSize = '25px';
    }
}

// use coding
let li = document.querySelectorAll('.use-coding .container .box2 .bullets li');
let boxs = document.querySelectorAll('.use-coding .container .box2 .box');

// Onclick
li.forEach(function (e) {
    e.onclick = function (e) {
        clearInterval(counter);
        li.forEach(function (e) {
            e.classList.remove('active');
        })
        this.classList.add('active');
        let className = this.classList.item(0);
        boxs.forEach(function (ele) {
            if (ele.classList.contains(className)){
                boxs.forEach(function (ele) {
                    ele.classList.remove('active')
                })
                ele.classList.add('active')
            }
        })
    }
})

// click()

let counter = setInterval(function () {
    let stop = 0;
    li.forEach(function (e) {
        if (!e.classList.contains('active') && !stop ){
            li.forEach(function (e) {
                e.classList.remove('active');
            })
            e.classList.add('active');
            let str = e.classList.item(0);
            boxs.forEach(function (ele) {
                if (ele.classList.contains(str)){
                    boxs.forEach(function (ele) {
                        ele.classList.remove('active')
                    })
                    ele.classList.add('active')
                }
            })
            stop = 1;
        }
    })
}, 4000);




