<template>
  <div class="hello">
    <h1>hello i is mint_test</h1>
    <hr/>
    <button @click="out()">点我我就弹，不信你试试</button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
  name: 'mtest',
  data () {
    return {

    }
  },
  methods: {
    out: function(){
      Toast('提示信息');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button{
  width:100%;
  height:100px;
  background:green;
  color: #fff;
  font-size: 30px;
}
</style>
