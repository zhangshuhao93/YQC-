<template>
	<div class="hello">
	<p class="p1">订单</p>
	  	<div class="Dingdan" v-if="showDingdan">
		    <div class="head"><h2>我的订单</h2><!--<a href="#">全部订单 > </a>--></div>
		    <div class="main" v-for="item in list">
		    	<div class="tou">
		    		<img :src="item.img"/>
		    		<h2>{{item.b_name}}<span style="color:#007AFF">订单已生成</span></h2>
		    		<p class="p2">2017-06-06 18:43</p>
		    	</div>
		    	<div class="di">
		    		<p class="p3">【抢】凉皮 + 豆沙饼 + 烤肠</p>
		    		<p class="p4">￥ {{item.price}}</p>
		    	</div>	
		    </div>

		    <div class="der">查看更多 >  </div>
		    <div class="tab">
		    	<div class="maishou">
		    		<h2 class="mai" @click="fn1"> 最近买过</h2>
		    		<h2 class="shou" @click="fn2">最近收藏</h2>	
		    	</div>
		    	<div class="content1" v-if="willShow" v-for="item in mai">
						<img src="../img/ctu2.jpg" />
			    		<h2>{{item.mName}}</h2>
			    		<p class="pp1">满35减12 ， 满58 减20</p>
			    		<p class="pp2">买过{{item.num}}次</p>
		 
		    		
		    	</div>
		    	<div class="content2" v-if="willhide">
		    		<img src="../img/ctu2.jpg" />
		    		<h2>嘉御贡茶 (软景中心店)</h2>
		    		<p class="pp1">满35减12 ， 满58 减20</p>
		    		<p class="pp2">买过一次</p>
		    	</div>
		    
		    </div>
		    
	    </div>
	    <div class="noDingdan" v-else>
			<img src="../img/Dingdan.gif" />
			<h3>近三个月内没有订单</h3>
			<p>仅显示一年的外卖订单</p>
		</div>
    <Navfooter></Navfooter>
  </div>
   
</template>

