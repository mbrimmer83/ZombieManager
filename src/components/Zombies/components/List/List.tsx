import React from 'react'
import { useSelector } from 'react-redux'
import { getZombiesListSelector } from 'src/store/selectors/zombies'
import styled from 'styled-components'

import ZombieCard from '../Card/Card'

const Div = styled.div`
  height: 800px;
  width: 515px;
  overflow: scroll;
`

const ZombiesList = () => {
  const zombies = useSelector(getZombiesListSelector)

  return (
    <Div>
      {zombies.map((zombieId: number) => (<ZombieCard key={zombieId} id={zombieId} />))}
    </Div>
  )
}

export default ZombiesList
