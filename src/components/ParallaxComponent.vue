<template>
  <div class="parallax">
    <motion.div class="scroller" :style="{ x }">
        <img src="@/assets/png/blackskull.png" width="190" :style="{ opacity: 0.5 }" />
        <img src="@/assets/png/ruah 3.png" width="180" :style="{ opacity: 0.5 }"  />
        <img src="@/assets/png/blackskull.png" width="190" :style="{ opacity: 0.5 }" />
        <img src="@/assets/png/ruah 3.png" width="180" :style="{ opacity: 0.5 }" />
        <img src="@/assets/png/blackskull.png" width="190" :style="{ opacity: 0.5 }"/>
        <img src="@/assets/png/ruah 3.png" width="180" :style="{ opacity: 0.5 }" />
        <img src="@/assets/png/blackskull.png" width="190":style="{ opacity: 0.5 }" />
    </motion.div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useMotionValue, useTransform, useAnimationFrame, useScroll, useVelocity, useSpring, motion } from 'motion-v';
import { wrap } from "@motionone/utils";
import type { AvatarKey } from '../Entitys/types/Avatars'
import CardAvatar from "./CardAvatar.vue";

const props = defineProps<{
  children: string;
  baseVelocity: number;
}>();

const baseX = useMotionValue(0);
const directionFactor = ref(1);
var x = useTransform(baseX, (v: number) => `${wrap(-10, -80, v)}%`);

const { scrollY } = useScroll();
const scrollVelocity = useVelocity(scrollY);
const smoothVelocity = useSpring(scrollVelocity, {
  damping: 50,
  stiffness: 400,
});
const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
  clamp: false,
});

useAnimationFrame((_t: any, delta: number) => {
  let moveBy = directionFactor.value * props.baseVelocity * (delta / 1000);

  if (velocityFactor.get() < 0) {
    directionFactor.value = -1;
  } else if (velocityFactor.get() > 0) {
    directionFactor.value = 1;
  }

  moveBy += directionFactor.value * moveBy * velocityFactor.get();
  baseX.set(baseX.get() + moveBy);
});
</script>

<style scoped>
.parallax {
  overflow: hidden;
  letter-spacing: -2px;
  line-height: 0.8;
  margin: 0;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
}

.parallax .scroller {
  font-weight: 600;
  text-transform: uppercase;
  font-size: 64px;
  display: flex;
  white-space: nowrap;
  flex-wrap: nowrap;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
  padding-block: 1rem;

}


.custom-card {}

.parallax span {
  display: block;
  margin-right: 30px;
}
</style>