<script>
import Navfooter from './Navfooter';
import {getCookie} from '../../static/js/getCookie.js';
export default {
  name: 'dingdan',
  data () {
    return {
    	nodingdan:false,
    	showDingdan:false,
    	willhide:false,
      willShow:true,
      dingData:'',
      list : [],
      mai:　[],
      user: '000032',
      username:0
    }
  },
   components: {
    Navfooter
   },
   methods:{
        fn1:function(){
          if(this.willShow==false){
          	console.log(this.willShow);
            this.willShow=true;
            this.willhide=false;
          }else{
          	console.log(this.willShow);
            this.willShow=true
          }
        },
        fn2:function(){
          if(this.willhide==false){
          	console.log(this.willShow);
            this.willhide=true;
            this.willShow=false;
          }else{
          	console.log(this.willShow);
            this.willShow=false
            console.log('this.willShow')
          }
        },
        created:function(){
    		this.showDingdan=true;
			console.log(getCookie("username"));
			this.username=getCookie("username");
          this.$http.get('/h51701/apii/Goods/queryshop',{
          		params:{username:this.username}
          	}).then(response => {
          	  console.log(response);
          	  this.list = response.body.goods;
          },function(response){
          	console.log("error");
          })
        },
        creat:function(){
        	
		this.$http.get('/h51701/apii/Goods/queryshop',{
          	params:{username:this.username}
          	}).then(response => {
          	  console.log(response);
          	  this.list = response.body.goods;
          },function(response){
          	console.log("error");
          })
		},
    },
    mounted:function(){
    	if(getCookie("username")){
    		console.log("11111112222++++++" + getCookie("username"));
    		this.created();
    	}
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
.p1{position:fixed;top:0;z-index:999;width:100%;font-size:px2rem(45px); padding-left:px2rem(44px);color:#fff;height:px2rem(110px);line-height:px2rem(110px);background: #e58585;}
.noDingdan{
	img{width:6rem;margin:3rem auto;}
	h3{font-size:0.5rem;width:10rem;text-align: center;}
	p{font-size:0.4rem;width:10rem;text-align: center;margin-top:0.1rem;}
}
.Dingdan{flex:1;
	
	.head{margin-top:px2rem(110px);height:px2rem(120px);font-size:px2rem(20px);line-height:px2rem(120px);
				padding-left:px2rem(44px);position:relative;
				a{color:#0096FF;display: block;position:absolute;top:0;right:px2rem(44px);}
	}
	.main{hieght:px2rem(300px);
			.tou{height:px2rem(124px);position:relative;
					img{width:px2rem(144px);height:px2rem(124px);padding-left:px2rem(44px);
					}
					h2{height:px2rem(71px);position:absolute;top:0px;line-height:px2rem(71px);
						left:px2rem(178px);width:px2rem(531px);font-size:px2rem(30px);
						span{position:absolute;right:px2rem(44px);font-size:px2rem(24px);}
					}
					p{height:px2rem(54px);line-height:px2rem(54px);position:absolute;
						left:px2rem(178px);top:px2rem(71px);}
			}
			.di{height:px2rem(146px);border-bottom:1px dotted #ccc;overflow: hidden;
				.p3{font-size:px2rem(26px);height:px2rem(44px);margin-top:px2rem(30px);margin-left:px2rem(178px);}
				.p4{font-size:px2rem(26px);color:#111;height:px2rem(44px);margin-left:px2rem(178px);}
			}
			
	}
	.der{font-size:px2rem(32px);border-bottom:px2rem(10px) solid #ccc; height:px2rem(100px);line-height:px2rem(100px);text-align:center;}
	
	.tab{
		.maishou{position:relative;height:px2rem(110px);line-height:px2rem(110px);padding-left:px2rem(44px);
			.mai{height:px2rem(110px);line-height:px2rem(110px);width:px2rem(180px);
					font-size:px2rem(32px);text-align:center;font-weight:100;position:absolute;
					left:0;
			}
			.shou{height:px2rem(110px);line-height:px2rem(110px);position:absolute;
					font-size:px2rem(32px);text-align:center;top:0;left:px2rem(220px);font-weight:100;
			}
		}
		.content1{background:#fff;margin-top:px2rem(30px);position:relative;height:px2rem(220px);border-bottom:1px solid #ccc;
				img{width:px2rem(160px);height:px2rem(160px);margin-left: px2rem(44px);}
				h2{height:px2rem(50px);line-height:px2rem(50px);font-size:px2rem(35px);
						position:absolute;left:px2rem(220px);top:0;
				}
				.pp1{height:px2rem(70px);line-height:px2rem(70px);font-size:px2rem(26px);
						font-weight:100;position: absolute;top:px2rem(55px);left:px2rem(240px);
				}
				.pp2{height:px2rem(70px);line-height:px2rem(70px);font-size:px2rem(26px);
						font-weight:100;position: absolute;top:px2rem(120px);left:px2rem(220px);}
		}
		.content2{margin-top:px2rem(30px);position:relative;height:px2rem(220px);border-bottom:1px solid #ccc;
			img{width:px2rem(160px);height:px2rem(160px);margin-left: px2rem(44px);}
			h2{height:px2rem(50px);line-height:px2rem(50px);font-size:px2rem(35px);
					position:absolute;left:px2rem(220px);top:0;
			}
			.pp1{height:px2rem(70px);line-height:px2rem(70px);font-size:px2rem(26px);
					font-weight:100;position: absolute;top:px2rem(55px);left:px2rem(240px);
			}
			.pp2{height:px2rem(70px);line-height:px2rem(70px);font-size:px2rem(26px);
					font-weight:100;position: absolute;top:px2rem(120px);left:px2rem(220px);}
		}
	}
	
}
}
h1{
  background:red;
}
</style>
