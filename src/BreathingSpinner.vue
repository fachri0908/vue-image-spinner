<template>
    <div>
        <div :style="spinnerContainer()" class="spinner-container">
            <div :style="spinner()" class="spinner">
                <img
                    class="image breathing"
                    :style="imageStyles()"
                    :src="require(`${src}`)">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "BreathingSpinner",
  props: {
    src: {
      type: String,
      default: '@/assets/logo.png'
    },
    top:{
        type:String,
        default: '50%'
    },
    overlay:{
        type:String,
        default:'rgba(255, 255, 255, 0.0)'
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

    .breathing{
        -webkit-animation: breathing 1s ease-out infinite normal;
        animation: breathing 1s ease-out infinite normal;
        -webkit-font-smoothing: antialiased;
    }


    @-webkit-keyframes breathing {
    0% {
        -webkit-transform: scale(0.8);
        transform: scale(0.8);
    }

    25% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    60% {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
    }

    100% {
        -webkit-transform: scale(0.83);
        transform: scale(0.83);
    }
    }

    @keyframes breathing {
    0% {
        -webkit-transform: scale(0.8);
        -ms-transform: scale(0.8);
        transform: scale(0.8);
    }

    25% {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
    }

    60% {
        -webkit-transform: scale(0.9);
        -ms-transform: scale(0.9);
        transform: scale(0.9);
    }

    100% {
        -webkit-transform: scale(0.83);
        -ms-transform: scale(0.83);
        transform: scale(0.83);
    }
    }

</style>

