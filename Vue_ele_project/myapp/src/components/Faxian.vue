<template>
  <div class="hello">
  <div class="shead">
     社区
   </div>
     <div class="ssec">
       <div class="ssec1" v-for="item in slist">
          <div class="ssec1t">
            <img :src="item.simgurl">
            <div class="ssec1tr">
              <h3>{{item.sname}}</h3>
              <p>昨日：499</p>
            </div>
          </div>
          <p>{{item.stext}}</p>       
       </div>
       <div class="sthir"></div>
        <div id = "toutiao">
          <div class="banzhu">路边的野花不要踩 <span class="quan">版主</span> <span class="lf"> 美食天地</span></div>
          <div class="news" >
            <h2>【今日头条】 芝麻南瓜饼</h2>
            <p class="hanzi">香甜软酥的芝麻南瓜饼好吃易做，一出锅，热乎乎香香甜甜的，好吃的忍不住吃了一块又一块，折友们快来做自己喜欢吃的消电点心。</p>
            <img src = "../img/12.png" class="datu"/>
            <p class="hanzi1">赞：<img class ="img1" src="../img/font/赞.png" /></p>
            <div>
              <p class="hanzi3"><img class ="img1"  src="../img/font/时间.png"/>14分钟前</p>
              <span class="s1"><img  class ="img1" src="../img/font/访问.png" />61</span>
              <span class="s1"><img class ="img1"  src="../img/font/访问.png" />81</span>
              <span class="s1"> <img class ="img1" src="../img/font/消息.png"/> 861</span>
            </div>
          </div>
          <div class="news" >
            <h2>【今日头条】 水晶虾饺</h2>
            <p class="hanzi">这不但是一道可口的美食，也许你不知道的是这更是一道具备补肾养血、润燥和美容养肤功效的养生食谱</p>
            <img src = "http://img.zuofan.cn/thumb/f/51/7f/517f8a13829e3dd1f71f8eac183372cc,c_fill,h_240,w_360.jpg" class="datu"/>
            <p class="hanzi1">赞：<img class ="img1" src="../img/font/赞.png" /></p>
            <div>
              <p class="hanzi3"><img class ="img1"  src="../img/font/时间.png"/>14分钟前</p>
              <span class="s1"><img  class ="img1" src="../img/font/访问.png" />61</span>
              <span class="s1"><img class ="img1"  src="../img/font/访问.png" />81</span>
              <span class="s1"> <img class ="img1" src="../img/font/消息.png"/> 861</span>
            </div>
          </div>
          <div class="news" >
            <h2>【今日头条】 培根面条卷</h2>
            <p class="hanzi">因为培根是咸咸的，不用再放盐了。直接磨点黑椒碎上去就很好吃了.</p>
            <img src = "http://img.zuofan.cn/thumb/f/6f/df/6fdf644a310579501c55b80cdeacfbab,c_fill,h_240,w_360.jpg" class="datu"/>
            <p class="hanzi1">赞：<img class ="img1" src="../img/font/赞.png" /></p>
            <div>
              <p class="hanzi3"><img class ="img1"  src="../img/font/时间.png"/>14分钟前</p>
              <span class="s1"><img  class ="img1" src="../img/font/访问.png" />61</span>
              <span class="s1"><img class ="img1"  src="../img/font/访问.png" />81</span>
              <span class="s1"> <img class ="img1" src="../img/font/消息.png"/> 861</span>
            </div>
          </div>
          <div class="news" >
            <h2>【今日头条】 泡椒春笋</h2>
            <p class="hanzi">泡椒里本身有盐，而且有咸味;所以盐不用加过多。这也和你买的泡椒咸度有关，可根据泡椒咸度自行调整。</p>
            <img src = "http://img.zuofan.cn/thumb/f/e5/18/e51808b760f0270a910b54c68b717e0d,c_fill,h_240,w_360.jpg" class="datu"/>
            <p class="hanzi1">赞：<img class ="img1" src="../img/font/赞.png" /></p>
            <div>
              <p class="hanzi3"><img class ="img1"  src="../img/font/时间.png"/>14分钟前</p>
              <span class="s1"><img  class ="img1" src="../img/font/访问.png" />61</span>
              <span class="s1"><img class ="img1"  src="../img/font/访问.png" />81</span>
              <span class="s1"> <img class ="img1" src="../img/font/消息.png"/> 861</span>
            </div>
          </div>
          <div class="news" >
            <h2>【今日头条】 铁板鱿鱼</h2>
            <p class="hanzi">这道美食不但美味，还具备补中益气、滋养脾胃和化痰息风的养生功效。这道满满都是爱的美食不但犒劳了家人的胃，还带给全家人健康。</p>
            <img src = "http://img.zuofan.cn/thumb/f/c5/88/c5889ccff178528ab5af320323b9afb3,c_fill,h_240,w_360.jpg" class="datu"/>
            <p class="hanzi1">赞：<img class ="img1" src="../img/font/赞.png" /></p>
            <div>
              <p class="hanzi3"><img class ="img1"  src="../img/font/时间.png"/>14分钟前</p>
              <span class="s1"><img  class ="img1" src="../img/font/访问.png" />61</span>
              <span class="s1"><img class ="img1"  src="../img/font/访问.png" />81</span>
              <span class="s1"> <img class ="img1" src="../img/font/消息.png"/> 861</span>
            </div>
          </div>
          <div class="news" >
            <h2>【今日头条】 猪肉铺</h2>
            <p class="hanzi">这道蜜汁猪肉脯具备镇静、健胃和消炎的养生功效，是一道既美味也健康的美食。</p>
            <img src = "http://img.zuofan.cn/thumb/f/d1/00/d100f79e85184e01db783f18ee08f082,c_fill,h_240,w_360.jpg" class="datu"/>
            <p class="hanzi1">赞：<img class ="img1" src="../img/font/赞.png" /></p>
            <div>
              <p class="hanzi3"><img class ="img1"  src="../img/font/时间.png"/>14分钟前</p>
              <span class="s1"><img  class ="img1" src="../img/font/访问.png" />61</span>
              <span class="s1"><img class ="img1"  src="../img/font/访问.png" />81</span>
              <span class="s1"> <img class ="img1" src="../img/font/消息.png"/> 861</span>
            </div>
          </div>
        </div>
     </div>
