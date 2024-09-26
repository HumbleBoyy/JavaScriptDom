const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event 
itemList.addEventListener('click', removeItem)

// Filter Event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
   e.preventDefault();

    // Get input value
    const newItem = document.getElementById('input_item').value;
    
    
    // Create new li element
    const li = document.createElement('li');

    // Add class
    li.className = 'list-group-item';

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create delete button element
    const Deletebutton = document.createElement('button');

    // Add classes to delet btn
    Deletebutton.className = "btn btn-danger btn-sm float-right delete"

    Deletebutton.appendChild(document.createTextNode('Delete'))
    // Append button to li
    li.appendChild(Deletebutton);

    // Append li to list
    itemList.appendChild(li);
}


// Remove Item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


// Filter Items Search Event


// Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get list
    var items = itemList.getElementsByTagName('li');

    // Convert to an array
    Array.form(items).forEach(function(item){
        var itemName = item.firstChild.textContext;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none'
        }
    })
}





