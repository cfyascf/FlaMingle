let photo = document.getElementById('imgPhoto');
let file = document.getElementById('flImage');

photo.addEventListener('click', () => {
    file.click();
});



file.addEventListener('change', () => {
    if (file.files.length == 0) {
        return;
    }

    if (file.files.length > 0) {
        var myModal = new bootstrap.Modal(document.getElementById('modal-change-img'));
        myModal.show();
    }

    var btn = document.querySelector('#modal-change-img .btn-primary');
    btn.addEventListener('click', () => {
        let reader = new FileReader();
        reader.readAsDataURL(file.files[0]);
            
        reader.onload = () => {
        photo.src = reader.result;
        }
    });
})