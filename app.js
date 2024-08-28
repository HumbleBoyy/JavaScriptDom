





// EXIMINE THE DOCUMENT OBJECT //

// dir() show whole document object
// console.dir(document)

// Checks Domain
// console.log(document.domain);

// Checks URL
// console.log(document.URL)
// console.log(document.title)

// document.title = 1234
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10])


// console.log(document.fonts)
// console.log(document.links)
// console.log(document.forms)



// GET ELEMENTBYID //

// console.log(document.getElementById('header-title'))
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// headerTitle.textContent = "Hello, How are you?"
// headerTitle.innerText = "Say, Hello"
// headerTitle.innerHTML = '<h3>Hello</h3>'
// console.log(headerTitle)
// header.style.borderBottom = '3px solid red'
// headerTitle.style.color = 'white'

// console.log(headerTitle)


// GET ELEMENT CLASS NAME //

// var items = document.getElementsByClassName('list-group-item')

// console.log(items)
// console.log(items[1]);

// items[1].textContent = 'Hello 2'
// items[1].style.fontWeight = '900'
// items[1].style.backgroundColor = 'yellow'


// for(var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = "green"
//     items[i].style.borderBottom = "1px solid white"
//     items[i].style.color = "white"
// }

// GET ELEMENT BY TAG NAME //

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "Get element by tag name";
// li[2].style.color = "green";
// li[1].textContent = "Get element by tag name";



// QUERY SELECTOR //

// var header = document.querySelector('#main-header');
// header.style.borderBottom = '5px solid red'

// var inputs =  document.querySelector('input');
// inputs.value = 'hello world'

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND"

// var item = document.querySelector('.list-group-item');

// item.style.color = 'red';

// QUERY SELECTOR ALL //

// var titles = document.querySelectorAll('.title');
// console.log(titles);

// titles[0].textContent ='Hello, you';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// for(var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = 'red';
//     even[i].style.backgroundColor = 'black';
//     even[i].style.color = 'white';
//     odd[i].style.color = 'white';
// }





// Traversing DOM //

// var itemList = document.querySelector('#items');

// Parent Node

// console.log(itemList.parentNode)
// console.log(itemList.parentNode.parentNode)
// itemList.parentNode.style.backgroundColor = 'red'
// itemList.parentNode.style.color = 'dark'

// Parent Element

// console.log(itemList.parentElement)
// console.log(itemList.parentElement.parentElement)
// itemList.parentElement.style.backgroundColor = 'red'
// itemList.parentElement.style.color = 'dark'


// CHild Nodes //
// console.log(itemList.childNodes)


// // Children //
// console.log(itemList.children);
// console.log(itemList.children[0])
// itemList.children[0].style.background = 'yellow'

// // First Child
// console.log(itemList.firstChild);


// // First  Element Child //
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent = 'First Element Child'



// First Child
// console.log(itemList.lastChild);


// // First  Element Child //
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent = 'last Element Child'


//Next Sibling //

// console.log(itemList.nextSibling);

// // Next Element Sibling //
// console.log(itemList.nextElementSibling);


// // Previous Sibling //
// console.log(itemList.previousSibling);

// // Previuos Sibling Element//
// console.log(itemList.previousElementSibling);




// Crete Element //

// Create a div
// var newDiv = document.createElement('div');

// // Add Class
// newDiv.className = 'hello';

// // Create an id

// newDiv.id = 'hello id'

// // Add attribute
// newDiv.setAttribute('title', 'Hello Div');

// // Create text node
// var newDivText = document.createTextNode('Hello World');

// // Add text to a div
// console.log(newDiv)





// Add Event Listner //

// var button = document.getElementById('button').addEventListener('click', button)
// function button(e){
//     // console.log("Btn clicked")
//     // document.getElementById('header-title').textContent = 'changed'
//     // document.querySelector('#main').style.backgroundColor = "red"
 
//     //console.log(e);

//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);

//     // var outPut = document.getElementById('outPut');
//     // outPut.innerHTML = '<h2>'+e.target.id+'</h2>';

//     // console.log(e.type)

//     // console.log(e.clientX)
//     // console.log(e.clientY)

//     // console.log(e.offsetX)
//     // console.log(e.offsetY)

//     // console.log(e.altKey)
//     // console.log(e.ctrlKey)
//     // console.log(e.shiftKey)
// }



// var button = document.getElementById('button');

// var box = document.getElementById('box')
// button.addEventListener('click', runEvent);

// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);'

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');

// itemInput.addEventListener('keydown', runEvent)
// itemInput.addEventListener('keyup', runEvent)
// itemInput.addEventListener('keypress', runEvent)

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent)

// var select = document.querySelector('select');

// select.addEventListener('change', runEvent)

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent)

// function runEvent(e){
//     console.log("Event Type: " +e.type);
//     console.log(e.target.value);

   

//     document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'
//     // outPut.innerHTML = '<h3>MouseX:'+e.offsetX+'</h3><h3>MouseY: '+e.offsetY+'</h3>';

//     // box.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)"
//     // document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)"
// }
