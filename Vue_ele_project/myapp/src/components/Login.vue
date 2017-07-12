<template>
  <div class="hello">
  <h1 class="head"><a href="#/"><span>《</span></a>登录<span class="Login_mima">密码登录</span></h1>
<div id="login">
  <div class="l_tel">
    <input type="text" placeholder="用户名/手机号" class="text" v-model.lazy="username"/>
    <span>{{username}}</span>
    <input type="button" value="获取验证码" class="button"/>
  </div>
  <div class="l_code">
    <input type="password" placeholder="密码" class="text" v-model="psw"/>
  </div>
  <div class="other">
    <p>温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意
      <a class="protocol" href="https://h5.ele.me/service/agreement/">《用户服务协议》</a>
    </p>

<!--     <router-link :to="path" @click="login()" tag="button" class="log_btn" replace>
    登录
    </router-link> -->
    <button @click="login()" class="log_btn">登录</button>
    <p>关于我们</p>
  </div>
</div>
<Navfooter></Navfooter>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import Navfooter from './Navfooter';

export default {
  name: 'car',
  data () {
    return {
      username: "",
      psw: "",
    }
  },
   components: {
    Navfooter
   },

  methods: {
    login: function(){
      this.$http.post('/h51701/apii/user/login', {
        username: this.username,
        psw: this.psw
      }).then(response => {
        console.log(response);
        console.log(response.body.msg); //字符串1
        if(response.body.flag){
          this.$router.push('/Wode');
        }
      }, response => {
        // error callback
        console.log("error");
      });
    }

  },
  mounted () {
  },
  updated(){
        //用户名检测：数字、字母、下划线，数字不能开头、6-20
        var reg = new RegExp('^[a-zA-Z_]\w{5,19}$');
        console.log("qqq" + reg.test(this.username));
        console.log(this.username);
        if(reg.test(this.username)){}

        //////////////////////////////////////////
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$ui-width: 719px;
@function px2rem($px){
  @return $px/$ui-width*10rem;
}

.head{
  background:red;
    height:px2rem(80px);
    line-height:px2rem(80px);
    color:#fff;
    text-align:center;
    background:#0096ff;
    font-size:px2rem(30px);
    padding: 0 px2rem(20px);
  span{
    float:left;
  }
  a{
    color:#fff;
  }
  .Login_mima{
    float:right;
  }
}
#login{
  margin-top: px2rem(40px);
  .l_tel{
    padding: px2rem(20px);
      display: flex;
      background: #fff;
      input{
        height:px2rem(50px);
        border:none;
      }
      .text{
        flex:1;
        padding-left:px2rem(20px);
      }
      .button{
        width:30%;
      }
  }
  .l_code{
    @extend .l_tel;
  }
  .other{
    overflow:hidden;
    padding:px2rem(30px);
    p{
      text-align: center;
      color:#999;
      .protocol{
        color:blue;
      }
    }
    .log_btn{
      width:100%;
      background:greenyellow;
      color:#fff;
      height:px2rem(80px);
      border: none;
        margin-top: px2rem(40px);
        margin-bottom: px2rem(30px);
        font-size: 20px;
    }
  }

}

</style>
