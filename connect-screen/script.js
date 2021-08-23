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

function OpenConnectScreen(Lazy_DB, on_connect = DefaultLazyDBLoginSuccess, on_error = DefaultLazyDBLoginError,title = "Login", message = "Sign into your account", img = "https://browser-tools.lazydb.com/logo_lazydb.png", header = DefaultLoginHeader){
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
}

function CloseConnectScreen(){
    document.body.innerHTML =  window.lastBodyContent;
}