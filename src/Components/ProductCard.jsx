import { useDataContext } from "../DataContextProvider";

const ProductCard=({product})=>{
   const {dataDispatch}=useDataContext()
const {name, author , image, shelf,id}=product;

const handleShelfChange=(e,itemId)=>{
   dataDispatch({type:'UPDATE_SHELF' ,payload:{id:itemId, shelf:e.target.value}})
   console.log(e.target.value)
}
return(
    <div className="product-card">

     <div className="img-container">
        <img className="card-img" src={image} alt={name} />
     </div>
     <div className="info">
        <p className="name">{name}</p>
        <p className="author">{author}</p>
        <select name="shelf" id="" value={shelf} onChange={(e)=>handleShelfChange(e,id)}>
         <option value="none">None</option>
         <option value="currently reading">currently reading</option>
         <option value="want to read">want to read</option>
         <option value="read">read</option>
        </select>
     </div>
    </div>
)
}

export default ProductCard;