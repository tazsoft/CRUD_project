import axios from "axios";

export function Create(Productname,ProductCode,Img,UnitPrice,Qty,TotalPrice) {
  let URL = "/api/v1//CreateProduce";
  let PostBody = {
    ProductName: Productname,
    ProductCode: ProductCode,
    Img: Img,
    UnitPrice: UnitPrice,
    Qty: Qty,
    TotalPrice: TotalPrice,
  };
  

  return axios.post(URL, PostBody)
  .then((res)=>{
    if (res==='200') {
      return true
    }else{
      return false;
    }
  })
  .catch((err)=>{
    console.log(err);
    return false;
  });
}

export function Read() {
  const url = "/api/v1//ReadProduct";
  return axios.get(url)
  .then((res)=>{
    if (res==='200') {
      return res.data['Data'];
    }else{
      return false;
    }
  }).catch((err)=>{
    console.log(err);
    return false;
  });
}

export function Update(id,Productname,ProductCode,Img,UnitPrice,Qty,TotalPrice) {
  const URL = "/api/v1/UpdateProducts" + id;
  const PostBody = {
    ProductName: Productname,
    ProductCode: ProductCode,
    Img: Img,
    UnitPrice: UnitPrice,
    Qty: Qty,
    TotalPrice: TotalPrice,
  };
  return axios.post(URL,PostBody)
  .then((res)=>{
    if (res==='200') {
      return true
    }else{
      return false
    }
  }).catch((err)=>{
    console.log(err);
    return false;
  });
}

export function Delete(id) {
 let URL = "/api/v1/DeleteProducts" + id;
  return axios.post(URL) 
  .then((res)=>{
    if (res==='200') {
      return true
    }else{
      return false
    }
  }).catch((err)=>{
    console.log(err);
    return false;
  });
}
