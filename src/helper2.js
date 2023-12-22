export function calculateBlock(squares) {
  // Look for situations where 2 of 3 squares are filled in with X and the 3rd is null
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    let index;
    const pattern = [squares[a], squares[b], squares[c]];
    if (pattern.filter(value => value === 'X').length === 2) {
      console.log(pattern.filter(value => value === 'X').length);
      index = pattern.indexOf(null);
      if (index !== -1) return index;
    }
  }
  return null;
}
