import avatar1 from '@/assets/png/avatar/avatar1.jpg'
import avatar2 from '@/assets/png/avatar/avatar2.png'
import avatar3 from '@/assets/png/avatar/avatar3.png'
import avatar4 from '@/assets/png/avatar/avatar4.png'
import avatar5 from '@/assets/png/avatar/nykolas.png'
import avatar6 from '@/assets/png/avatar/avatar6.png'

export const avatars = {
  'avatar1': avatar1,
  'avatar2': avatar2,
  'avatar3': avatar3,
  'avatar4': avatar4,
  'avatar5': avatar5,
  'avatar6': avatar6
}

export type AvatarKey = keyof typeof avatars;
