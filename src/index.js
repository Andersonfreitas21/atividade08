import React from 'react'
import ReactDOM from 'react-dom'

import Header from './Componentes/Header/index'

const Aplicacao = () => (
  <div>
    <Header />
  </div>
)

ReactDOM.render(<Aplicacao/>, document.getElementById('root'))
