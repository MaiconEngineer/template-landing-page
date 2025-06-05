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

export default defineComponent({
  components: {
    CardAvatar,
    ButtonPrimary,
    CardPackage,
    CardSupportContact
  },
  setup(){
    const count = ref(0)
    return {
      count: count,
      banner: {
        backgroundImage: `url('${bannerimpact}')`
      },
      imageSelo: ImageSelo
    }
  },
  mounted() {
     if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
      const elementScroll = this.$refs.scroll as HTMLElement
      elementScroll.style.maxWidth = window.screen.width + 'px'
      elementScroll.setAttribute("data-animated",'true')

      const scrollInner = elementScroll.querySelector('.scroll-inner')
      const scrollContent = Array.from(scrollInner?.children || []);

      scrollContent.forEach((content) => {
        const item = content.cloneNode(true) as HTMLElement;
        item.setAttribute('aria-hidden','true');
        scrollInner?.appendChild(item);
      })


      // console.log(scroll)
      // scroll.forEach(element => {
      //   console.log(element)
      // });
     }
  },
  methods: {

  }
})
</script>

<template>
  <div class="container-home" :style="banner" >

  </div>
  <div class="container-content">
    <h1 class="title f-w-primary" >
      Construímos <span class="f-w-gradient-red-black" >Físicos</span> <br/> que impactam
    </h1>
    <p class="subtitle ft-medium f-w-primary">
        Aqui na Sparta, você não fica parado! Tratamos cada <br/>
        aluno como único, com o propósito de elevar seu <br/>
        físico e saúde ao próximo nível.</p>
    <div class="users">
      <CardAvatar v-for="(item,index) in Array(5).fill(1)"
                  :key="index"
                  :style="{ zIndex: index * -1 }"
                  :icon="index === 4 ? undefined : (`avatar${index + 1}` as AvatarKey)"
                  className="custom-card" />
    </div>

    <ButtonPrimary className="m-t-80 m-b-48" />

    <div ref="scroll" class="scroll" >
      <!-- <marquee behavior="" direction=""> -->
      <ul class="scroll-inner" >
        <li v-for="(item,index) in Array(5).fill(0)" :key="index" >
          <img src="@/assets/png/blackskull.png" width="160" height="50" />
        </li>
      </ul>
    <!-- </marquee> -->
    </div>

    <div class="package-grid">
      <CardPackage :tagImg="imageSelo" />
      <CardPackage :tagImg="imageSelo" />
      <CardPackage :tagImg="imageSelo" />
    </div>

    <div class="card-avatar" >
      <CardSupportContact/>
    </div>
  </div>
</template>

<style lang="scss">

    .scroll{
      // outline: 3px solid greenyellow;
      overflow: hidden;
      align-self: center;
      .scroll-inner{
        display: flex;
        gap: 1rem;
        margin: 0;
        padding: 0;
        padding-block: 1rem;
        flex-wrap: wrap;
        li{
          display: block;
        }

      }
      &[data-animated="true"]{
        .scroll-inner{
          max-width: max-content;
          flex-wrap: nowrap;
          animation: scroll 20s linear infinite;
        }
      }
    }

    @keyframes scroll {
      to{
        transform: translate(calc(-50% - 0.5rem));
      }

    }
   .container-home{
      width: 100%;
      min-height: 600px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
   }

   .container-content{
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-top: -8rem;
    padding-bottom: 2rem;

      .title{
        font-family: 'Folio Condensed';
        // font-size: 36px;
        font-size: 9vw;
        text-transform: uppercase;
        line-height: 32px;
        text-align: center;
      }

      .users{
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        text-align: center;

        .custom-card{
          margin-left: -15px;
          &:first-child{
            margin-left: 0px;
          }
        }
      }
   }

   .package-grid{
    margin-top: 100px;
    padding-inline: 25px;
    display: grid;
    gap: 2rem;
   }

   .subtitle{
    margin-top: 40px;
    font-family: 'Open Sans';
    line-height: 14px;
    text-align: center;
   }

   .card-avatar {
    padding: 25px;
   }
</style>
