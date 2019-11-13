<template>
    <div>
        <div :style="spinnerContainer()" class="spinner-container">
            <div :style="spinner()" class="spinner">
                <img
                    class="image scale-up"
                    :style="imageStyles()"
                    :src="src">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "ScaleUpSpinner",
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
    .scale-up {
        -webkit-animation: rotate-scale-up 1s both infinite;
	    animation: rotate-scale-up 1s both infinite;
    }
    @-webkit-keyframes rotate-scale-up {
    0% {
        -webkit-transform: scale(1) rotateZ(0);
                transform: scale(1) rotateZ(0);
    }
    50% {
        -webkit-transform: scale(2) rotateZ(180deg);
                transform: scale(2) rotateZ(180deg);
    }
    100% {
        -webkit-transform: scale(1) rotateZ(360deg);
                transform: scale(1) rotateZ(360deg);
    }
    }
    @keyframes rotate-scale-up {
    0% {
        -webkit-transform: scale(1) rotateZ(0);
                transform: scale(1) rotateZ(0);
    }
    50% {
        -webkit-transform: scale(2) rotateZ(180deg);
                transform: scale(2) rotateZ(180deg);
    }
    100% {
        -webkit-transform: scale(1) rotateZ(360deg);
                transform: scale(1) rotateZ(360deg);
    }
}
</style>

