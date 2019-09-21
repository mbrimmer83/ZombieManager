import get from 'lodash/fp/get'
import reduce from 'lodash/fp/reduce'
import { createSelector } from 'reselect'
import { ELocation } from 'src/types/location'
import { IZombie } from 'src/types/zombies'

const getZombies = get('zombies')
const getZombiesList = get('zombiesList')
const getZombiesObject = get('zombies.zombies')

export const getZombiesListSelector = createSelector(
  getZombies,
  getZombiesList,
)

export const makeGetZombieById = (id: number) => createSelector(
  getZombies,
  get(`zombies[${id}]`),
)

export const makeGetZombieCountByLocation = (location: ELocation) => createSelector(
  getZombiesObject,
  reduce((acc, zombie: IZombie) => zombie.location === location ? acc += 1 : acc, 0),
)
