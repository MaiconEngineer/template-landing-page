
<script lang="ts">
import { defineComponent } from 'vue';
import IconCheck from '../icons/IconCheck.vue';

export default defineComponent({
  props: {
    label: {
      type: String,
      required: false,
    }
  },
  components: {
    IconCheck
  },
  data(){

  },
  mounted(){

  }
})

</script>


<template>
  <div class="chip-check" >
    <div class="icon g-lb-green-to-greenblack">
      <IconCheck/>
    </div>
    <span class="ft-medium">{{ label }}</span>
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
      text-align: left;
    }
  }
</style>
