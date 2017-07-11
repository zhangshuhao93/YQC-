<template>
  <div class="hello">
  <h1 class="head"><a href="#/"><span>《</span></a>注册<span class="Login_mima">密码登录</span></h1>
<div id="regist">
  <div class="l_tel">
    <input type="text" placeholder="用户名/手机号" class="text" v-model="username"/>
    <input type="button" value="获取验证码" class="button"/>
  </div>
  <div class="l_code">
    <input type="password" placeholder="密码" class="text" v-model="psw"/>
  </div>
  <div class="other">
    <p>温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意
      <a class="protocol" href="https://h5.ele.me/service/agreement/">《用户服务协议》</a>
    </p>

    <button class="log_btn" @click="regist()">注册</button>
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
    regist: function(){
      this.$http.post('/h51701/apii/user/regest', {
        username: this.username,
        psw: this.psw
      }).then(response => {
        console.log("vue注册结果 : " + response.body);
        if(response.body == "成功注册"){
          this.$router.push('/Wode');
        }
        
        }, response => {
          // error callback
          console.log("error");
        });
    }

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
#regist{
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