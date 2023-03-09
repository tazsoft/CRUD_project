const ProductsModel = require("../model/ProductsModel");

//C=Create
exports.CreateProduce = (req, res) => {
  let reqBody = req.body;
  ProductsModel.create(reqBody, (err, data) => {
    if (err) {
      res.status(404).json({ Status: "fail", Data: err });
    } else {
      res.status(200).json({ status: "success", Data: data });
    }
  });
};

//R=Read
exports.ReadProduct=(req,res)=>{
let query={};
let projection="ProductName ProductCode Img UnitPrice Qty TotalPrice"
    ProductsModel.find(query,projection,(err,data)=>{
        if (err) {
            res.status(404).json({status:"fail",Data:data});
        }else{
            res.status(200).json({status:"Success",Data:data});
        }
    })
}

//U=update
exports.UpdateProducts=(req,res)=>{
  let id=req.params.id;
  let query={_id:id};
  let reqBody=req.body;

  ProductsModel.updateOne(query,reqBody,(err,data)=>{
    if (err) {
      res.status(404).json({status:"fail",Data:data});
  }else{
      res.status(200).json({status:"Success",Data:data});
  }
  })
}

//D=delete
exports.DeleteProducts=(req,res)=>{
  let id=req.params.id;
  let query={_id:id};

  ProductsModel.deleteOne(query,(err,data)=>{
    if (err) {
      res.status(404).json({status:"fail",Data:data});
  }else{
      res.status(200).json({status:"Success",Data:data});
  }
  })
}