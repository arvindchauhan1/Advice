import React from 'react'
import axios from 'axios';
import { useEffect, useState } from "react";

import "./App.css";

const App = () => {
  const [advice, setAdvice] = useState("")


  const fetchQuote = async () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        console.log(response.data.slip.advice)
        const Advice = response.data.slip.advice;
        setAdvice(Advice)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetchQuote();
  })

  // const clickcall = async () => {
  //   fetchQuote()
  //   console.log(advice)
  // }


  return (
    <>
      <div className="app">
        <div className="card">
          <h1 className="heading"  >{advice}</h1>
          <button className="button" onClick={fetchQuote}>
            <span>
              GIVE ME ADVICE!
            </span>
          </button>
        </div>
      </div>
    </>
  )
}

export default App
