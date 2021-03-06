
import React, { Component } from 'react'
import getAppRoutes from '../../components/AppRoutes'
import withAppConfigs from '../../withAppConfigs'
import { Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

export class Routes extends Component {

  render() {
    const { appConfig } = this.props

    const customRoutes = appConfig.routes ? appConfig.routes : []
    const appRoutes = getAppRoutes(appConfig.firebaseLoad)
    return (

      <div style={{ width: '100%', height: '100%' }}>
        <Switch >
          {customRoutes.map((Route, i) => { return React.cloneElement(Route, { key: `@customRoutes/${i}` }) })}
          {appRoutes.map((Route, i) => { return React.cloneElement(Route, { key: `@appRoutes/${i}` }) })}
        </Switch>
      </div>

    )
  }
}

export default withRouter(withAppConfigs(Routes))
