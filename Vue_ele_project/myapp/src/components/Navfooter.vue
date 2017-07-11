<template>

<div class="nav">
  <div class="div1">
    <a href="#/" class="active">
        <i class="iconfont">&#xe501;</i>
        外卖
    </a>
  </div>
  <div class="div1">
    <a href="#/faxian" class="active">
        <i class="iconfont">&#xe623;</i>
        发现
    </a>
  </div>
  <div class="div1">
    <a href="#/dingdan" class="active">
      <i class="iconfont">&#xe62f;</i>
      订单
    </a>
  </div>
  <div class="div1">
    <a href="#/wode" class="active">
        <i class="iconfont">&#x3575;</i>
        我的
    </a>
  </div>
</div>
</template>

<script>
export default {
  name: 'navfooter',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav{
  position:fixed;
  bottom: 0;
  width:100%;
  height:1.33519rem;
  display:flex;
  justify-content:space-around;
  box-sizing: border-box;
  padding-top: 1%;
  background:#fff;

.div1 {
  display: inline-block;
  font-size: 0.27816rem;
  display: block;
  flex: 1;
  text-align: center;
}
  .div1 a {
    display: block;
    color: #232323;
    text-decoration: none; }
  .div1 a:hover {
    color: #159bfa; }
  .div1 a.active {
    background: #fff; }

.div1 i {
  display: block;
  font-size: 0.55633rem;}
}

</style>

