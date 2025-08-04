<template>
  <button class="ft-small button-secondary g-tb-red-to-redblack" type="button" @click="onPress" ><p>Faça parte da junto com<span class="ft-medium-15">a Sparta</span></p></button>
</template>

<script lang="ts" >
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
  props: {
    onPress: {
      required: false,
      type: Function as () => void
    }
  }
})
</script>

<style lang="scss">
  @use '../../assets/colors' as *;
    .button-secondary{
      position: relative;
      padding: 15px 58px;
      color:$vt-c-white;
      font-family: 'Open Sans';
      font-style: italic;
      text-transform: uppercase;
      border-style: none;
      border-radius: 4px;
      display: inline-flex;
      align-items: center;

      p{
        z-index: 1;
      }

      span{
        z-index: 2;
        font-family: 'Folio Condensed';
        font-style: normal;
        font-weight: bold;
        margin-left: 5px;
      }

      &::before{
        position: absolute;
        z-index: 1;
        left: 0;
        top: 50%;
        content: '';
        width: 100%;
        height: 20px;
        background-color: $vt-c-red;
        filter: blur(50px);
      }

    }
</style>
