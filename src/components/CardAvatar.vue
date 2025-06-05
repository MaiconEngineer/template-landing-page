<script lang="ts" >
import { defineComponent } from 'vue';
import { avatars } from '../Entitys/types/Avatars'
import type { AvatarKey } from '../Entitys/types/Avatars'

export default defineComponent({
   props: {
    className: String,
    icon: {
      type: String as () => AvatarKey,
      required: true,
      default: undefined
    }
   },
   data(){
    let img: string = ""
    if(this.icon != undefined){
      console.log('this',this.icon[0],this.icon?.valueOf(),this.icon?.valueOf() != undefined)
    }

    if(this.icon != undefined && Object.keys(avatars).includes(this.icon)){
      img = avatars[this.icon as AvatarKey]
    }

    return {
      backgroundIcon: {
        backgroundImage: `url('${img}')`
      }
    }
   },
   methods:{
    getIcon(): string | undefined{
        if(Array.isArray(this.icon) && this.icon[0] != undefined && this.icon[0] != ""){
          return String(this.icon[0])
        }
        return undefined
     }
   },
   mounted(){
    console.log(typeof(this.icon),this.icon)
   },
   computed: {

   }
})

</script>

<template>
  <div :class="['avatar', getIcon() == undefined  ? 'bc-lgray empty': 'bc-secondary active',className]" >
    <div :class="['crop',getIcon() == undefined ? 'bg-lgray': '']" alt="Avatar" :style="backgroundIcon" ></div>
  </div>
</template>

<style lang="scss">
   .avatar{
    overflow: hidden;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    border-width: 3px;
    border-style: solid;

    .crop{
      width: 50px;
      height: 50px;
      background-size: contain;
      background-position: center;
    }
   }
</style>