<Navfooter></Navfooter>
  </div>
</template>

<script>
import Navfooter from './Navfooter';

export default {
  name: 'faxian',
  data () {
    return {
      slist:[],
      ball:[
        {
          show:false
        },
      ]
    }
  },
  methods:{
        getData: function(){
      this.$http.get('/h51701/apii/Shequ/info').then(response => {
        console.log(response.bodyText);
          // get body data
          // this.slist = response.bodyText;
           var data = JSON.parse(response.bodyText);
           this.slist=data.goods_info

        }, response => {
          // error callback
          console.log("error");
        });
    }
  },
   components: {
    Navfooter
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
.shead{
height:sa(70px);
background:red;
color:white;
font-size:sa(35px);
text-align: center;
line-height:sa(70px);
}
.ssec{
  height:sa(1100px);
  overflow-y: auto;
  background:grey;
  .ssec1{
    width:sa(345px);
    height:sa(200px);
    background:white;
    display:inline-block;
    margin-left:sa(6px);
    margin-top:sa(10px);
    border-radius: sa(10px);
    .ssec1t{
      height:sa(160px);
     display:flex;
     flex-direction: row;
     color:grey;
     .ssec1tr{
        height:sa(100px);
        width:sa(200px);
        margin-left:sa(20px);
          margin-top:sa(25px);
          h3{
            margin-top:sa(5px);
            font-size:15px;
          }
          p{
            color:orange;
            margin-top:sa(20px);
          }
     }
        img{
          width:sa(100px);
          height:sa(100px);
          margin-left:sa(20px);
          margin-top:sa(25px);
        }

    }
   
  }
 .sthir{
    margin-top:sa(20px);
      height:sa(140px);
      background:url(../img/slogo.png) no-repeat;
      background-size: 100%;
    }
    #toutiao{width:9.6rem;padding:0.2rem;background:white;
  .banzhu{height:1rem;line-height:1rem;width:8.5rem;background:#0ff;padding-left:1rem;
    .quan{width:0.7rem;padding:0 0.1rem;height:0.5rem;border-radius: 5px;border: 1px solid #f00;}
    .lf{float:right;padding-right:0.1rem;}
  }
  .news{height:10.6rem;width:9.6rem;margin-top:sa(10px);border-bottom:1px solid grey;
    h2{height:1rem;line-height:1rem;padding-left:1rem;font-size:0.4rem;}
    .hanzi{font-size:0.4rem;width:9rem;margin:0 auto;}
    .datu{width:6rem;height:6rem;padding-left:0.2rem;}
    .hanzi1{height:1rem;width:9.6rem;padding-left:0.3rem;line-height:1rem;}
    .hanzi3{hieght:1rem;line-height:1rem;width:2rem;display: inline-block;}
    .s1{width:1.5rem;float:right;height:1rem;line-height:1rem;overflow: hidden;}
    .img1{width:0.5rem;margin-right:0.1rem;height:0.5rem;display:inline-block;line-height:1rem;margin-top:0.1rem}
  }
}

}



</style>