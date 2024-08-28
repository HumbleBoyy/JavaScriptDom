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