var drop_menu: Element = document.querySelector(".drop-menu-link");
var sub_ul: Element = document.querySelector(".sub-ul");
if (drop_menu) {
    drop_menu.addEventListener('click', (): void => {
        sub_ul.classList.toggle('active')
    })
}

var slide: Element = document.querySelector(".slide_icon");
var drawer: Element = document.querySelector("aside");
if (slide) {
    slide.addEventListener('click', (): void => {
        drawer.classList.toggle('active');
        slide.classList.toggle('active');
    })
}

var txt_input: any = document.querySelector('#text_input');
var add_todo: Element = document.querySelector('.add_btn');
var clear_todo: Element = document.querySelector('.dell_all_btn');
var todo_list: Element = document.querySelector('.todo_ul');

var date: Date = new Date();
var day: Number = date.getDate();
var month: Number = date.getMonth() + 1;
var year: Number = date.getFullYear();
var hour: Number = date.getHours();
var min: Number = date.getMinutes();
// var sec: Number = date.getSeconds();

if (add_todo) {
    add_todo.addEventListener('click', (): void => {
        if (txt_input.value.length > 0) {
            async function printTodo() {
                return (txt_input.value);
            }
            printTodo().then(
                function (value) {
                    todo_list.innerHTML += "<li class='todo_li'><div class='flex_box'><div class='box'><p class='todo_item'>" + value + "</p><span class='todo_data'>Date : " + day + "/" + month + "/" + year + " Time : " + hour + " : " + min + "</span></div><div class='box'><div class='btn_wrapper'><a class='edit_btn my_btn' onclick='editTodo(this)'>Edit</a><a class='del_btn my_btn' onclick='deleteTodo(this)'>delete</a></div></div></div></li>";
                    txt_input.value = "";
                    document.querySelector('.value_toast').classList.add('active')
                    setTimeout(() => {
                        document.querySelector('.value_toast').classList.remove('active')
                    }, 2000);
                },
                function (error) {
                    todo_list.innerHTML = error;
                }
            )
        } else {
            document.querySelector('.type_toast').classList.add('active')
            setTimeout(() => {
                document.querySelector('.type_toast').classList.remove('active')
            }, 2000);
        }
    })
}

if (clear_todo) {
    clear_todo.addEventListener('click', () => {
        todo_list.innerHTML = '';
        document.querySelector('.clear_toast').classList.add('active')
        setTimeout(() => {
            document.querySelector('.clear_toast').classList.remove('active')
        }, 2000);
    })
}

function deleteTodo(e) {
    e.parentElement.parentElement.parentElement.parentElement.remove();
    document.querySelector('.del_toast').classList.add('active')
    setTimeout(() => {
        document.querySelector('.del_toast').classList.remove('active')
    }, 2000);
}

function editTodo(e) {
    let updated_todo: string = prompt('Type Todo :');
    let ele_path: Element = e.parentElement.parentElement.parentElement.firstChild.firstChild;
    ele_path.innerHTML = updated_todo;
    document.querySelector('.edit_toast').classList.add('active')
    setTimeout(() => {
        document.querySelector('.edit_toast').classList.remove('active')
    }, 2000);
}

let user_img: HTMLImageElement = document.querySelector('.avatar_img');
let img_url: any = document.querySelector('#image');

if (img_url) {
    img_url.addEventListener('input', (event) => {
        var tmppath = URL.createObjectURL(event.target.files[0]);
        user_img.src = tmppath;
    })
}

var toggle: any = document.querySelector('#dark_theme');
var body_ele: any = document.querySelector('body');
toggle.addEventListener('click', () => {
    if (toggle.checked == true) {
        body_ele.classList.add('dark_theme');
    } else {
        body_ele.classList.remove('dark_theme');
    }

})