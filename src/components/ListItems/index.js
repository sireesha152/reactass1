import './index.css'

const ListItems = props => {
  const {listItem, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = listItem

  const ondelete = () => {
    deleteItem(id)
  }

  return (
    <li className="container">
      <div>
        <p className="time">{timeAccessed}</p>
      </div>
      <div className="logo_details">
        <img src={logoUrl} alt="domain logo" />
        <p className="time">{title}</p>
        <p className="time">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="button1"
        data-testid="delete"
        onClick={ondelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default ListItems
