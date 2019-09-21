import { MOVE_ZOMBIE } from 'src/store/const/zombies'

export const moveZombieActionCreator = (id: string, newLocation: string) => ({
  type: MOVE_ZOMBIE,
  id,
  newLocation,
})
