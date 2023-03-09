import React, { useRef,Fragment } from "react";
import {isempty,Successtoast,Warningtoast,} from "../../helper/Vaildationhelper";

// import FullScreenLoader from "../CommonPage/loader";
import { Create } from "../../ApiServices/CRUDServices";


const CreateForm = () => {
  let ProductName, ProductCode,Image,UnitPrice,Qty,TotalPrice= useRef();

  const SaveData = () => {
    let Product_Name = ProductName.value;
    let Product_Code = ProductCode.value;
    let Product_Image = Image.value;
    let Unit_Price = UnitPrice.value;
    let Product_Qty = Qty.value;
    let Total_Price = TotalPrice.value;
    // Warningtoast("Product Name required");

    if (isempty(Product_Name)) {
      // toast.info("Display a dark notification of type info");

      Warningtoast("Product Name required");
    } else if (isempty(Product_Code)) {
      Warningtoast("Product Code required");
    } else if (isempty(Product_Image)) {
      Warningtoast("Product Image required");
    } else if (isempty(Unit_Price)) {
      Warningtoast("Unit Price required");
    } else if (isempty(Product_Qty)) {
      Warningtoast("Product Qty required");
    } else if (isempty(Total_Price)) {
      Warningtoast("Total Price required");
    } else {
      // Loader.classList.remove("d-none")
      // alert(Product_Name+Product_Code+Product_Image);
      Create( Product_Name, Product_Code,Product_Image, Unit_Price,Product_Qty, Total_Price)
      .then((result) => {
        if (result === true) {
          Successtoast("Insert success");
          ProductName.value="";
          ProductCode.value = "";
          Image.value = "";
          UnitPrice.value = "";
          Qty.value = "";
          TotalPrice.value = "";
        } else {
          // Loader.classList.add("d-none")
          Warningtoast("SomeThing is Wrong please Try again");
          
        }
      });
    }
  };
  return (
    <Fragment>
    <div className="containet">
      <div className="row justify-content-center">
        <div className="col-md-8 ">
          <div className="card my-2">
            <div className="card-header text-center">
              <h1>Create New Product</h1>
            </div>
            <div className="card-body">
              <from>
                <div className="form-group col-md-6 create_from ">
                  <label for="">ProductName:</label>
                  <input
                    type="text"
                    ref={(input) => (ProductName = input)}
                    className="form-control "
                  />
                </div>
                <div className="form-group col-md-6 create_from">
                  <label for="">ProductCode:</label>
                  <input
                    type="text"
                    ref={(input) => (ProductCode = input)}
                    className="form-control "
                  />
                </div>
                <div className="form-group col-md-6 create_from">
                  <label for="">Image:</label>
                  <input
                    type="file"
                    ref={(input) => (Image = input)}
                    className="form-control "
                  />
                </div>
                <div className="form-group col-md-6 create_from">
                  <label for="">UnitPrice:</label>
                  <input
                    type="number"
                    ref={(input) => (UnitPrice = input)}
                    className="form-control "
                  />
                </div>
                <div className="form-group col-md-6 create_from">
                  <label for="">Qty:</label>
                  <input
                    type="number"
                    ref={(input) => (Qty = input)}
                    className="form-control "
                  />
                </div>
                <div className="form-group col-md-6 create_from">
                  <label for="">TotalPrice:</label>
                  <input
                    type="number"
                    ref={(input) => (TotalPrice = input)}
                    className="form-control "
                  />
                </div>
                <div className="float-md-end mx-2">
                  <button className="btn btn-success" onClick={SaveData}>
                    Submit
                  </button>
                </div>
              </from>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="d-none" ref={(div)=>Loader=div}>
                <FullScreenLoader/>
            </div> */}
    </Fragment>
  );
  
};

export default CreateForm;
