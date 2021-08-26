const DefaultLoginHeader = '    <i class="material-icons">construction</i>\n' +
    '    <h1>LazyDB <span>Alpha</span></h1>\n' +
    '    <h5>Next-gen SaaS backend</h5>\n';

DefaultLazyDBLoginSuccess =(userData) => {
    Swal.fire({
        icon: 'success',
        title: 'Success !',
        text: 'Successfully connected as ' + userData.username,
    })
};

DefaultLazyDBLoginError =(error) => {
    Swal.fire({
        icon: 'error',
        title: 'Error ...',
        text: 'Invalid credential',
    })
};

function OpenConnectScreen(Lazy_DB, on_connect = DefaultLazyDBLoginSuccess, on_error = DefaultLazyDBLoginError, title = "Login", message = "Sign into your account", img = "https://browser-tools.lazydb.com/logo_lazydb.png", header = DefaultLoginHeader, params = {}){
    window.lastBodyContent = document.body.innerHTML;
    window.lazy_connect = function (){
        let email = document.getElementById('lazydb_loginEmail').value;
        let password = document.getElementById('lazydb_loginPassword').value;
        if(email === "" || password === ""){
            Swal.fire({
                icon: 'error',
                title: 'Error ...',
                text: 'Please fill all field',
            })
            return
        }
        Lazy_DB.connect(email.toLowerCase(), password).then(function (data){
            CloseConnectScreen();
            on_connect(data);
        }).catch(function (error){
            on_error(error);
        })
    }
    document.body.innerHTML =
        '<section class="lazydb_login">\n' +
        '    <div class="container">\n' +
                '<div class="left">\n' +
                    header +
                '</div>\n' +
        '        <div class="right">\n' +
        '            <div class="header">\n' +
        '                <img src="' + img + '">\n' +
        '            </div>\n' +
        '            <div class="arrow-down"></div>\n' +
        '            <div class="form">\n' +
        '                <h2>Login</h2>\n' +
        '                <label>Email</label>\n' +
        '                <input id="lazydb_loginEmail" type="text">\n' +
        '                <label>Password</label>\n' +
        '                <input id="lazydb_loginPassword" type="password">\n' +
        '                <div class="button" onclick="window.lazy_connect()"><i class="material-icons">login</i><p>Sign into your account</p></div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</section>'

    if (params.right_text_color){
        document.getElementsByClassName('container')[0].style.color = params.right_text_color;
    }
    if (params.left_text_color){
        document.getElementsByClassName('left')[0].style.color = params.left_text_color;
    }
    if (params.primary_color){
        document.getElementsByClassName('container')[0].style.background = params.primary_color;
    }
    if (params.span_background){
        document.getElementsByClassName('lazydb_login')[0].getElementsByTagName('span')[0].style.background = params.span_background;
    }
    if (params.span_color){
        document.getElementsByClassName('lazydb_login')[0].getElementsByTagName('span')[0].style.color = params.span_color;
    }
    if (params.header_color){
        document.getElementsByClassName('header')[0].style.background = params.header_color;
        document.getElementsByClassName('arrow-down')[0].style.borderTop = "30px solid " + params.header_color;
    }
    if (params.content_color){
        document.getElementsByClassName('right')[0].style.background = params.content_color;
    }
    if (params.input_background){
        document.getElementsByTagName('input')[0].style.background = params.input_background;
        document.getElementsByTagName('input')[1].style.background = params.input_background;
    }
    if (params.input_color){
        document.getElementsByTagName('input')[0].style.color = params.input_color;
        document.getElementsByTagName('input')[1].style.color = params.input_color;
    }
    if (params.button_color){
        document.getElementsByClassName('button')[0].style.color = params.button_color;
        document.getElementsByClassName('button')[0].style.background = params.button_color + "30";
    }
}

function CloseConnectScreen(){
    document.body.innerHTML =  window.lastBodyContent;
}
