export const Tiles = () => {
  const numOfTiles = 3
  const listOfTiles = []
  for (let i=0; i<numOfTiles; ++i) {
    listOfTiles.push(<div key={i} className="h-32 w-64 bg-sky-900 opacity-50 m-3 rounded drop-shadow"></div>)
  }

  return (
    <div className="flex">
      {listOfTiles}
    </div>
  )
}
