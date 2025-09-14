<script lang="ts">
import { defineComponent, ref } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { AvatarKey } from '../Entitys/types/Avatars'
import CardAvatar from './CardAvatar.vue'
import bannerimpact from '@/assets/png/backgroundmask.png'
import ImageSelo from '@/assets/png/selo-package1.png'
import ButtonPrimary from './buttons/ButtonPrimary.vue'
import CardPackage from './cars/CardPackage.vue'
import CardSupportContact from './cars/CardSupportContact.vue'

import { gsap } from 'gsap'
import { useSpring, useMotion } from '@vueuse/motion'
import { NodeFlags } from 'typescript'

import { wrap } from '@motionone/utils'
import ParallaxComponent from './ParallaxComponent.vue'


const title = "Construimos físicos que impactam"

var word1 = document.createElement('span')
word1.innerHTML = 'Construímos'

var word2 = document.createElement('span')
word2.innerHTML = 'Físicos'
word2.className = 'text-lg-lb-red-to-red100'

var br = document.createElement("br")

var word3 = document.createElement('span')
word3.innerHTML = 'Que'

var word4 = document.createElement('spacer')
word4.innerHTML = 'Impactam'

const words: Array<{ div: string, text: string, class: string | null }> = [
  { div: 'span', text: 'Construímos', class: null },
  { div: 'span', text: 'Físicos', class: 'text-lg-lb-red-to-red100' },
  { div: 'br', text: '', class: null },
  { div: 'span', text: 'Que', class: null },
  { div: 'span', text: 'Impactam', class: null }
]


export default defineComponent({
  components: {
    CardAvatar,
    ButtonPrimary,
    CardPackage,
    CardSupportContact,
    ParallaxComponent,
  },
  setup() {
    const count = ref(0)


    return {
      count: count,
      banner: {
        backgroundImage: `url('${bannerimpact}')`
      },
      imageSelo: ImageSelo,
      words,
      scrollY
    }
  },
  mounted() {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const elementScroll = this.$refs.scroll as HTMLElement
      if (elementScroll !== undefined) {
        elementScroll.style.maxWidth = window.screen.width + 'px'
        elementScroll.setAttribute("data-animated", 'true')

        const scrollInner = elementScroll.querySelector('.scroll-inner')
        const scrollContent = Array.from(scrollInner?.children || []);

        scrollContent.forEach((content) => {
          const item = content.cloneNode(true) as HTMLElement;
          item.setAttribute('aria-hidden', 'true');
          scrollInner?.appendChild(item);
        })
      }

    }

    var selectorSpansTitle = this.$refs.titleRef as HTMLElement
    var spans = selectorSpansTitle.querySelectorAll(".char")

    window.addEventListener("load", () => {
      gsap.to(spans, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.05,
        ease: 'power2.out'
      })
    })

    console.log(spans)
  },
  methods: {
    onClickWantJoin(){
       window.location.href = `https://wa.me/5515991775316?text=Olá! Quero fazer parte dessa academia, como funciona?`
       fbq('track', 'Lead');
    },
    onClickButtonPackage(typePackage: String){
      window.location.href = `https://wa.me/5515991775316?text=Olá! Tenho interesse em fazer parte da academia." +
      "Escolhi o plano ${typePackage} e ,gostaria de saber como funciona para realizar a matrícula. 😊`
    },
    onClickSupport(){
       window.location.href = `https://wa.me/5515991775316?text=Olá! Tenho uma dúvida, poderia me ajudar?`
    }
  }
})
</script>

<template>
  <div class="container-home" :style="banner">

  </div>
  <div class="container-content">
    <h1 class="title f-w-primary" ref="titleRef">
      <template v-for="(word, index) in words">
        <span v-if="word.div == 'span'" v-text='word.text' :class="['char', word.class]"
          :style="{ opacity: 0, transform: 'translateY(20px)' }"></span>
        <br v-else />
        <span>{{ " " }}</span>
      </template>
    </h1>
    <div :inViewOptions="{ once: true }"
      class="subtitle ft-medium f-w-primary">
      <span> Aqui na Sparta, saúde e bem-estar são prioridade!</span> <br />
      Valorizamos cada aluno e trabalhamos para elevar <br />
      sua saúde e físico para próximo nível.
    </div>
    <div class="users">
      <CardAvatar v-for="(item, index) in Array(5).fill(1)" :key="index" :style="{ zIndex: index * -1 }"
        :icon="index === 4 ? undefined : (`avatar${index + 1}` as AvatarKey)" className="custom-card" />
    </div>

    <ButtonPrimary className="m-t-80 m-b-48" v-on:press="onClickWantJoin" />

    <div>
      <ParallaxComponent children="sparta" :base-velocity="3">sparta</ParallaxComponent>
    </div>

    <div class="package-grid">
      <CardPackage :tagImg="imageSelo" :price="90" :new-price="80" text-plan="Selecionar o Plano Semestral" v-on:press="onClickButtonPackage('Semestral')" />
      <CardPackage :tagImg="imageSelo" :price="100" :new-price="90" text-plan="Selecionar o Plano Trimensal" v-on:press="onClickButtonPackage('Trimensal')" />
      <CardPackage :tagImg="imageSelo" :price="120" :new-price="100" textPlan="Selecione o Plano Mensal" v-on:press="onClickButtonPackage('Mensal')" />
    </div>

    <div class="card-avatar">
      <CardSupportContact v-on:press-button-support="onClickSupport" />
    </div>
  </div>
</template>

<style lang="scss">
.title {
  .char {
    transform: 'translateY(20px)';
    display: inline-block;
  }
}

.scroll {
  // outline: 3px solid greenyellow;
  overflow: hidden;
  align-self: center;

  .scroll-inner {
    display: flex;
    gap: 1rem;
    margin: 0;
    padding: 0;
    padding-block: 1rem;
    flex-wrap: wrap;

    li {
      display: block;
    }

  }

  &[data-animated="true"] {
    .scroll-inner {
      max-width: max-content;
      flex-wrap: nowrap;
      animation: scroll 20s linear infinite;
    }
  }
}

@keyframes scroll {
  to {
    transform: translate(calc(-50% - 0.5rem));
  }

}

.container-home {
  width: 100%;
  min-height: 600px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.container-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: -8rem;
  padding-bottom: 2rem;

  .title {
    font-family: 'Folio Condensed' !important;
    // font-size: 36px;
    font-size: 9vw;
    text-transform: uppercase;
    line-height: 32px;
    text-align: center;
  }

  .users {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    text-align: center;

    .custom-card {
      margin-left: -15px;

      &:first-child {
        margin-left: 0px;
      }
    }
  }
}

.package-grid {
  margin-top: 100px;
  padding-inline: 25px;
  display: grid;
  gap: 2rem;
}

.subtitle {
  margin-top: 40px;
  font-family: 'Open Sans';
  line-height: 14px;
  text-align: center;
}

.card-avatar {
  padding: 25px;
}
</style>
