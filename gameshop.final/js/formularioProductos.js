$(document).ready(function() {
    $("#formulario-productos ").validate({
        rules:{
            id:{
                required: true,
            },
            nombre:{
                required: true,
            },
            descripcion:{
                required: true,
            },
            precio:{
                required: true,
            },
        },
        messages:{
            id:{
                required: 'ID es un campo obligatorio',
            },
            nombre:{
                required: 'El nombre es un campo obligatorio'
            },
            descripcion:{
                required: 'La descripcion es un campo obligatorio'
            },
            precio:{
                required: 'El precio es un campo obligatorio'
            },
        },

    });
});