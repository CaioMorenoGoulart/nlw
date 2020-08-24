document.querySelector('#add_time')
.addEventListener('click', cloneField)

function cloneField() {
    const newFieldContainer = document.querySelector('.schedule_item').cloneNode('true')   

    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(fields) {
        fields.value = ""
        
    });

    document.querySelector('#schedule_items').appendChild(newFieldContainer)
}
