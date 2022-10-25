var usernameFlag=false;
var usernameFlagExist=false;
var checkCodeFlag=false;
//验证用户名
let usernameINPUT = document.getElementById("username");
usernameINPUT.onblur = checkUserName;

function checkUserName() {
    let username = usernameINPUT.value.trim();
    var reg = /^\w{1,10}$/;
    var flag = reg.test(username);
    usernameFlag=flag;
    var formData={"username":username};
    var flag1=false;
    //发送异步请求axios验证用户名是否存在
    axios({
        method:"post",
        url:"http://localhost:8080/computer/user/selectByUsername",
        data:formData
    }).then(function (resp) {
        // console.log("用户名是否可以注册？"+resp.data);
        if (resp.data=="exist"){
            document.getElementById("username-exist").style.visibility='visible';
            document.getElementById("username").style.borderColor='#ee3636';
            // usernameFlagExist=false;
        }else {
            document.getElementById("username-exist").style.visibility='hidden';
            document.getElementById("username").style.borderColor='#f1f0f0';
            usernameFlagExist=true;
        }
    })

    if (flag) {
        document.getElementById("Error-username").style.visibility = 'hidden';
    } else{
        document.getElementById("Error-username").style.visibility = 'visible';
    }
    console.log("用户名input："+flag && flag1)
    return flag && flag1;
}

// 密码
var passwordInput = document.getElementById('password');
passwordInput.onblur = checkpassword;

function checkpassword() {
    let password = passwordInput.value.trim();
    var reg = /^\w{6,12}$/;
    var flag = reg.test(password);
    if (flag) {
        document.getElementById("Error-password").style.visibility = 'hidden';
    } else {
        document.getElementById("Error-password").style.visibility = 'visible';
    }
    return flag;
}

//二次输入密码
var repasswordInput = document.getElementById('repassword');
repasswordInput.onblur = checkrepassword;

function checkrepassword() {
    let password = passwordInput.value.trim();
    let repassword = repasswordInput.value.trim();
    var flag = password == repassword;
    if (flag) {
        document.getElementById("Error-repassword").style.visibility = 'hidden';
    } else {
        document.getElementById("Error-repassword").style.visibility = 'visible';
    }
    return flag;
}

//手机号
var phoneInput = document.getElementById('phone');
phoneInput.onblur = checkphoneNumber;

function checkphoneNumber() {
    let phone = phoneInput.value.trim();
    var regphone = /^1[0-9]{10}$/;
    let flag = regphone.test(phone);
    if (flag) {
        document.getElementById("Error-phone").style.visibility = 'hidden';
    } else {
        document.getElementById("Error-phone").style.visibility = 'visible';
    }
    return flag;
}

//邮箱
var emailInput = document.getElementById('email');
emailInput.onblur = checkemail;

function checkemail() {
    let email = emailInput.value.trim();
    var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    let flag = pattern.test(email);
    if (flag) {
        document.getElementById("Error-email").style.visibility = 'hidden';
    } else {
        document.getElementById("Error-email").style.visibility = 'visible';
    }
    return flag;
}
//验证码
let codeInput = document.getElementById("code");
codeInput.onblur=checkCodePass;
function checkCodePass(){
    var flag=false;
    let usernameCode = codeInput.value.trim();
    axios({
        method: "post",
        url: "http://localhost:8080/computer/user/checkCodePass",
        data: usernameCode
    }).then(function (resp) {
        // console.log("验证码接收到的resp.data值："+resp.data);
        if (resp.data=="pass"){
            document.getElementById("Error-code").style.visibility='hidden';
            checkCodeFlag=true;
            flag=true;
        }else {
            document.getElementById("Error-code").style.visibility='visible';
            checkCodeFlag=false;
        }
    })
    return flag;
}

//为验证码图片绑定单机事件
let imgBTN = document.getElementById("codeImg");
imgBTN.onclick=function () {
    this.src="/computer/user/checkCode?"+new Date().getMilliseconds();
}
//提交按钮
var registerBTN=document.getElementById("submitBTN");

/*if (checkUserName() && checkpassword() && checkrepassword() && checkphoneNumber() && checkemail() && checkCodePass()){
    registerBTN.disabled='false';
}else {
    registerBTN.disabled='true';
}*/

//提交按钮，注册事件，封装JSON实体对象
registerBTN.onclick=function () {
    /*console.log("用户名: "+checkUserName());
    console.log("验证码: "+checkCodePass()+"\n");*/
    if (!(usernameFlag && usernameFlagExist && checkpassword() && checkrepassword() && checkphoneNumber() && checkemail() && checkCodeFlag)){
        return;
    }
    let username = usernameINPUT.value.trim();//用户名
    let password = passwordInput.value.trim();
    let phone = phoneInput.value.trim();
    let email = emailInput.value.trim();
    let kind="1";
    var formData={
        "username":username,
        "password":password,
        "phone":phone,
        "email":email,
        "kind":kind
    }
    axios({
        method:"post",
        url:"http://localhost:8080/computer/user/register",
        data:formData
    }).then(function (resp) {
        if (resp.data==="succeed"){
            location.href="index.html?register=yes";
        }else {
            alert("注册失败");
        }
    })
}