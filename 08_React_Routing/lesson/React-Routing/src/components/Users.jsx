import React from 'react'
import { Link } from 'react-router-dom'

export default function Users() {
  return (
    <div>
      <p><Link to="/users/1?ref=food&price=20">user 1</Link></p>
      <p><Link to="/users/2?ref=toys&price=30">user 2</Link></p>
      <p><Link to="/users/3?ref=clothes&price=40">user 3</Link></p>
    </div>
  )
}
