$(document).ready(
    function (){
        $("#password1").blur(
            function (){
                if ($("#password1").val().length>0){
                    let password=  $("#password1").val();
                    let username_1 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
                    if (password.match(username_1)){

                    }else{
                        alert("密码不符合规范");
                    }
                }else{

                }
            }

        )
    }
)