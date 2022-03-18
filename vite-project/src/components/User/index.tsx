import React, { Component } from 'react'
import IUser from '../../types/IUser'

export default class User extends Component<IUser, {}> {
  constructor(props: IUser) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1> User component</h1>
        Hello, <b> {this.props.name}</b>
        <br />
        You are <b>{this.props.age} years old</b>
        <br />
        You live at: <b>{this.props.address}</b>
        <br />
        You were born : <b>{this.props.dob.toDateString()}</b>
      </div>
    )
  }
}
