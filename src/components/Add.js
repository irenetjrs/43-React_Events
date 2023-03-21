import React, {useState} from "react";

const Add = (props) => {
   const [newProducts, setNewProducts] = useState(
      {name: '', 
      price: 0.01, 
      id: 3}
   )
   const [nameValid, setNameValid] = useState(true);
   const [priceValid, setPriceValid] = useState(true)

   const changeName = (e) => {
      setNewProducts((prev) => ({ ...prev, name: e.target.value }));
   };

   const changePrice = (e) => {
      setNewProducts((prev) => ({ ...prev, price: e.target.value }));
   };

   const nameValidation = () => {
      if(newProducts.name.length <= 1 || newProducts.name.trim() === ''){
         setNameValid(false);
         return;
      }
         setNameValid(true);
      };   
   const priceValidation = () => {
      if(newProducts.price <= 0){
      setPriceValid(false);
      return;
      }
      setPriceValid(true);
   };

   const addProducts = () => {
      props.onAddProduct(newProducts, setNewProducts, nameValid, setNameValid, priceValid, setPriceValid)
   }

return (
   <div className="add">
      <label>Product name</label>
         <input 
            onInput={changeName} 
            type="text"
            value={newProducts.name}
            onBlur={nameValidation}
            className={nameValid ? "" : "invalid"}
         />
      <label>Product price</label>
         <input 
            onInput={changePrice} 
            type="number" 
            onBlur={priceValidation}
            value={newProducts.price}
            className={priceValid ? "" : "invalid"}
         />
      <button 
         onClick={addProducts} 
         type="button">
            Add
      </button>
   </div>
)
}
export default Add;