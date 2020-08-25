document.querySelector('#add_time')
.addEventListener('click', addField)

function callRemoveField () {
    removeFields();
}

function addField() {

    var removeField = document.createElement("input");  
    removeField.setAttribute('type', 'button');  
    removeField.setAttribute('value', 'Remover');
    removeField.setAttribute('id', 'remove');   

    const newFieldContainer = document.querySelector('.schedule_item').cloneNode('true')  

    const fields = newFieldContainer.querySelectorAll('input')
    
    fields.forEach(function(fields) {
        fields.value = ""
        
    });
    newFieldContainer.appendChild(removeField);
    document.querySelector('#schedule_items').appendChild(newFieldContainer)
    callRemoveField()
}
