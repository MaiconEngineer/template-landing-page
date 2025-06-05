<script lang="ts" >
import { defineComponent } from 'vue';
import avatar1 from '@/assets/png/avatar/avatar1.jpg'
import avatar2 from '@/assets/png/avatar/avatar2.png'
import avatar3 from '@/assets/png/avatar/avatar3.png'
import avatar4 from '@/assets/png/avatar/avatar4.png'
import avatar5 from '@/assets/png/avatar/nykolas.png'
import avatar6 from '@/assets/png/avatar/avatar6.png'

const avatars = {
  'avatar1': avatar1,
  'avatar2': avatar2,
  'avatar3': avatar3,
  'avatar4': avatar4,
  'avatar5': avatar5,
  'avatar6': avatar6
}

export default defineComponent({
   props: {
    className: String,
    icon: {
      type: String,
      required: true,
      default: undefined
    }
   },
   data(){
    let img: string = ""
    console.log('this',this.icon[0],this.icon?.valueOf(),this.icon?.valueOf() != undefined)
    if(this.icon != undefined){
      img = avatars[this.icon]
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
