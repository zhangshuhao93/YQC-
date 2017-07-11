<template>
  <div class="hello">
    <h1>这是一个发现页</h1>
<Navfooter></Navfooter>
  </div>
</template>

<script>
import Navfooter from './Navfooter';

export default {
  name: 'faxian',
  data () {
    return {
      
    }
  },
   components: {
    Navfooter
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  background:red;
}
</style>
