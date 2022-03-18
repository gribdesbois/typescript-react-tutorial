/* eslint-disable class-methods-use-this */
import React, { Component } from 'react'

const Logo =
  'https://logrocket-assets.io/static/home-hero-c97849b227a3d3015730e3371a76a7f0.svg'

export default class FirstComponent extends Component<{}> {
  render() {
    return (
      <div>
        <h3>
          <div>
            <img src={Logo} height="250" />
          </div>
          <p>This component shows the Logrocket logo</p>
          <p>For more info on Logrocket, please visit https://logrocket.com</p>
        </h3>
      </div>
    )
  }
}
