<template>
  <div class="fixed-div">
    <div class="top-half" :class="isLoading?'':'animation'">
      <div class="top-circle-container">
        <div class="top-circle">
        </div>
      </div>
      <div class="center-circle">
        <div class="mask" />
      </div>
    </div>
    <div class="bottom-half" :class="isLoading?'':'animation'">
      <div class="bottom-circle-container">
        <div class="bottom-circle"></div>
      </div>
      <div class="center-circle"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: true
    }
  },
  mounted() {
    setTimeout(() => {
      console.log(this)
      this.isLoading = false
    }, 5000)
  },
  methods: {
    log: () => console.log(this)
  }
}
</script>
<style lang="less">
@low-level-background: #fff;
@Red: #f00;
@Gray: #eef1f6;
@border-width: 4px;
@border-color: #000;
@border-style: solid;
@border: @border-width @border-style @border-color;
@center-circle-length: 100px;
@keyframes scroll {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}

@keyframes moveTop {
  0% {}
  99% {
    overflow: visible;
  }
  100% {
    height: 0;
    overflow: hidden;
  }
}

@keyframes moveBottom {
  0% {}
  100% {
    height: 0;
  }
}

// .ball {
//   width: 2*@center-circle-length;
//   height: 2*@center-circle-length;
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   margin-left: -@center-circle-length;
//   margin-top: -@center-circle-length; // animation: scroll 3s linear infinite both;
// }
.fixed-div {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 999; // background: @low-level-background;
  .top-half {
    height: 50%;
    width: 100%;
    background: @low-level-background;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    transition: all 2s linear;
    .top-circle-container {
      position: absolute;
      width: @center-circle-length;
      height: @center-circle-length/2 - @border-width/2;
      bottom: 0; // bottom: -(@center-circle-length/2)-(@border-width/2);
      left: 50%;
      transform: translateX(-50%);
      overflow: hidden;
      border-bottom: @border;
      border-bottom-width: @border-width/2;
      .top-circle {
        width: @center-circle-length;
        height: @center-circle-length;
        border-radius: 50%;
        background: @Red;
      }
    }
    .center-circle {
      position: absolute;
      width: @center-circle-length/4;
      height: @center-circle-length/4;
      border: @border;
      box-sizing: border-box;
      left: 50%;
      transform: translateX(-50%);
      bottom: -(@center-circle-length/8);
      background: @low-level-background;
      border-radius: 50%; // z-index: 1;
      .mask {
        width: 7/100 * @center-circle-length;
        height: 7/100 * @center-circle-length;
        margin-left: @center-circle-length/8 - @border-width - (7/100 * @center-circle-length/2);
        margin-top: @center-circle-length/8 - @border-width - (7/100 * @center-circle-length/2);
        box-shadow: 0 0px 2px 1px;
        border-radius: 50%;
      }
    }
    &.animation {
      animation: moveTop linear .8s both;
    }
  }
  .bottom-half {
    height: 50%;
    width: 100%;
    background: @low-level-background;
    overflow: hidden;
    transition: all 2s linear;
    position: absolute;
    bottom: 0;
    left: 0;
    .bottom-circle-container {
      top: 30px;
      position: absolute;
      width: @center-circle-length;
      height: @center-circle-length/2 - @border-width/2;
      top: 0; // bottom: -(@center-circle-length/2)-(@border-width/2);
      left: 50%;
      transform: translateX(-50%);
      overflow: hidden;
      border-top: @border;
      border-top-width: @border-width/2;
      .bottom-circle {
        width: @center-circle-length;
        height: @center-circle-length;
        border-radius: 50%;
        background: @Gray;
        margin-top: -@center-circle-length/2 - @border-width/2;
      }
    }
    .center-circle {
      position: absolute;
      width: @center-circle-length/4;
      height: @center-circle-length/4;
      border: @border;
      box-sizing: border-box;
      left: 50%;
      transform: translateX(-50%);
      top: -(@center-circle-length/8);
      background: @low-level-background;
      border-radius: 50%; // z-index: 1;
    }
    &.animation {
      animation: moveBottom linear .8s both;
    }
  }
}
</style>
