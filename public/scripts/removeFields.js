function removeFields () {
    const remove = document.querySelectorAll('#remove')

    remove.forEach(function(el) {
        el.addEventListener('click', function() {
            this.closest('.schedule_item').remove();
        })
    })
}
