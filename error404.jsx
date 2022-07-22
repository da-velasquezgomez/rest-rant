const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Wait! You there! This page is not in exsistence in this present dimension!</p>
          </main>
      </Def>
    )
  }
  

module.exports = error404
