<template>
	<div id="suo">
		<div class="suo1">
			<a href="/waimai" class="zuo"><</a>
			<input type="text" class="shousuo" placeholder="  请搜索商家"/>
			<span class="s12">搜索</span>
		</div>
		<p class="p1">热门搜索</p>
		<ul class="xiao">
			<li class="mm">鸡排</li>
			<li class="mm">炸鸡</li>
			<li class="mm">汉堡</li>
			<li class="mm">冷面</li>
			<li class="mm">奶茶</li>
			<li class="mm">披萨</li>
			<li class="mm">泡芙</li>
			<li class="mm">水果捞</li>
			<li class="mm">炒面</li>
			<li class="mm">水果捞</li>
			
		</ul>
	</div>

</template>

<script>
import Navfooter from './Navfooter';
export default {
  name: 'search',
  data () {
    return {
      
    }
  },
   components: {
    Navfooter
   },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#suo{height:100%;height:100%;background:#fff;display: flex;flex-direction: column;
	.suo1{width:100%;height:1.38rem;display:flex;flex-direction: row;
		.zuo{width:1rem;height:1.38rem;font-size:0.6rem;font-weight:bold;text-align:center;
			line-height:1.38rem;}		
		.shousuo{width: 6.48rem;height:0.82rem;margin-top:0.27rem;border:0;
background:#f4f4f4;margin-left:0.55rem;}
		.s12{margin-left:0.37rem;font-size:18px;font-weight: bold;height:1.38rem;
line-height: 1.38rem;}
	}
	.p1{font-size: 18px;font-weight: bold;margin-top:0.69rem;margin-left:0.27rem;}
	.xiao{width:100%;min-height: 1.38rem;display: flex;flex-direction: row;
flex-wrap: wrap;margin-top:0.55rem;
		.mm{background:#f4f4f4;height:0.69rem;font-size:16px;margin-top:0.27rem;
border:1px solid #ccc;border-radius: 4px;margin-left: 0.41rem;padding-left: 0.27rem;
padding-right: 0.27rem;}	
}

}



</style>
