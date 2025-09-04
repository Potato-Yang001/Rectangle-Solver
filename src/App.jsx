import { useState } from "react"


export default function App() {
  const [length, setLength] = useState('')
  const [width, setWidth] = useState('')
  const [result, setResult] = useState('')

  function calArea(area) {
    area = length * width
    setResult(area)
  }

  function calParimeter(perimeter) {
    perimeter = 2 * (parseFloat(length) + parseInt(width))
    setResult(perimeter)
  }


  return (
    <div>
      <h1>Rectangle Solver</h1>
      <label>Length: </label>
      <input type="text" value={length} onChange={(event) => setLength(event.target.value)} />
      <label>Width: </label>
      <input type="text" value={width} onChange={(event) => setWidth(event.target.value)} />

      <div style={{ display: 'flex', flexDirection: 'column', width: 'auto' }}>
        <button onClick={calArea}>Get Area</button>
        <button onClick={calParimeter}>Get Perimeter</button>
      </div>

      {result}
    </div>
  )
}