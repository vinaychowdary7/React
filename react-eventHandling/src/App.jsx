
import './App.css'

function App() {

  function handleClick(){
    alert("I am clicked");
  }
  function movseOver(){
    alert("I am movse Over");
  }
  function handleInputChange(e){
    console.log("Value till now",e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault();
    alert("Form submitted");
  }

  return (
    <div>
      <button onClick={()=>alert("Button Clicked")}>Click me</button>
      {/* <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form> */}
      {/* <p onMouseOver={movseOver} style={{border:"1px solid black"}}>
      I am para
      </p>
      <button onClick={handleClick}>
        Click me
      </button> */}
    </div>
  )
}

export default App
