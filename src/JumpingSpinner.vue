<template>
    <div>
        <div :style="spinnerContainer()" class="spinner-container">
            <div :style="spinner()" class="spinner">
                <img
                    class="image jumping"
                    :style="imageStyles()"
                    :src="src">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "JumpingSpinner",
  props: {
    src: {
      type: String,
      default: require(`@/assets/logo.png`)
    },
    top:{
        type:String,
        default: '50%'
    },
    overlay:{
        type:String,
        default:'rgba(255, 255, 255, 0.0)'
    },
    opacity:{
        type:Number,
        default: 0.8,
    },
    width:{
        type:String,
        default:'50px'
    },
  },
  methods:{
      spinner(){
          return{
            top:this.top,
          }
      },
      spinnerContainer(){
          return{
              opacity:this.opacity,
              backgroundColor:this.overlay
          }
      },
      imageStyles(){
          return{
              width:this.width,
          }
      }
  },
  mounted() {
  }
};
</script>

<style lang="css" scoped>
    .spinner-container{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 998;
    }
    .spinner{
        position:absolute;
        opacity:1;
        left:50%;
        z-index: 999;
        transform: translate(-50%, -50%);
    }
    .jumping {
        -webkit-animation: mover 0.7s infinite  alternate;
        animation: mover 0.7s infinite  alternate;
    }
    @-webkit-keyframes mover {
        0% { transform: translateY(0); }
        100% { transform: translateY(-15px); }
    }
    @keyframes mover {
        0% { transform: translateY(0); }
        100% { transform: translateY(-15px); }
    }
</style>

