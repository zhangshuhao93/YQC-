<template>
<div class="hello">
	<div class="xhead">
		<div class="xhe1"><a href="/Waimai">&lt</a></div>
		<div class="xhe2">
			<div class="xhe2l">
				<img src="../img/xq2.jpeg" />	
			</div>
			<div class="xhe2r">
				<h2>(食其家大连奥林匹克广场店)</h2>
				<div class="xher1"><span>蜂鸟专送\40分钟送达\￥4配送费</span><span class="xher2">&gt</span></div>
				<div class="xher3">公告:欢迎订餐，高峰期请提前订餐，谢谢</div>
			</div>
		</div>
		<div class="xhe4"><li><span>新</span>新用户下单立减17.0元(不与其他活动共享)</li><li>4个活动</li></div>
	</div>
	<div class="xsec">
		<li><a href="">商品</a></li>
		<li>评价</li>
	</div>
	<div class="xthi">
		<div class="xthl" >
			<div v-for="(item,index) in list" @click="change(index)"  :class="{changeGround:index==currentIndex}">{{item.type}}</div>
		</div>
		<div class="xthr" v-if="currentIndex==0">
			<div class="xthr1" ><span>热销</span>大家喜欢吃，才叫真好吃</div>
			<div class="xthr2" v-for="(item,index) in list" >
				<div class="xthr4">
					<img :src="item.imgurl" >
				</div>
				<div class="xthr3">
				
					<div class="xthr33">{{item.name}}</div>
					<div class="xthr31"><li>月售{{item.count}}份</li><li>好评率97%</li></div>
					<div class="xthr32">
						<span>￥{{item.price}}</span>元						
			<!-- ---------------------- 点击加号----------------------- -->
						<div >
							<img src="../img/xq5.png" @click="add(index)">
						</div>				
					</div>
				</div>
			</div>
		</div>
		<div class="xthr" v-else>
			<div class="xthr1" ><span>优惠</span>优惠才是王道</div>
			<div class="xthr2" v-for="(item,index) in list" >
				<div class="xthr4">
					<img :src="item.imgurl" >
				</div>
				<div class="xthr3">
				
					<div class="xthr33">{{item.name}}</div>
					<div class="xthr31"><li>月售{{item.count}}份</li><li>好评率97%</li></div>
					<div class="xthr32">
						<span>￥{{item.price}}</span>元						
			
						<div >
							<img src="../img/xq5.png" @click="add(index)">
						</div>				
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="xfou">
		<div class="xfou1">			
				 <img src="../img/购物车1.png">	
				 <span :class="{xfo11:this.count !==0}">{{this.count}}</span>		
		</div>
		<div class="xfou2">
			<p class="xfou21">￥0</p>
			<p>配送费￥4</p>
		</div>
		<div class="xfou3">20元起送</div>	
	</div>
</div>
</template>

