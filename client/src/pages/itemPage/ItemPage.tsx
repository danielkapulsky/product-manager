import { useParams } from "react-router-dom"
import "./ItemPage.scss"

const ItemPage = () => {
  const {id} = useParams();

  return (
    <div className="item-container">
          <ul>
          </ul>
    </div>
  )
}

export default ItemPage