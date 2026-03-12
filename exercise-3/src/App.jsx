import React from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);
  const [result, setResult] = React.useState("");
  const [invalid, setInvalid] = React.useState(false);

  /* You will need some function to handle the key pressed and button events */
  function onA(event) {
    setA(event.target.value);
  }
  function onB(event) {
    setB(event.target.value);
  }
  function onCompute(){
    if(!isNaN(a) && !isNaN(b)){
      setInvalid(true);
      setResult(Number(a) + Number(b));
    }else{
      setInvalid(false);
      setResult("number shall be entered in A and B");
    }
  }
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input value={result} disabled />
      <button onClick={onCompute}>Compute</button>
    </main>
  );
}

export default App;
