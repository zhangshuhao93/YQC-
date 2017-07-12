<template>
  <div class="hello">
<div id="header">
  <h1 class="hd"><span>《</span>我的</h1>
  <div class="portrait">
    <a class="La"><i class="iconfont">&#x3575;</i></a>
    <div class="Rd">
      <p v-if="!flag"><a href="#/login">{{log}}</a>/<a href="#/regist">{{rig}}</a></p>
      <p v-else="falg"><a>{{log}}</a>/<a href="#/" @click="removeC()">{{rig}}</a></p>
      <p><i class="iconfont">&#xe625;</i>登录后享受更多特权</p>
    </div>
    <p class="Rp">》</p>
  </div>
</div>

<div id="index">
  <div class="Lindex">
    <a><i class="iconfont">&#xe648;</i></a>优惠
  </div>
  <div class="Rindex">
    <a><i class="iconfont">&#xe624;</i></a>积分
  </div>
</div>

<ul id="List">
  <router-link to="login" tag="li" v-if="!flag"><i class="iconfont c1">&#xe62f;</i>我的订单<span class="r">》</span></router-link>
  <router-link to="dingdan" tag="li" v-else="flag"><i class="iconfont c1">&#xe62f;</i>我的订单<span class="r">》</span></router-link>
  <li><i class="iconfont c2">&#xe601;</i>积分商城<a class="r">》</a></li>
  <li><i class="iconfont c3">&#xe6b8;</i>饿了么会员卡<a class="r">》</a></li>
  <li class="hyaline"></li>
  <li><i class="iconfont c1">&#xe603;</i>服务中心<a class="r">》</a></li>
  <li><i class="iconfont c1">&#xe677;</i>下载饿了么APP<a class="r">》</a></li>
</ul>
<a href="#/car">购物车</a>
<Navfooter></Navfooter>
</div>
</template>

<script>
import Navfooter from './Navfooter';
import {getCookie} from '../../static/js/getCookie.js';
export default {
  name: 'wode',
  data () {
    return {
      log: " 登录 ",
      rig: " 注册 ",
      flag: false
    }
  },
  methods: {
    setCookie : function(name, value, day, path, isSafe) {
        var str = '';
        str = encodeURIComponent(name) + '=' + encodeURIComponent(value);
//        str = encodeURIComponent(str);
        if (path) {
            str += ';path=' + path;
        }
        if (day) {
            var now = new Date();
            now.setDate(now.getDate() + day);
            str += ';expires=' + now;
        }
        if (isSafe) {
            str += ';secure';
        }
        document.cookie = str;
    },
    removeC: function(){
      console.log("我是getCookie :" + getCookie("username"));
      this.setCookie("username", '', -1);
    }
  },
  mounted () {
    // console.log("11111112222++++++" + getCookie("username"));
    if(getCookie("username")){
      this.flag = true;
      this.log = " 你好: " + getCookie("username") + " ";
      this.rig = " 退出 ";
    }
  },
   components: {
    Navfooter
   },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$ui-width: 719px;
@function px2rem($px){
  @return $px/$ui-width*10rem;
}

#header{
  color:#fff;
  text-align:center;
  background:#e58585;
  font-size:px2rem(30px);
  padding: 0 px2rem(20px);
  margin-bottom: px2rem(10px);
  .hd{
    height:px2rem(80px);
    line-height:px2rem(80px);
    font-size:px2rem(35px);
    span{
      float:left;
    }
  }
  .portrait{
    overflow: hidden;
    margin-top: px2rem(20px);
    .La{
      float:left;
      height:px2rem(100px);
      line-height:px2rem(100px);
      width:px2rem(100px);
      text-align:center;
      border-radius:50%;
      background:#fff;
      i{
        font-size:px2rem(100px);
      }
    }
    .Rd{
      float:left;
      height:px2rem(100px);
      line-height:px2rem(50px);
      text-align: left;
      padding-left: px2rem(30px);
      a{
        color:#fff;
      }
    }
    .Rp{
      float:right;
      height:px2rem(100px);
      line-height:px2rem(100px);
    }
  }
}


#index{
  overflow:hidden;
  background:#fff;
  margin-bottom: px2rem(25px);
  .Lindex{
    float:left;
    width:50%;
    border-right:1px solid #ccc;
    box-sizing:border-box;
    text-align:center;
    padding: px2rem(25px) 0;
        font-size: px2rem(30px);
    a{
      width: px2rem(50px);
      height: px2rem(50px);
      line-height: px2rem(50px);
      margin: 0 auto;
      margin-bottom: px2rem(8px);
      border-radius: 50%;
      display:block;
      background:salmon;
      color:#fff;
      i{
        display:block;
        font-size: px2rem(30px);
      }
    }
  }
  .Rindex{
    float:right;
    width:50%;
    border-left:1px solid #ccc;
    box-sizing:border-box;
    text-align:center;
    padding: px2rem(25px) 0;
        font-size: px2rem(30px);
    a{
      width: px2rem(50px);
      height: px2rem(50px);
      line-height: px2rem(50px);
      margin: 0 auto;
      margin-bottom: px2rem(8px);
      border-radius: 50%;
      display:block;
      background:aquamarine;
      color:#fff;
      i{
        display:block;
        font-size: px2rem(30px);
      }
    }
  }
}


#List{
  border-top:1px solid #ccc;
  li.hyaline{
    background:none;
  }
  li{
    background:#fff;
    font-size:px2rem(35px);
    padding: px2rem(20px) 0;
    border-bottom:1px solid #ccc;
    a,span{
      padding-right:px2rem(20px);
    }
    i{
      padding:0 px2rem(20px);
    }
    .c1{
      color:greenyellow;
    }
    .c2{
      color:salmon;
    }
    .c3{
      color:peru;
    }
  }
}
</style>
