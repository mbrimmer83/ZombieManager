import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Facility from 'src/components/Facility/Facility'
import Layout from 'src/components/Layout/Layout'
import ZombiesList from 'src/components/Zombies/components/List/List'
import rootReducer from 'src/store/reducer'
import { ELocation } from 'src/types/location'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
`
const App = () => {
  return (
    <Layout>
      <Fragment>
        <ZombiesList />
        <Div>
          <Facility location={ELocation.HOSPITAL} />
          <Facility location={ELocation.SCHOOL} />
          <Facility location={ELocation.WAREHOUSE} />
        </Div>
      </Fragment>
    </Layout>
    )
}

const store = createStore(
  rootReducer,
  {},
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.querySelector('#root'))

export default hot(App)
