<script lang="ts">
import IconPhone from '../icons/IconPhone.vue';


export default {
  components: {
    IconPhone
  },
  data() {

  },
  mounted(){

  }
}
</script>

<template>
  <button class="button-tertiary g-tb-red-to-redblack f-w-primary m-t-34" type="button"><IconPhone/> Falar com Suporte</button>
</template>

<style lang="scss">
@use '../../assets/colors' as *;

  .button-tertiary{
    padding: 13px;
    font-family: 'Open Sans';
    font-size: 12;
    border-radius: 5px;
    font-weight: 500;
    border-style: none;
    overflow: hidden;
    display: inline-flex;
    justify-content: center;
    position: relative;

    width: 100%;

    svg{
      position: absolute;
      left: 2rem;
      margin-right: 1rem;
    }


  }
</style>

