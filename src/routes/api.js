const express=require('express');
const productscontroller=require("../controller/productscontroller")
const router=express.Router();

//Api end point
//C=Create
router.post("/CreateProduce",productscontroller.CreateProduce);

//R=Read
router.get("/ReadProduct",productscontroller.ReadProduct);

//U=Update
router.post("/UpdateProducts/:id",productscontroller.UpdateProducts);

//D=Delete
router.post("/DeleteProducts/:id",productscontroller.DeleteProducts);
module.exports=router;