//cookie
if (document.cookie.length > 0) {
    var arr = document.cookie.split(';'); //这里显示的格式需要切割一下自己可输出看下
    console.log(arr[0]+arr[1]);
    for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split('='); //再次切割得到单个Cookie的内容
        //判断查找相对应的值
        if (arr2[0].trim() == 'username') {
            document.getElementById("username").value = arr2[1]; //保存到保存数据的地方
        } else if (arr2[0].trim() == 'password') {
            document.getElementById("password").value = arr2[1];
        }
    }
}
else{
    document.getElementById("username").value= ""
    document.getElementById("password").value= ""
}


let uri = location.search;
if (uri!=null && uri!=""){
    let strings = uri.split("=");
    if (strings[1]=="yes"){
        showTips();
    }
}
let usernameINPUT = document.getElementById("username");
let passwordINPUT = document.getElementById("password");
let kindRadio = document.getElementsByName("kind");
//提交按钮
let loginBTN = document.getElementById("loginSubmitBTN");

loginBTN.addEventListener('click',function () {
    let username = usernameINPUT.value.trim();
    let password = passwordINPUT.value.trim();

    var formData={
        "username":username,
        "password":password,
        "kind":""
    };
    for (let i = 0; i < kindRadio.length; i++) {
        if (kindRadio[i].checked){
            formData.kind=kindRadio[i].value;
        }
    }
    axios({
        method:"post",
        url:"http://localhost:8080/computer/user/login",
        data:formData
    }).then(function (resp) {
        if (resp.data==="succeed"){
            let exdate = new Date(); //获取时间
            exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * 365); //保存的天数
            document.cookie="username="+username+";expires="+ exdate.toGMTString();
            document.cookie="password="+password+";expires="+ exdate.toGMTString();
            location.href="BrandsControl.html";
        }else {
            document.getElementById("usernamePasswordError").style.visibility="visible";
        }
    })
})

// 这里封装了一个函数，哪里需要的时候调用就可以了
// 弹出提示
function showTips(){
    document.querySelector('#successTips').className = 'showAndHide';
    let timer = setTimeout(()=>{
        document.querySelector('#successTips').className = '';
    },5000)
}
