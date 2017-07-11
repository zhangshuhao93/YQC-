<template>
  <div class="hello">
    <h1>hello world</h1>
    <ul>
      <li v-for="item in list">
        车型：{{item.name}} 价格：{{item.price}}
      </li>
    </ul>
    <button @click="getData()">取得数据</button>

  <Navfooter></Navfooter>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
 import Navfooter from './Navfooter'

export default {
  name: 'car',
  data () {
    return {
      list: []
    }
  },
   components: {
    Navfooter
   },

  methods: {
    getData: function(){
      this.$http.get('../../static/data/test.json').then(response => {
        console.log(response.bodyText);
          // get body data
          this.list = eval(response.bodyText);

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

</style>
