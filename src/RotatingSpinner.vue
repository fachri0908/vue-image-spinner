<template>
    <div>
        <div :style="spinnerContainer()" class="spinner-container">
            <div :style="spinner()" class="spinner">
                <img
                    class="image rotating"
                    :style="imageStyles()"
                    :src="require(`${src}`)">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "RotatingSpinner",
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

    .spinner {
      animation: spinner-container-animation 1200ms infinite;
    }

    @-webkit-keyframes rotating /* Safari and Chrome */ {
    from {
            -webkit-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @keyframes rotating {
        from {
            -ms-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -ms-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    .rotating {
        -webkit-animation: rotating 1.2s infinite;
        -moz-animation: rotating 1.2s infinite;
        -ms-animation: rotating 1.2s infinite;
        -o-animation: rotating 1.2s infinite;
        animation: rotating 1.2s infinite;
    }
</style>

