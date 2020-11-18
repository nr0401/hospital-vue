<template>
  <div class="login-bg">
    <div class="content">
      <div class="title">
        <h2>注册</h2>
      </div>
      <div class="form-box">
        <div class="login-center">
          <span class="t-name">手机号：</span
          ><input
            type="text"
            name=""
            id="tel_num"
            class="inp phone-inp"
            value=""
            placeholder="请输入您的手机号"
          />
        </div>

        <div class="login-center">
          <span class="t-name">验证码：</span
          ><input
            type="text"
            name=""
            id="code_num"
            class="inp code-inp"
            value=""
            placeholder="请输入您的验证码"
          />
          <div class="get-code">
            <span class="code-btn">获取验证码</span>
          </div>
        </div>

        <div class="login-button">登陆</div>
      </div>
    </div>
  </div>
</template>

<script>
var code_time = 90;
function time_inter() {
  $(".code-btn").addClass("code-btn-gray");
  var timeflag = setInterval(function () {
    $(".code-btn-gray")
      .html("" + code_time + "s后获取")
      .css({
        cursor: "no-",
        color: "#999",
      });
    code_time--;
    if (code_time == 0) {
      clearInterval(timeflag);
      $(".code-btn-gray").html("获取验证码").css({
        cursor: "pointer",
        color: "#a07941",
      });
      $(".code-btn").removeClass("code-btn-gray");
    }
  }, 1000);
}
//获取验证码点击事件
$(".code-btn").on("click", function () {
  if ($(this).hasClass("code-btn-gray")) {
    return false;
  }
  var tel_num = $("#tel_num").val();
  if (tel_num && tel_num.length == 11) {
    time_inter(); //按钮倒计时
  } else {
    alert("请输入正确手机号码");
  }
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
  width: 100%;
}
.login-bg {
  height: 100%;
  background-image: linear-gradient(160deg, #b100ff 20%, #00b3ff 80%);
  position: relative;
  width: 1500px;
  height: 1000px;
}
.content {
  position: absolute;
  width: 350px;
  height: 480px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  top: 50%;
  left: 50%;
  margin-left: -160px;
  margin-top: -230px;
  padding: 10px 20px;
  box-sizing: border-box;
}
.title h2 {
  font-size: 22px;
  line-height: 60px;
  color: #333;
  font-weight: bold;
  text-align: center;
}
.login-center {
  height: 50px;
  border-radius: 5px;
  border: 1px solid #00aced;
  margin-bottom: 30px;
  line-height: 50px;
  padding: 0 10px;
  box-sizing: border-box;
}
.login-center .t-name {
  font-size: 14px;
  float: left;
  height: 100%;

  /* position: relative; */
}
.login-center .inp {
  font-size: 14px;
  float: left;
  border: none;
  background: transparent;
  height: 100%;
  outline: none;
}
.login-center .inp.code-inp {
  width: 120px;
}
.login-center .get-code {
  float: right;
  height: 100%;
}
.login-center .get-code .code-btn {
  color: #a07941;
  font-size: 12px;
  border: 1px solid #a07941;
  border-radius: 5px;
  padding: 5px;
  box-sizing: border-box;
  cursor: pointer;
}
.login-button {
  background-color: #1e90ff;
  height: 50px;
  border-radius: 5px;
  font-size: 18px;
  color: #fff;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
}
</style>