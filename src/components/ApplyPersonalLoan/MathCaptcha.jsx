'use client'
import { useEffect, useState } from 'react'

const MathCaptcha = ({ onChange }) => {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [answer, setAnswer] = useState('')

  useEffect(() => {
    const a = Math.floor(Math.random() * 10) + 1
    const b = Math.floor(Math.random() * 10) + 1
    setNum1(a)
    setNum2(b)
  }, [])

  const handleChange = (e) => {
    const value = e.target.value
    setAnswer(value)
    const isValid = parseInt(value) === num1 + num2
    onChange(isValid)
  }

  return (
    <div>
      <label>
        What is {num1} + {num2}?&nbsp;
        <input
          type="number"
          value={answer}
          onChange={handleChange}
          required
        />
      </label>
    </div>
  )
};

export default MathCaptcha;
