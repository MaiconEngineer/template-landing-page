<script lang="ts">

import ButtonTertiary from '../buttons/ButtonTertiary.vue';
import CardAvatar from '../CardAvatar.vue'

export default {
  props: {
    onPressButtonSupport: {
      required:false,
      type: Function as () => void
    }
  },
  components: {
    CardAvatar,
    ButtonTertiary
  },
  data() {

  },
  mounted() {

  }
}

</script>

<template>
  <div class="support-contact bg-black-300">
    <div>
      <div class="m-b-24 d-l-flex">
        <CardAvatar :style="{ zIndex: 1 }" icon="avatar5" className="custom-card" />
        <CardAvatar :style="{ zIndex: 1 }" icon="avatar6" className="custom-card" />
      </div>
      <h5 class="ft-14 text-lg-lb-red-to-red100 m-b-10">Precisa de ajuda ?</h5>
      <p class="ft-12 text-white-to-white100">Dúvidas sobre os planos, como funciona o nosso treino personalizado ou técnica.</p>
      <ButtonTertiary v-on:press="onPressButtonSupport"/>
    </div>
  </div>
</template>

<style lang="scss">
@use '../../assets/colors' as *;



.support-contact {
  width: 100%;
  height: auto;
  padding: 2rem;
  border-radius: 8px;
  text-align: left;

  font-family: 'Open Sans';

  .custom-card {
    &:nth-child(2) {
      position: relative;
      right: 1rem;
    }
  }

  h5 {
    font-weight: bold;
  }

  p {
    font-weight: 500;
    line-height: 1rem;
  }


}
</style>
