import React, { Fragment, ReactChild } from 'react'
import styled from 'styled-components'

const Div = styled.div`
  width: 80%
  margin: auto;
  display: flex;
  flex-direction: row;
`

const H1 = styled.h1`
  text-align: center;
`

interface IProps {
  children: ReactChild
}

const Layout = (props: IProps) => {
  return (
    <Fragment>
      <H1>Zombie Manager</H1>
      <Div>{props.children}</Div>
    </Fragment>
  )
}

export default Layout
