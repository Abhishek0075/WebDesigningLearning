$(document).ready(function(){
    $("#formPart").validate({
        rules:{
            fName:{
                required:true,
                minlength:4
            },
            sName:{
                required:true,
                minlength:4
            },
            emailAddress:{
                required:true
            },
            date:{
                required:true
            },
        },
        messages:{ //Create custom messages for the errors
            fName:{
                required:"Ivde Nokke",
                minlength:"4 ennam enkile adikada"
            }
        }
    })
})