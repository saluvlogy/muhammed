$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            sname:{
                required:true,
                minlength:5
            },
            emi:{
                required:true,
                email:true
            },
            new:{
                required:true,
                minlength:4
            
            },
            day:{
                required:true,
            },
            mothe:{
                required:true,
            },
            yera:{
                required:true,
            },
            gender:{
                required:true,
            }

        },
        messages:{
            fname:"sharik adik to allangil paniyagum to"
        }
        


    })
})

   