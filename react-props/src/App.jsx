import UserCard from "./components/UserCard"
import './App.css';

function App(){
  return (
    <div className="container">
      <UserCard name='v' desc='desc1'/>
      <UserCard name='vc' desc='desc2'/>
      <UserCard name='mvc' desc='desc3'/>
    </div>
  )
}

export default App
