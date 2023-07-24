import React, { useEffect, useState } from "react";
import axios from "axios";

const Invoice = () => {

  const[invoivedata, setInvoicedata] = useState([]);

  useEffect(()=>{
    loadUser();
  },[])

  const loadUser = async()=>{
    const result = await axios.get("http://localhost:8080/getInvoiceDetails/manju");
    console.log(result.data[0]);
    setInvoicedata(result.data[0]);

  }
    

  return (
    <div>
      <div className="col-12">
       
        {/* Main content */}
        <div className="invoice p-3 mb-3">
          {/* title row */}
          <div className="row">
            
            {/* /.col */}
          </div>
          {/* info row */}
          <div className="row invoice-info">
            
            {/* /.col */}
            <div className="col-8 invoice-col">
              To
              <address>
                <strong>John Doe</strong>
                <br />
                795 Folsom Ave, Suite 600
                <br />
                San Francisco, CA 94107
                <br />
                Phone: (555) 539-1037
                <br />
                Email: john.doe@example.com
              </address>
            </div>
            {/* /.col */}
            <div className="col-sm-4 invoice-col">
              <b>Invoice #007612</b>
              <br />
              <br />
              <b>Order ID:</b> 4F3S8J
              <br />
              <b>Payment Due:</b> 2/22/2014
              <br />
              <b>Account:</b> 968-34567
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
          {/* Table row */}
          <div className="row">
            <div className="col-12 table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                   
                    <th>Product</th>
                    <th>ID</th>
                    <th>Description</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  
                  <tr>
                   
                    <td>Need for Speed IV</td>
                    <td>247-925-726</td>
                    <td>Wes Anderson umami biodiesel</td>
                    <td>$50.00</td>
                  </tr>
                  <tr>
                   
                    <td>Monsters DVD</td>
                    <td>735-845-642</td>
                    <td>
                      Terry Richardson helvetica tousled street art master
                    </td>
                    <td>$10.70</td>
                  </tr>
                  <tr>
                   
                    <td>Grown Ups Blue Ray</td>
                    <td>422-568-642</td>
                    <td>Tousled lomo letterpress</td>
                    <td>$25.99</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
          <div className="row">
            {/* accepted payments column */}
            <div className="col-6">
             
            </div>
            {/* /.col */}
            <div className="col-6">
             
              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    <tr>
                      <th style={{ width: "50%" }}>Subtotal:</th>
                      <td>$250.30</td>
                    </tr>
                    <tr>
                      <th>Tax:</th>
                      <td>$10.34</td>
                    </tr>
                    <tr>
                      <th>Discount:</th>
                      <td>$5.80</td>
                    </tr>
                    <tr>
                      <th>Total:</th>
                      <td>$265.24</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
          {/* this row will not appear when printing */}
          <div className="row no-print">
            <div className="col-12">
              
              
              <button
                type="button"
                className="btn btn-primary float-right"
                style={{ marginRight: 5 }}
              >
                <i className="fas fa-download" /> Generate PDF
              </button>
            </div>
          </div>
        </div>
        {/* /.invoice */}
      </div>
    </div>
  );
};

export default Invoice;
