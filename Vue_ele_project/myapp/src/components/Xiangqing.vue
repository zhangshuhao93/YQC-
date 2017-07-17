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
				
					<img :src="item.img" @click="details(index)">
						
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
		<div class="xthr" v-if="currentIndex==1">
			<div class="xthr1" ><span>优惠</span>优惠才是王道</div>
			<div class="xthr2" v-for="(item,index) in name" >
				<div class="xthr4" @click="details(index)">
					<img :src="item.img"  >
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
		<div class="xthr" v-if="currentIndex==2">
			<div class="xthr1" ><span>组合套餐</span>搭配才是王道</div>
			<div class="xthr2" v-for="(item,index) in name" >
				<div class="xthr4">
					<img :src="item.img" >
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
		<div class="xthr" v-if="currentIndex==3">
			<div class="xthr1" ><span>组合套餐</span>搭配才是王道</div>
			<div class="xthr2" v-for="(item,index) in name" >
				<div class="xthr4">
					<img :src="item.img" >
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
		<div class="xthr" v-if="currentIndex==4">
			<div class="xthr1" ><span>饮品</span>夏日够酷爽</div>
			<div class="xthr2" v-for="(item,index) in name" >
				<div class="xthr4">
					<img :src="item.img" >
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
		<div class="xfou1" @click="show()">			
				 <img src="../img/购物车1.png">	
				 <span :class="{xfo11:this.counts !==0}">{{this.counts}}</span>		
		</div>
		<div class="xfou2">
			<p class="xfou21">￥{{this.price}}</p>
			<p>配送费￥4</p>
		</div>
		<div class="xfou3" @click="fs()">20元起送</div>	
	</div>
	
	<div class="xfif" v-if="lg==true" >
		<div class="xfif1" v-for="(item,index) in ccar">
			<div>{{item.name}}</div><div  class="xfif2"><span @click="jian(ccar, index, item)" >-</span><span class="s1">{{item.cnt123}}份</span><span @click="jia(ccar, index, item)">+</span></div>
		</div>
		<img src="../img/font/差号.png" class="ch" @click="cc()">
	</div>
</div>
</template>

<script>
import Navfooter from './Navfooter';
import Vue from 'Vue';
export default {
  name: 'xiangqing',
  data () {
    return {
      list:[],
      currentIndex:0,
      currentIndex1:100,
      counts:0,
      ccar:[],
      lg:false,
      price:0,
      name:[]
    }
  },
  methods:{
  	details:function(index){
		console.log(this.list[index].img);
		this.$http.get('/h51701/apii/Goods/detail',{
			params:{img:this.list[index].img}
		}).then(response => {
          
       console.log(response.body.goods_info[0].id);
       location.hash = "/details?"+response.body.goods_info[0].id;
       
       this.list = response.body.goods_info;      
		}, response => {
       // error callback
        console.log("error");
      });
  	},
    getData: function(){
      this.$http.get('/h51701/apii/Goods/info').then(response => {
          
          var data = JSON.parse(response.bodyText);
          
          this.list = data.goods_info;
        }, response => {
          // error callback
          console.log("error");
        });
    },
    change(index){	
    	this.currentIndex  = index;
    	console.log(this.currentIndex)
    	this.shualeft();
    	
    },
    fs(){
    	this.$http.post('/h51701/apii/Carts/add',{
    		count:this.counts
    	}).then(response => {
          	alert("成功")
	          var data = JSON.parse(response.bodyText);
	         
	          this.name = data.goods_info;
	        }, response => {
	          // error callback
	          console.log("error");
	        });
    },
    shualeft(){
    	if(this.currentIndex==1){
    		this.$http.get('/h51701/apii/Goods/info1').then(response => {
          
	          var data = JSON.parse(response.bodyText);
	         
	          this.name = data.goods_info;
	        }, response => {
	          // error callback
	          console.log("error");
	        });
    	}
    	if(this.currentIndex==2){
    			this.$http.get('/h51701/apii/Goods/info2').then(response => {
          
	          var data = JSON.parse(response.bodyText);
	          console.log(data)
	          this.name = data.goods_info;
	        
	        }, response => {
	          // error callback
	          console.log("error");
	        });
    	}
    	if(this.currentIndex==3){
    			this.$http.get('/h51701/apii/Goods/info3').then(response => {
          
	          var data = JSON.parse(response.bodyText);
	          console.log(data)
	          this.name = data.goods_info;
	        
	        }, response => {
	          // error callback
	          console.log("error");
	        });
    	}
    	if(this.currentIndex==4){
    			this.$http.get('/h51701/apii/Goods/info4').then(response => {
          
	          var data = JSON.parse(response.bodyText);
	          console.log(data)
	          this.name = data.goods_info;
	        
	        }, response => {
	          // error callback
	          console.log("error");
	        });
    	}
    },
    add(index){ 
    	
       	this.currentIndex1=index;
    	
    	let cont=0;
    	cont=this.counts+1; 
    	this.counts=cont
    	var existFlag = false;
    	var existIndex = -1;
    	// alert(this.ccounts+1)
    	for(var i =0;i<this.ccar.length;i++) {
    		if(this.ccar[i].name == this.list[index].name) {
    			existFlag = true;
    			existIndex = i;
    			break;
    		}
    	}
    	if(existFlag) {
    		this.ccar[existIndex].cnt123 += 1;
    	} else {
    		this.list[index].cnt123 = 1;
	     	this.ccar.push(this.list[index])
    	}
    	this.price+=this.list[this.currentIndex1].price
    	
    },
    show(){
    	this.lg=true;
    },
    cc(){
    	   this.lg=false;
    },
    jian(ccar, index, item){

    	item.cnt123 -= 1;
    	if(item.cnt123=0){
    		item.cnt123=0
    		this.counts=0
    	}
    	this.counts-=1
   		this.price-=this.ccar[index].price
    	
    	Vue.set(ccar, index, item);
    },
    jia(ccar, index, item){
    	item.cnt123 += 1;
    	this.counts+=1
    	Vue.set(ccar, index, item);
    },

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
		a{
			color:black;
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
	 	z-index: 40;
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

.xfif{
	width:100%;
	height:sa(200px);
	background:grey;
	position: absolute;
	bottom:sa(94px);
	overflow-y: auto;
	.xfif1{	margin-left:sa(40px);
		height:sa(30px);
		z-index: 30;
		color:white;
		font-size:sa(35px);
		display:flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top:sa(30px);
		.xfif2{
			margin-right:sa(50px);
			width:sa(200px);
			height:sa(30px);
			span{
				margin-right:sa(20px);
				color:red;
			}
			.s1{
				color:white;
			}
		}
	}
	.ch{
		width:sa(40px);
		height:sa(40px);
		position:fixed;
		right:sa(20px);
		bottom:sa(240px);
		border-radius: 50%;
		border-color:red;
	}
}
</style>
