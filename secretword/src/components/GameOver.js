import React from 'react'
import './GameOver.css'

const GameOver = ({retry, score, pickedWord}) => {
  return (
    <div>
      <h1>Game Over</h1>
      <h2 className='word'>A palavra era: <span>{pickedWord}</span></h2>
      <h3 className='h2GameOver'>A sua pontuação foi: <span>{score}</span></h3>
      <button className='buttonGameOver' onClick={retry} >Resetar jogo</button>
    </div>
  )
}

export default GameOver