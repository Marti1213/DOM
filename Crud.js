let currentItemId = null;

function createOrUpdateItem() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  if (!name || !email) {
    alert('Please enter both name and email.');
    return;
  }

  if (currentItemId === null) {
    // Create new item
    const newItem = document.createElement('li');
    newItem.innerHTML = `<strong>${name}</strong> - ${email} 
                         <button class="edit-btn">Edit</button>
                         <button class="delete-btn">Delete</button>`;
    document.getElementById('itemList').appendChild(newItem);
  } else {
    // Update existing item
    const existingItem = document.getElementById(currentItemId);
    existingItem.innerHTML = `<strong>${name}</strong> - ${email} 
                              <button class="edit-btn">Edit</button>
                              <button class="delete-btn">Delete</button>`;
    currentItemId = null;
  }

  resetForm();
}

function resetForm() {
  document.getElementById('crudForm').reset();
  currentItemId = null;
}

function editOrDeleteItem(event) {
  if (event.target.classList.contains('edit-btn')) {
    editItem(event);
  } else if (event.target.classList.contains('delete-btn')) {
    deleteItem(event);
  }
}

function editItem(event) {
  const listItem = event.target.closest('li');
  const nameAndEmail = listItem.innerText.split(' - ');
  const name = nameAndEmail[0];
  const email = nameAndEmail[1].split(' ')[1];

  document.getElementById('name').value = name;
  document.getElementById('email').value = email;
  currentItemId = listItem.id;
}

function deleteItem(event) {
  const listItem = event.target.closest('li');
  listItem.remove();
  currentItemId = null;
}