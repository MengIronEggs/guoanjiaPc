<template>
   <div class="noData">

       <div class="no_img"></div>
       <div class="msg">
           <p class="CH">
               暂无信息
           </p>
           <p class="EH">
               No information for the time being
           </p>
       </div>
   </div>

</template>

<script>
   export default {
       data() {
           return {

           }

       },
       components: {

       }
   }
</script>

<style scoped lang="less">
    .noData{
        height: 100%;
        width: 100%;
        padding-top:1rem;

        .no_img{
            width: 100%;
            height: 46%;
            margin: 0 auto;
            background: url("https://img.guoanfamily.com/rent/newHouseImg/noData.png") top center no-repeat/50%;
        }
        .msg{
            .CH{
                text-align: center;
                font-size: .3rem;

            }
            .EH{
                text-align: center;
                font-size: .16rem;
                color: #999;
            }
        }
    //
    }

</style>
