let form = document.querySelector("#addForm");
let itemList = document.querySelector("#items");
let filter = document.querySelector("#filter");

// Form submit event
form.addEventListener("submit",addItem);
// Delete event
itemList.addEventListener('click',removeItem);
// Filter event
filter.addEventListener('keyup',filterItems)

// Add Item
function addItem(e){
    e.preventDefault();

    // Get Input Value
    let newItem = document.querySelector("#item");

    // Create new Li Element
    let li = document.createElement("li");
    li.className = "list-group-item";

    // Add text
    li.appendChild(document.createTextNode(newItem.value));
    //console.log(li);

    // create del button element
    let deleteBtn = document.createElement("button");
    
    // add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete';

    // append text node
    deleteBtn.appendChild(document.createTextNode("x"));
    li.appendChild(deleteBtn);

    itemList.appendChild(li);

}

// Remove Item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are You Sure?")){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e){
    // convert text to lowercase
    let text = e.target.value.toLowerCase();
    // Get list
    let items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
    
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    });
}