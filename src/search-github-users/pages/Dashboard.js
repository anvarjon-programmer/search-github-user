import React from 'react'
import { Navbar,Card,Followers,Info,Repos,Search,User } from '../components'

import { GithubContext } from '../context/context';
const Dashboard = () => {
  const {isLoading} = React.useContext(GithubContext);

  if(isLoading) {
    return (
      <main>
         <Navbar/>
         <Search/>
         <img src='https://github.com/nurmukhamedov/react-projects/blob/lesson-31/react-project/src/components/search-github-users/images/preloader.gif?raw=true' className='loading-img' alt='loading'  />
      </main>
    );
  }

  return (
    <main>
       {/* <Navbar></Navbar>
       <Search/> */}
       <Info/>
       <User/>
       <Repos/>
       {/* <Card/> */}
    </main>
  )
}




export default Dashboard