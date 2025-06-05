
<script setup>
import IconCheck from '../icons/IconCheck.vue';

</script>


<template>
  <div class="chip-check" >
    <div class="icon g-lb-green-to-greenblack">
      <IconCheck/>
    </div>
    <span class="ft-medium">Avaliação física</span>
  </div>
</template>


<style lang="scss">
@use '../../assets/colors' as *;

  .chip-check{
    display: inline-flex;
    align-items: center;
    .icon{
      width: 20px;
      height: 20px;
      border-radius: 100%;
      text-align: center;
      line-height: 20px;
    }

    span{
      font-family: 'Open Sans';
      color: $vt-c-green-500;
      font-weight: 600;
      margin-left: 10px;
    }
  }
</style>
