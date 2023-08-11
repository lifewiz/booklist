import books from './booklist.js';


// console.log(books) 콘솔에 렌더링

let content = document.querySelector('#content')
let subjectInput = document.querySelector('#subjectInput')
let authorInput = document.querySelector('#authorInput')
let publisherInput = document.querySelector('#publisherInput')
let dateInput = document.querySelector('#dateInput')
let priceInput = document.querySelector('#priceInput')
let summaryInput = document.querySelector('#summaryInput')
let photoInput = document.querySelector('#photoInput')
let elBtn = document.querySelector("#btnadd")
let addlist = document.querySelector("#addlist")

init()    
function init(){
    let list = "<ul>"
    for (let i in books) {
        list += "<li>"
        list += "<div>"
        list += `<div id="photobox"><img src="./images/${books[i].photo}" onerror="this.src='./images/noimage.gif'"></div>`
        list += `<p>제목 : <b>${books[i].subject}</b></p>`
        list += `<p>저자 : ${books[i].author}</p>`
        list += `<p>출판사 : ${books[i].publisher}</p>`
        list += `<p>출판일 : ${books[i].date}</p>`
        list += `<p>가격 : ${books[i].price}원</p>`
        list += `<p>요약 : <br><div id="summary">${books[i].summary}</div></p>`
        list += "</div>"
        list += "</li>"
        // content.innerHTML = list;
    }
    list += "<li id=addlistbtn><p> + </p></li>"
    list += "</ul>"
    content.innerHTML = list;
}

let addlistbtn = document.querySelector("#addlistbtn")
addlistbtn.onclick=function(){
    addlist.style.display = "flex"
}
elBtn.addEventListener('click', add)

let addlistout = document.querySelector("#addlistout")
addlistout.onlick=function(){
    addlist.style.display = "none"
}

let newbook = {}
// elBtn.onclick=add
// function add(){
//   
// }
    function add(){
        // if (subjectInput.value){
            newbook.subject=subjectInput.value,
            newbook.author=authorInput.value,
            newbook.publisher=publisherInput.value,
            newbook.date=dateInput.value,
            newbook.price=priceInput.value,
            newbook.summary=summaryInput.value,
            newbook.photo=photoInput.value
            console.log("adsfads")
        // }
        books.push(newbook)
        
        init()
        }

