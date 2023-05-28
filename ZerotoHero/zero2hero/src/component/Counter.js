function Counter() {
  let number = 0;
  function handleClick() {
    number++;
  }
  return (
    <>
      <h1>{number}</h1>
      <button onClick={handleClick}>Top</button>
    </>
  )
}

export default Counter;