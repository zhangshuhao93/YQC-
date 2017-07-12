<template>
  <div class="hello">
    <div id="header">
        <div class="top">
            <div class="l addrImg"><i class="iconfont">&#xe61b;</i></div>
            <div class="l" id="addrText">正在得到地址</div>
            <div class="r cloud">
                <img src="../img/1.png"/>
            </div>
            <div class="pDiv">
                <p>16°</p>
                <p>阴</p>
            </div>
        </div>
        <a href="#/search"><input type="text" class="zhong" placeholder="搜索商家" onClick={this.search}/></a>

        <div class="swiper-container" id="d1">
            <div class="swiper-wrapper">
                <div class="swiper-slide">麦当劳</div>
                <div class="swiper-slide">鸭血粉丝</div>
                <div class="swiper-slide">贡茶</div>
                <div class="swiper-slide">0元旺仔</div>
                <div class="swiper-slide">coco</div>
                <div class="swiper-slide">我的菜</div>
                <div class="swiper-slide">麻辣香锅</div>
                <div class="swiper-slide">麻辣拌</div>
                <div class="swiper-slide">冷面</div>
                <div class="swiper-slide">咖喱</div>
            </div>
        </div>
    </div>
    <div class="swiper-container" id="d2">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="divT1">
                    <img src="../img/1.jpeg"/>
                    <span>美食</span>
                </div>
                <div class="divT1">
                    <img src="../img/3.jpeg"/>
                    <span>甜品饮品</span>
                </div>
                <div class="divT1">
                    <img src="../img/4.jpeg"/>
                    <span>商超便利</span>
                </div>
                <div class="divT1">
                    <img src="../img/5.jpeg"/>
                    <span>果蔬生鲜</span>
                </div>
                <div class="divT1">
                    <img src="../img/6.jpeg"/>
                    <span>新店特惠</span>
                </div>
                <div class="divT1">
                    <img src="../img/7.jpeg"/>
                    <span>准时达</span>
                </div>
                <div class="divT1">
                    <img src="../img/8.jpeg"/>
                    <span>简餐</span>
                </div>
                <div class="divT1">
                    <img src="../img/9.jpeg"/>
                    <span>汉堡薯条</span>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="divT1">
                    <img src="../img/10.jpeg"/>
                    <span>包子粥店</span>
                </div>
                <div class="divT1">
                    <img src="../img/11.jpeg"/>
                    <span>鲜花蛋糕</span>
                </div>
                <div class="divT1">
                    <img src="../img/12.jpeg"/>
                    <span>麻辣烫</span>
                </div>
                <div class="divT1">
                    <img src="../img/13.jpeg"/>
                    <span>川湘菜</span>
                </div>
                <div class="divT1">
                    <img src="../img/14.jpeg"/>
                    <span>披萨意面</span>
                </div>
                <div class="divT1">
                    <img src="../img/15.jpeg"/>
                    <span>日韩料理</span>
                </div>
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </div>

    <h1 class="tit">推荐商家</h1>


          <div class="details" v-for="item in list">
            <a href="#/xiangqing"><img class="det_img" :src="'/static/img/'+item.b_img"/></a>
            <!-- <img class="det_img" src="../img/2.jpeg"/> -->
            <!-- <img class="det_img" :src="imgurl"/> -->
            <div class="det_text">
                <p class="p1">
                    <a href="javascript:;">品牌</a>
                    {{item.b_name}}
                    <span>准</span>
                    <span>票</span>
                    <span>保</span>
                </p>
                <p class="p2">
                    <img src="../img/xx.gif"/>
                    <img src="../img/xx.gif"/>
                    <img src="../img/xx.gif"/>
                    <img src="../img/xx.gif"/>
                    <img src="../img/xx.gif"/>
                    <span>4.4</span>
                    <span>月售{{item.b_more}}单</span>
                    <span class="s1_r">蜂鸟专送</span>
                    <span class="s2_r">准时达</span>
                </p>
                <p class="p3">
                    <span class="zuomianText">
                    <span class="sp">￥{{item.b_start}}起送</span>
                    <span class="sp">配送费{{item.b_cost}}4</span>
                    <span class="sp">￥{{item.b_unitprice}}/人</span></span>
                    <span class="p3_s1r">1.36km&nbsp;/&nbsp;<b>49分钟</b></span>
                </p>
            </div>
        </div>
   

  <Navfooter></Navfooter>
  </div>
