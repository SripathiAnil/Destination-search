import './index.css'

const DestinationItem = props => {
  const {searchItem} = props
  const {imgUrl, name} = searchItem

  return (
    <li>
      <img src={imgUrl} alt={name} className="image" />
      <p>{name}</p>
    </li>
  )
}
export default DestinationItem
