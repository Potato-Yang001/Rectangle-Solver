import { useState } from "react"


export default function App() {
  const [length, setLength] = useState('')
  const [width, setWidth] = useState('')
  const [result, setResult] = useState('')

  function calArea(area) {
    area = parseInt(length) * parseInt(width)
    setResult(`The area of the rectangle is ${area} units.`)
  }

  function calParimeter(perimeter) {
    perimeter = 2 * (parseInt(length) + parseInt(width))
    setResult(`The perimeter of the rectangle is ${perimeter} units.`)
  }


  return (
    <div>
      <h1>Rectangle Solver</h1>
      <label>Length: </label>
      <input type="text" value={length} onChange={(event) => setLength(event.target.value)} />
      <label>Width: </label>
      <input type="text" value={width} onChange={(event) => setWidth(event.target.value)} />

      <div style={{ display: 'flex', flexDirection: 'row', width: '250px', margin: '10px', gap: '20px' }}>
        <button onClick={calArea}>Get Area</button>
        <button onClick={calParimeter}>Get Perimeter</button>
      </div>

      {result}
    </div>
  )
}