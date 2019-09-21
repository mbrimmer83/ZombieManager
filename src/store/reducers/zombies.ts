import get from 'lodash/get'
import { MOVE_ZOMBIE } from 'src/store/const/zombies'

export const intitialState = {
  zombiesList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  zombies: {
    1: {
      id: 1,
      name: 'Matt the Zombie',
      location: 'school',
    },
    2: {
      id: 2,
      name: 'Jessica the Zombie',
      location: 'hospital',
    },
    3: {
      id: 3,
      name: 'Sarah the Zombie',
      location: 'warehouse',
    },
    4: {
      id: 4,
      name: 'John the Zombie',
      location: 'school',
    },
    5: {
      id: 5,
      name: 'Joe the Zombie',
      location: 'hospital',
    },
    6: {
      id: 6,
      name: 'Andrea the Zombie',
      location: 'warehouse',
    },
    7: {
      id: 7,
      name: 'Tyler the Zombie',
      location: 'school',
    },
    8: {
      id: 8,
      name: 'Zach the Zombie',
      location: 'hospital',
    },
    9: {
      id: 9,
      name: 'Jane the Zombie',
      location: 'warehouse',
    },
  },
}

interface IAction {
  type: string,
  id: number,
  newLocation: string
}

export default (state = intitialState, action: IAction) => {
  switch (action.type) {
    case MOVE_ZOMBIE:
      const zombies = state.zombies
      const id = action.id

      return {
        ...state,
        zombies: {
          ...zombies,
          [id]: {
            ...get(zombies, id),
            location: action.newLocation,
          },
        },
      }

    default:
      return state
  }
}
