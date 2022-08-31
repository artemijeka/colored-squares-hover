(function () {
  document.addEventListener('DOMContentLoaded', function () {



    const board = document.querySelector('#board')
    const SQUARES_COUNT = 600
    const SQUARE_COLOR = '#333'
    const COLORS = [
      '#5C4B51',
      '#8CBEB2',
      '#F2EBBF',
      '#F3B562',
      '#F06060',
    ]

    for (let i = 0; i < SQUARES_COUNT; i++) {
      const square = document.createElement('div')
      square.classList.add('square')
      square.style.backgroundColor = SQUARE_COLOR
      board.append(square)

      square.addEventListener('mouseover', () => {
        setColor(square, COLORS)
      })

      square.addEventListener('mouseleave', () => {
        removeColor(square)
      })
    }


    function setColor(square, COLORS) {
      const randomColor = getRandomColor(COLORS)
      square.style.backgroundColor = randomColor
      square.style.boxShadow = `0 0 5px ${randomColor}, 0 0 10px ${randomColor}`
    }


    function removeColor(square) {
      square.style.backgroundColor = SQUARE_COLOR
      square.style.boxShadow = `0 0 2px black`
    }


    function getRandomColor(COLORS) {
      console.log(COLORS)
      const i = Math.floor(Math.random() * COLORS.length)
      console.log(i)
      return COLORS[i]
    }




  })
})()