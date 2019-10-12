<template>
  <div>
    <h1><span>{{hasfaf</span></h1>
  </div>
</template>
<script>
  import axios from 'axios'
  import ElForm from "../../node_modules/element-ui/packages/form/src/form";
  export default{
    components: {ElForm},


    data(){
      return {
        active:0,
        src: 'https://pic1.58cdn.com.cn/nowater/58zfjx/qrcode/house/201909/n_v261eaf46b1b4841d6a1a5fde172cb9918.jpg?w=240',
        user: {
          uid: '',
          username: '',
          upic: '',
          realname: '',
          tel: '',
          nickname: '',
        },
        house: {
          hid: '',
          uid: '',
          htitle: '',
          address: '',
          pic1: '',
          pic2: '',
          pic3: '',
          pic4: '',
          price: '',
          type: '',
          lever: '',
          area: '',
          request: '',

        },
        srcList: [],
        sizeList: ["large"]
      }

    },
    mounted(){
      var htitle=this.$route.params.htitle
      var price=this.$route.params.price
      alert(price+htitle)
    },
  /*  methods:{
      jin1:function(index) {
        this.active = index;
      },
      pay:function (htitle,price) {
        this.$router.push({path:'/updateUser/'+userId})
      }
    },



    mounted(){
      var hid = this.$route.params.hid
      var url = "api/findByHid"
      axios.post(url, {hid: hid}).then(res => {
        if (res.data != null) {
          this.house = res.data

          this.srcList.push(this.house.pic1);
          this.srcList.push(this.house.pic2);
          this.srcList.push(this.house.pic3);
          this.srcList.push(this.house.pic4);




          var uid = this.house.uid
          var url = "api/findByUid"
          axios.post(url, {uid: uid}).then(res => {
            if (res.data != null) {
              this.user = res.data
              this.circleUrl.push(this.user.upic)
            }
          })
        }

      })
    },
*/

  }
</script>