<script>
import Navfooter from './Navfooter';
export default {
  name: 'xiangqing',
  data () {
    return {
      list:[],
      currentIndex:0,
      currentIndex1:100,
      count:0
      // flag:false,
    }
  },
  methods:{
    getData: function(){
      this.$http.get('../../static/data/test1.json').then(response => {
        // console.log(response.bodyText);
          // get body data
          this.list = eval(response.bodyText);


        }, response => {
          // error callback
          console.log("error");
        });
    },change(index){

    	// e.currentTarget.style.background='red';
    	this.currentIndex  = index;
    	console.log(this.currentIndex)
    	
    },
    add(index){
    	this.currentIndex1=index;
    	console.log(this.currentIndex1)
    	let cont=0;
    	cont=this.count+1; 
    	this.count=cont
     	console.log(this.count)
    }
},
mounted () {
	this.getData();
}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$ui-width: 719px;
@function sa($px){
  @return $px/$ui-width*10rem;
}
@keyframes myfirst
	{
	from {background:red;right:0.45rem;
		bottom:0.45rem;}
	to {background:yellow;left:0px;bottom:0.45rem;
	}
	}
ul,li{
	list-style: none;
}  
.xhead{
	width:100%;
	height:sa(260px);
	background:url(../img/xq1.jpeg);
	display:flex;
	flex-direction: column;
	.xhe1{
		height:sa(71px);
		font-size:0.78rem;
		color:white;
		line-height:sa(71px);
		margin-left:sa(20px);
		}
		.xhe2{
			height:sa(129.8px);
			display:flex;
			flex-direction: row;
			.xhe2l img{
					width:sa(127px);
					height:sa(127px);
					margin:0 sa(20px);	
					}
			.xhe2r{
			  width:sa(590px);
			height:sa(127px);
			color:white;
			display:flex;
			flex-direction: column;
			h2{
				height:sa(35px);
				font-size:sa(35px);
			}
			.xher1{
				height:sa(50px);
				width:sa(570px);
				flex-direction: row;
				line-height: sa(50px);
				.xher2{
					margin-left:sa(170px);
					font-size:sa(30px);
				}
			}

			
		}
	}
	.xhe4{
				color:white;
				height:sa(39px);
				width:sa(700px);
				margin-left:sa(10px);
				margin-top:sa(10px);
				display:flex;
				flex-direction: row;
				justify-content: space-between;
				span{
					width:sa(10px);
					height:sa(10px);
					background:green;
					margin-right:sa(5px);
				}
			}
}
.xsec{
	height:sa(91px);
	width:100%;
	display:flex;
	background:white;

	li{
		display:flex;
		flex:1;
		justify-content: center;
		align-items: center;
		color:grey;
		font-size:sa(30px);
		a{
			color:blue;
			border-bottom: 1px solid blue;
			padding:sa(10px);
		}
	}
}
.xthi{
	height:sa(830px);
	width:100%;
	display:flex;
	.xthl{
		height:sa(830px);
		width:sa(170px);
		overflow-y: auto;
		display:flex;
		flex-direction: column;
		font-size:sa(24px);
	div{
				padding:sa(35px);
				padding-left:sa(40px);
		}
	.changeGround{
		background:url(../img/xq3.jpeg) no-repeat 0;
		background-color:white;
	}
	}
	.xthr{
		height:sa(830px);
		width:sa(580px);
		flex-direction: column;
		overflow-y: auto;
		.xthr1{
			height:sa(67px);
			line-height:sa(67px);
			color:grey;
			span{
				font-size:sa(33px);
				margin-right:sa(10px);
				color:black;
				margin-left:sa(25px);
			}
		}
		.xthr2{
			width:sa(580px);
			height:sa(220px);
			background:white;
			display:flex;
			border-bottom:2px solid grey;
			position: relative;
			.xthr4{
				width:sa(103px);
				height:sa(160px);
				img{
					width:sa(103px);
					height:sa(103px);
					margin-top:sa(20px);
					margin-left:sa(20px);
				}
			}
			.xthr3{
				flex-direction: column;
				width:sa(414px);
				height:sa(160px);
				margin-top:sa(20px);
				margin-left:sa(60px);
				.xthr33{
					font-size:sa(33px);
				}
				.xthr31{
					display:flex;
					flex-direction: row;
					margin-top:sa(10px);
					color:grey;
					li{
						margin-right:sa(20px);
					}
				}
				.xthr32{
					margin-top:sa(30px);
					font-size:sa(20px);

					span{
						color:orange;
						margin-right:sa(10px);
						font-size:sa(35px);	
					}
					img{
						position: absolute;
						bottom: sa(30px);
						right:sa(30px);
						
					}
				}
			}
		}
	}
}
.xfou{
	width:100%;
	height:sa(94px);
	background:#434343;
	display: flex;
	color:white;
	justify-content: space-between;
	.xfou1{
		height:sa(90px);
		width:sa(100px);
		border-radius: 50%;
		border-color: white;
		background:#3f3f3f;
		position: relative;
		left:sa(30px);
		bottom:sa(30px);
		border:3px solid #4c4d4d;
		img{
		height:sa(70px);
		width:sa(70px);
		position:absolute;
		bottom:sa(10px);
		left:sa(10px);
	 }
	 span{
	 	position:absolute;
	 	left:sa(-10px);
	 }
	 .xfo11{
	 	position:absolute;
	 	left:sa(35px);
	 	bottom:sa(22px);
	 	color:red;
	 	font-size:sa(50px);
	 }
	}
	.xfou2{
		width:sa(382px);
		height:sa(67px);
		margin-left: sa(70px);
		flex-direction: column;
		font-size:sa(10px);
		.xfou21{
			font-size:15px;
			margin-top:sa(10px);
		}
	}
	.xfou3{
		width:sa(210px);
		height:sa(93px);
		font-size:sa(30px);
		line-height:sa(93px);
		text-align: center;
		background:#535356;
	}
}
</style>
