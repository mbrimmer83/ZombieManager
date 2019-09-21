import React, { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { moveZombieActionCreator } from 'src/store/actions/zombies'
import { makeGetZombieById } from 'src/store/selectors/zombies'
import { Div, Img } from 'src/styles/styles'
import { ELocation } from 'src/types/location'
import { IZombie } from 'src/types/zombies'
import styled from 'styled-components'

interface IProps {
  id: number
}

const Wrapper = styled.div`
  width: 500px;
  height: 200px;
  border: 1px solid grey;
  border-radius: 10px;
  box-shadow: 2px 4px 3px rgba(0,0,0,0.2);
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
`

const ZombieCard = ({ id }: IProps) => {
  const zombie: IZombie = useSelector(makeGetZombieById(id))
  const dispatch = useDispatch()

  return (
    <Wrapper>
      <Img src="zombie.jpg" alt="Zombie Cartoon Image"/>
      <Div>
        <h1>{zombie.name}</h1>
        <label>Location: </label>
        <select
          name="facility"
          onChange={(event: ChangeEvent<HTMLSelectElement>) =>
            dispatch(moveZombieActionCreator(zombie.id, event.target.value))
          }
          defaultValue={zombie.location}
        >
          <option value={ELocation.HOSPITAL}>Hospital</option>
          <option value={ELocation.SCHOOL}>School</option>
          <option value={ELocation.WAREHOUSE}>Warehouse</option>
        </select>
      </Div>
    </Wrapper>
  )
}

export default ZombieCard
