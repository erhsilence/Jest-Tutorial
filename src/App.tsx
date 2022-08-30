import Title from 'components/Title';
import React from 'react';
// import { Button } from 'antd';


// const App = () => {
//   return (
//     <div>
//       <h1>Hello</h1>
//       <Button>点我</Button>
//     </div>
//   )
// }

const App = () =>{
  return (
    <div>
      <section>
        <Title type='small' title='小字' />
        <Title type='large' title='大字' />
      </section>
    </div>
  )
}

export default App;