
function chessBoard(rows, columns) {
  return [...Array(rows)].map((_, i) =>
    [...Array(columns)].map((_, k) => (i + k) % 2 === 0 ? 'O' : 'X'),
  )
}

console.log(chessBoard(6, 4))
