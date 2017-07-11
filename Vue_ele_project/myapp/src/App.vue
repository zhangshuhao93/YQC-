<template>
  <div id="app">
    <router-view class="aaa"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
$ui-width: 719px;
@function px2rem($px){
  @return $px/$ui-width*10rem;
}
body,h1,h2,h3,h4,h5,h6,p,a,img,ul,li,ol,dl,dt,dd,input,figure,figcaption{
  padding:0;
  margin:0;
  box-sizing:border-box;}
html,body{
  height:100%;
  background:#f4f4f4;}
header,footer,main,section,nav,figure,figcaption,aside{
  display:block;}
img{
  display:block;
  border:0;}
ul,ol{
  list-style:none;}
input{
  outline:none;}
body{
  font-size:.1669rem;
  color:#3e3e3e;
}
a{
  text-decoration:none;
  color:#909090;}
.l{
  float:left;
}
.r{
  float:right;
}
    @font-face {
      font-family: 'iconfont';
      src: url('./font/iconfont.eot');
      src: url('./font/iconfont.eot?#iefix') format('embedded-opentype'),
      url('./font/iconfont.woff') format('woff'),
      url('./font/iconfont.ttf') format('truetype'),
      url('./font/iconfont.svg#iconfont') format('svg');
    }
    .iconfont{
      font-family:"iconfont" !important;
      font-style:normal;
      -webkit-font-smoothing: antialiased;
      -webkit-text-stroke-width: 0.2px;
      -moz-osx-font-smoothing: grayscale;
    }


#app {
  display:flex;
  flex-direction: column;
  height:100%;
}

.aaa{
  overflow-x:hidden;
  flex:1;
}



</style>
