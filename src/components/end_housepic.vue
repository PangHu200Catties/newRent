<template>
  <div>
    <img :src="house.pic1">
    <img :src="house.pic2">
    <img :src="house.pic3">
    <img :src="house.pic4">
  </div>
</template>
<script>
  import axios from "axios"
  export default{
      data(){
          return {
              house:{}
          }
      },
    mounted:function () {
      var hid=this.$route.params.hid;
      var url='api/endfindpicbyhid/'+hid
      axios.get(url).then(res=>{
          this.house=res.data
      })
    }
  }
</script>
