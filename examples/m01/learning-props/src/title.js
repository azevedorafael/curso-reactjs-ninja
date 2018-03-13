import React from 'react'

//Component rendering with Pure Function
const Title = ({ name, lastName }) => (
  <h1>Olá {`${name} ${lastName}`}</h1>
)

Title.defaultProps = {
  name: 'Desconhecido',
  lastName: 'Sem sobrenome'
}

//Component classic rendering
// const Title = React.createClass({
//   getDefaultProps: function () {
//     return {
//       name: 'Desconhecido',
//       lastName: 'Sem sobrenome'
//     }
//   },

//   render: function () {
//     return (
//       <h1>Olá {this.props.name} {this.props.lastName}</h1>
//     )
//   }
// })

export default Title
