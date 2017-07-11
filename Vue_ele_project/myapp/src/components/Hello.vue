<template>
  <div class="hello">
    <h1>hello world</h1>
    <button @click="test()">占击测试</button>

    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <ul>
        <li v-for="item in list">{{ item }}</li>
      </ul>
    </mt-loadmore>

  </div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: ["CX1", "CX2","CX3", "CX4","CX5", "CX6","CX7", "CX8",],
      allLoaded: false
    }
  },
  methods: {
    test: function(){
      Toast({
        message: 'Upload Complete',
        position: 'bottom',
        duration: 5000
      });
    },
    loadBottom: function(){
      // var that = this;
      // setTimeout(function(){
      //   for(var i=0; i<20; i++){
      //     that.list.push("NN" + i);
      //   }
      //   that.allLoaded = true;// if all data are loaded
      //   that.$refs.loadmore.onBottomLoaded();
      // }, 2000)
    },
    loadTop: function(){
      var that = this;
      setTimeout(function(){
        for(var i=0; i<20; i++){
          that.list.push("NN" + i);
        }
        that.allLoaded = true;// if all data are loaded
        that.$refs.loadmore.onBottomLoaded();
      }, 2000)
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
