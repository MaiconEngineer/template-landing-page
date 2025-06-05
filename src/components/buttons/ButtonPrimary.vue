<script lang="ts" >
import { defineComponent } from 'vue';
import IconArrowTop from '../icons/iconArrowTop.vue';

export default defineComponent({
  props: {
    className: {
      type: String,
      default: ''
    }
  },
  components: {
    IconArrowTop
  },
  data(){

  },
  setup(){

  }
})
</script>
<template>
  <div :class="['button-primary',className]" >
     <div class="effect-overlap" ></div>
     <button type="button" ><span>Quero fazer parte</span><IconArrowTop class="icon"/></button>
  </div>
</template>

<style lang="scss" scoped>
@use '../../assets/colors' as *;

.button-primary {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .effect-overlap{
    position: absolute;
    align-self: center;
    align-content: center;
    width: 210px;
    height: 40px;
    background-color: $vt-c-red;
    // mix-blend-mode: ;
    filter: blur(24px);
    z-index: 1;

  }
  button {
    min-height: 40px;
    padding: 10px;
    padding-inline: 24px;
    background-image: linear-gradient(to bottom, $vt-c-red 20%, #AA010E  80%);
    text-align: center;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    border-style: none;

    text-transform: uppercase;

    color: white;

    box-shadow:
    0 0 0 8px rgba(255, 4, 4, 0.18),
    0 0 0 16px rgba(220, 9, 20, 0.12),
    0 0 0 16px rgba(229, 9, 20, 0.1);

    span{
      margin-right: 24px;
      z-index: 2;
      font-family: 'Open Sans';
      font-weight: bold;
    }

    .icon {
      z-index: 2;
    }
  }
}
</style>
