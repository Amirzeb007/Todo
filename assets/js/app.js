var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var drop_menu = document.querySelector(".drop-menu-link");
var sub_ul = document.querySelector(".sub-ul");
if (drop_menu) {
    drop_menu.addEventListener('click', function () {
        sub_ul.classList.toggle('active');
    });
}
var slide = document.querySelector(".slide_icon");
var drawer = document.querySelector("aside");
if (slide) {
    slide.addEventListener('click', function () {
        drawer.classList.toggle('active');
        slide.classList.toggle('active');
    });
}
var txt_input = document.querySelector('#text_input');
var add_todo = document.querySelector('.add_btn');
var clear_todo = document.querySelector('.dell_all_btn');
var todo_list = document.querySelector('.todo_ul');
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
var hour = date.getHours();
var min = date.getMinutes();
// var sec: Number = date.getSeconds();
if (add_todo) {
    add_todo.addEventListener('click', function () {
        if (txt_input.value.length > 0) {
            function printTodo() {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, (txt_input.value)];
                    });
                });
            }
            printTodo().then(function (value) {
                todo_list.innerHTML += "<li class='todo_li'><div class='flex_box'><div class='box'><p class='todo_item'>" + value + "</p><span class='todo_data'>Date : " + day + "/" + month + "/" + year + " Time : " + hour + " : " + min + "</span></div><div class='box'><div class='btn_wrapper'><a class='edit_btn my_btn' onclick='editTodo(this)'>Edit</a><a class='del_btn my_btn' onclick='deleteTodo(this)'>delete</a></div></div></div></li>";
                txt_input.value = "";
                document.querySelector('.value_toast').classList.add('active');
                setTimeout(function () {
                    document.querySelector('.value_toast').classList.remove('active');
                }, 2000);
            }, function (error) {
                todo_list.innerHTML = error;
            });
        }
        else {
            document.querySelector('.type_toast').classList.add('active');
            setTimeout(function () {
                document.querySelector('.type_toast').classList.remove('active');
            }, 2000);
        }
    });
}
if (clear_todo) {
    clear_todo.addEventListener('click', function () {
        todo_list.innerHTML = '';
        document.querySelector('.clear_toast').classList.add('active');
        setTimeout(function () {
            document.querySelector('.clear_toast').classList.remove('active');
        }, 2000);
    });
}
function deleteTodo(e) {
    e.parentElement.parentElement.parentElement.parentElement.remove();
    document.querySelector('.del_toast').classList.add('active');
    setTimeout(function () {
        document.querySelector('.del_toast').classList.remove('active');
    }, 2000);
}
function editTodo(e) {
    var updated_todo = prompt('Type Todo :');
    var ele_path = e.parentElement.parentElement.parentElement.firstChild.firstChild;
    ele_path.innerHTML = updated_todo;
    document.querySelector('.edit_toast').classList.add('active');
    setTimeout(function () {
        document.querySelector('.edit_toast').classList.remove('active');
    }, 2000);
}
var user_img = document.querySelector('.avatar_img');
var img_url = document.querySelector('#image');
if (img_url) {
    img_url.addEventListener('input', function (event) {
        var tmppath = URL.createObjectURL(event.target.files[0]);
        user_img.src = tmppath;
    });
}
var toggle = document.querySelector('#dark_theme');
var body_ele = document.querySelector('body');
toggle.addEventListener('click', function () {
    if (toggle.checked == true) {
        body_ele.classList.add('dark_theme');
    }
    else {
        body_ele.classList.remove('dark_theme');
    }
});
// function toggleTheme(event) {
//     let body: any = document.querySelector('body');
//     if (event.target.checked) {
//         body.className.add('dark_theme');
//     } else {
//         body.className.add('dark_theme');
//     }
// }
// toggle.addEventListener('change', toggleTheme);
