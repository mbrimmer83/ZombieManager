import upperFirst from 'lodash/upperFirst'
import React from 'react'
import { useSelector } from 'react-redux'
import { makeGetZombieCountByLocation } from 'src/store/selectors/zombies'
import { Div } from 'src/styles/styles'
import { ELocation } from 'src/types/location'
import styled from 'styled-components'

interface IProps {
  location: ELocation
}

const Wrapper = styled.div`
  width: 300px;
  height: 200px;
  border: 1px solid grey;
  border-radius: 10px;
  box-shadow: 2px 4px 3px rgba(0,0,0,0.2);
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`

const Img = styled.img`
  min-width: 200px;
  min-height: 150px;
  border-radius: 10px;
  z-index: -1;
`

const IMAGE_MAP = {
  hospital: 'hospital.jpg',
  school: 'school.png',
  warehouse: 'warehouse.png',
}

const Facility = (props: IProps) => {
  const { location } = props
  const count = useSelector(
    makeGetZombieCountByLocation(location),
  )

  return (
    <Wrapper>
      <Img src={IMAGE_MAP[location]} alt={`${upperFirst(location)} Cartoon Image`} />
      <Div>{upperFirst(location)}: {count}</Div>
    </Wrapper>
  )
}

export default Facility