</template>

<script>
 import Swiper from '../../static/swiper.min.js';
 import Navfooter from './Navfooter';
 import { Toast } from 'mint-ui';

 require('../../static/swiper.min.css');

export default {
    name: 'waimai',
    data () {
        return {
            list: [],
        }
    },
    methods: {
    showpage: function(){
      this.$http.post('/h51701/apii/user/pchaxun', {
 
      }).then(response => {
        this.list=response.body;
       
        console.log(this.list);
        // this.list=response.body
        }, response => {
          // error callback
          console.log("error!!!");
        });
    }
    },
    components: {
        Navfooter,
    },
    mounted () {
        this.showpage();
         var mySwiper = new Swiper('#d1', {
           loop: true,
           slidesPerView: 5,
         })
         var mySwiper2 = new Swiper('#d2', {
           loop: true,
            pagination: '.swiper-pagination',
            paginationClickable: true
         })

        window.onload = function(){
          var addrText = document.querySelector("#addrText");
          navigator.geolocation.getCurrentPosition(function(pos){      
            // 创建地理编码实例      
            var myGeo = new BMap.Geocoder();      
            // 根据坐标得到地址描述    
            myGeo.getLocation(new BMap.Point(116.364, 39.993), function(result){   
              if (result){      
               console.log(typeof result.address);
               addrText.innerHTML = result.address;
              }
            });
          })
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
    #tupian{height:100%}
    #header{width:100%;height:3.19889rem;background:#e58585;box-sizing:border-box;padding:0 .27816rem;
        overflow: hidden;
    margin-bottom: px2rem(20px);}
    #header .top{overflow:hidden;width:100%;height:1.3491rem;line-height:1.3491rem;font-size:.27816rem;color:#fff}
    #header .top .addrImg{margin-right:.13908rem}
    #addrText{width:4.72879rem;overflow:hidden;white-space:nowrap}
    #header .top .cloud img{width:.69541rem;display:inline-block;margin-top:0.3rem}
    #header .top .pDiv{margin-top:0.3rem;height:1.3491rem;line-height:.4497rem;float:right;display:inline-block;font-size:.22253rem}
    #header .zhong{overflow:hidden;width:100%;border:0;border-radius:.97357rem;height:.97357rem;text-align:center;float:left}
    #header #d1{width:100%;height:.90403rem}
    #d1 .swiper-wrapper{height:.90403rem;line-height: .90403rem}
    #d1 .swiper-slide{text-align: center;}
    #d2{width:100%;height:4.72879rem;overflow:hidden;background:#fff}
    #d2 .divT1{width:25%;text-align:center;font-size:0}#d2 .divT1 img{width:1.32128rem;margin:0 auto}#d2 .divT1 span{font-size:.27816rem}
    #d2 .swiper-slide{
        display:flex;
        flex-wrap: wrap;
    }
    .tit{margin-top:2%;padding-left:5%;height:.97357rem;line-height:.97357rem;font-size:.41725rem;background:#fff}.details{background:#fff;width:100%;height:2.43394rem;padding:.41725rem .27816rem;box-sizing:border-box;overflow:hidden}.details .det_img{width:20%;height:100%;float:left}.details .det_text{float:left;width:80%;height:100%;padding:.13908rem .06954rem;box-sizing:border-box}.details .det_text .p1{overflow:hidden}.details .det_text .p1 a{display:inline-block;background:yellow;border-radius:.04172rem;padding:0 .04172rem}.details .det_text .p1 span{float:right;margin-left:1%;color:#696969;border:1px solid #ccc}.details .det_text .p2 img{display:inline-block;height:.25035rem}.details .det_text .p2 .s1_r{float:right;background:#007aff;border:1px solid #007aff;border-radius:.04172rem;color:white;margin-left:1%}.details .det_text .p2 .s2_r{float:right;border:1px solid #007aff;border-radius:.04172rem;color:#007aff}.details .det_text .p3{overflow:hidden;width:100%}.details .det_text .p3 .sp{padding-right:.25035rem}.details .det_text .p3 .p3_s1r{float:right;color:#696969}.details .det_text .p3 .p3_s1r b{color:#007aff}
    .zuomianText{width: 4.0807rem; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; display: inline-block;}

</style>
