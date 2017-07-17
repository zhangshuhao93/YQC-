<template>
	<div class="hello">
		<div class="det" v-for="item in list">
			<img :src="item.img" />
			<h3>{{item.name}}</h3>
			<p>月售{{item.count}}份</p>
			<h2><span>￥{{item.price}}起</span><button @click="locat">加入购物车</button></h2>
		</div>
		<div class="pingjia" >
			<h2>用户评价 <span>(好评率 100%)</span></h2>
			<div class="userPing" v-for="item in userping">
				<div class="img1"><img :src="'/static/img/'+ item.imgurl"/></div>
				<div class="flext">
					<h3>{{item.nickname}}</h3>
					<p>{{item.content}}</p>	
				</div>
		
			</div>
			
		</div>
	
  	</div>
   
</template>

<script>
import Navfooter from './Navfooter';

export default {
  name: 'dingdan',
  data () {
  	return{
  			userping:[],
  			img1:[],
  			list:[]
  	}
  
   
  },
   components: {
    Navfooter
   },
   methods:{
   	locat:function(){
   		location.hash = "#/Xiangqing"
   	},
   	href:function(){
   		var img1 = location.hash.split("?");
   		this.img1 = img1[1];
// 		alert(this.img1)
   		this.$http.get('/h51701/apii/Goods/details',{
			params:{id:this.img1}
		}).then(response => {
      console.log(response.bodyText)
       var data = JSON.parse(response.bodyText);
       console.log(data.goods_info)
       this.list = data.goods_info;
//     console.log(this.list)
     }, response => {
       // error callback
       console.log("error");     });
   	
   	},
   	getdate:function(){
		  var url="../../static/data/data/details.json";
		  this.$http.get(url).then(response => {
			console.log(response.bodyText);
			console.log(response.bodyText[1].nickname);
			this.userping = eval(response.bodyText);

		  },function(response){
		  	console.log("error");

		  })
		}
       
    },
    mounted:function(){
    	this.href();
    	this.getdate();
    	
    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	$ui-width: 719px;
	@function px2rem($px){
  @return $px/$ui-width*10rem;
}

.hello{display:flex;flex-direction: column;
	.det{width:10rem;height:px2rem(656px);background:#e58585;border-bottom:10px solid #ccc;
		img{width:10rem;height:px2rem(408px)}
		h3{height:px2rem(88px);line-height:px2rem(88px);padding-left:20px;font-size:px2rem(35px)}
		p{height:px2rem(66px);line-height:px2rem(66px);padding-left:20px;font-size:px2rem(30px)}
		h2{height:px2rem(96px);line-height:px2rem(96px);width:10rem;
			span{width:px2rem(150px);margin-left:20px;font-size: px2rem(45px);color:#f60;}
			button{width:px2rem(200px);height:px2rem(58px);color:#fff;background:#FF6600;border:none;
					float:right;border-radius:5px;line-height:px2rem(58px);margin-top:px2rem(10px);margin-right:20px;}		
		}
	
	}
	.pingjia{width:10rem;
		h2{height:px2rem(90px);margin-left:20px;border-bottom:1px dotted #ccc;line-height:px2rem(90px);font-size:px2rem(30px);
			span{font-weight:100;font-size:px2rem(22px);}
		}
		.userPing{height:px2rem(176px);display: flex;border-bottom:1px solid #ccc;background:#fff;
			.img1{width:px2rem(120px);height:px2rem(176px);border:0;flex:none;
				img{width:px2rem(100px);height:px2rem(120px);margin:px2rem(18px) auto;}			
			}
			.flext{height:px2rem(176px);flex:1;padding-left:10px;
				h3{height:px2rem(80px);font-weight:100;margin-top:px2rem(18px);font-size:px2rem(35px)}
				p{font-size:px2rem(30px)}
			}
			
		}
		
	}


}
</style>
