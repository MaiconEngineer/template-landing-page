<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import ButtonSecondary from '../buttons/ButtonSecondary.vue';
import ChipCheck from '../chips/ChipCheck.vue';
import Dividir from '../Dividir/dividir.vue';


export default defineComponent({
  name: 'CardPackage',
  components: {
    ButtonSecondary,
    ChipCheck
  },
  props: {
    tagImg: String,
    price: {
      type: Number,
      required: false
    },
    newPrice: {
      type: Number,
      required: false
    },
    textPlan: {
      required:false,
      type: String
    },
    onPress: {
      type: Function as PropType<(event:MouseEvent) => void>,
      required: false
    },
    values: Array<String>
  },
  mounted() {
    console.log(this.$props.tagImg)
  },
  methods: {
    formatPrice(inPrice: Number | undefined): string {
      let format = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
      })
      const priceout = Number.parseInt((inPrice?.toString() ?? "0"))
      return format.format(priceout)
    }
  }
})
</script>

<template>
  <div class="card-package">
    <div class="tag">
      <img :src="tagImg" height="45" />
    </div>
    <span class="price-promotion ft-medium-100">
      {{ formatPrice(price) }} por apenas
    </span>
    <span class="price ft-big-24 f-w-gradient-gray-black">
      {{ formatPrice(newPrice) }}
    </span>
    <sub class="message ft-medium">
      {{ textPlan }}
    </sub>
    <ul class="bands">
      <li>
        <img src="@/assets/png/brand/mastercard.png" height="15" />
      </li>
      <li>
        <img src="@/assets/png/brand/visa.png" height="15" />
      </li>
      <li>
        <img src="@/assets/png/brand/pix.png" height="15" />
      </li>
    </ul>

    <ButtonSecondary v-on:press="onPress?.($event)"  />

    <div class="benefits bg-black-300 ">

        <div class="benefits-block">

        <ChipCheck label="Acesso total a Musculação" />
        <ChipCheck label="Acesso a aulas de Muay Thai" />
        <ChipCheck label="Acesso a aulas de Pilares Solo" />
        <ChipCheck label="Acesso ao aulas de Dança" />
        <ChipCheck label="Acesso ao Cardio" />
      </div>

      <Dividir />

      <div class="benefits-block">

        <ChipCheck label="Atendimento humanizado" />
        <ChipCheck label="Acompanhamento técnico do professor" />
        <ChipCheck label="professores (agentes ativos)" />
        <ChipCheck label="Estacionamento" />
        <ChipCheck label="Ficha de treino estruturada" />
      </div>

      <img src="@/assets/png/barra.png" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../assets/colors' as *;

.card-package {
  width: 100%;
  background-color: $vt-c-black-seconday;
  display: grid;
  justify-items: center;
  border-radius: 12px;
  overflow: hidden;

  .tag {
    position: relative;
    width: 88px;
    height: 37px;
    background-color: $vt-c-red-100;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    margin-bottom: 38px;

    img {
      z-index: 3;
    }

    &::after {
      z-index: 1;
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: $vt-c-red;
      filter: blur(33px);
    }

  }

  .price-promotion {
    position: relative;
    font-family: 'Open Sans';
    font-weight: bold;

    color: $vt-c-white;
    margin-bottom: 6px;

    &::after {
      content: " ";
      width: 70px;
      height: 3px;
      background-color: $vt-c-red;
      position: absolute;
      left: 0;
      top: 50%;
      transform: rotate(-10deg);
      background: linear-gradient(-10deg, $vt-c-red-300, $vt-c-red-200);

    }
  }

  .price {
    font-family: 'Open Sans';
    font-weight: bold;
    margin-bottom: 10px;
  }

  .message {
    font-family: 'Open Sans';
    font-weight: 400;
    background: -webkit-linear-gradient($vt-c-white, rgba(255, 255, 255, 0.455));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

  }

  .bands {
    padding: 0;
    display: grid;
    grid-auto-flow: column;
    gap: 0.5rem;
    margin: 30px 0;

    li {
      display: inline-block;

      img {}
    }
  }
}

.benefits {
  width: 100%;
  display: grid;
  gap: 0.7rem;
  margin-top: 45px;
  padding-bottom: 32px;

  .chip-check {
    margin-left: 15px;
  }

  img {
    justify-self: center;
    align-self: center;
  }

  .benefits-block{
    padding: 32px 32px;
    display: grid;
    gap: 0.7rem;
  }
}
</style>
