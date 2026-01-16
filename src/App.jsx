import { useState } from 'react'
import Card from './assets/components/Card'
import userData from './data/userData'





const App = () => {
  return (
    <div className='w-full h-full flex flex-wrap p-5'>
      {userData.map((user)=>
      <Card user={user} key={user.id} />
      )}
      
      
    </div>
  )
}

export default App



