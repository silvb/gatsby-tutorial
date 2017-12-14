import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>WOOP!</p>
    <img src="http://lorempixel.com/400/200/" alt="lorem ipsum"/>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/counter/">
      Counter
    </Link>
  </div>
)

export default IndexPage
