import { useState } from "react";
import amountCalulation from "../class/amount_calculation";
let amt = new amountCalulation();

const ProductAmaount = () => {

    const [amount, setAmount] = useState();
    const [quantity, setQuantity] = useState();
    const [freeqty, setFreeqty] = useState(0);
    const [gst, setGst] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [allitems, setallitems] = useState([]);



    function calculateTotalAmount(e) {
        let value = e.target.value;
        let num_value = amt.onlyNumberKey(value);
        if (num_value) {
            if (e.target.name === "amount") {
                setAmount(value);
            } else if (e.target.name === 'qty') {
                setQuantity(value);
            } else if (e.target.name === 'freeqty') {
                setFreeqty(value);
            } else if (e.target.name === 'gst') {
                setGst(value);
            } else if (e.target.name === 'discount') {
                setDiscount(value);
            }
        }
    }

    let discount_amt = amt.discount(parseFloat(amount), parseFloat(quantity), parseFloat(freeqty), parseFloat(discount));
    let gst_amt = amt.gst(parseFloat(amount), parseFloat(quantity), parseFloat(freeqty), parseFloat(discount_amt), parseFloat(gst));
    let total_amt = amt.amount(parseFloat(amount), parseFloat(quantity), parseFloat(freeqty), parseFloat(discount_amt), parseFloat(gst_amt));
    if (isNaN(total_amt)) {
        total_amt = 0;
    }

    const addItems = () => {
        if (total_amt > 0) {
            setallitems([
                ...allitems,
                {
                    amount: amount,
                    quantity: quantity,
                    freeqty: freeqty,
                    gst_per: gst,
                    discount_per: discount,
                    gst_amt: gst_amt,
                    dis_amt: discount_amt,
                    total_amt: total_amt.toFixed(2)
                }
            ])

            setAmount('');
            setQuantity('');
            setFreeqty(0);
            setGst(0);
            setDiscount(0);

        } else {
            alert('Enter all details');
        }
    }

    const delete_item = (e) => {
        setallitems(allitems.filter((value, index) => {
            if (index !== parseInt(e.target.name)) {
                return value;
            }
        })
        )
    }


    return (
        <div className="fluid-container my-md-5">
            <div className="container">
                <div className="row">
                    <h1 className="text-center text-primary py-md-5 fs-2 fw-bold">Calculate Product Price </h1>
                </div>

                {
                    allitems.map((val, index) => {
                        return <div className="row">
                            <div className="col-2">
                                <div class="mb-3">
                                    <input type="text" name="amount" value={val.amount} className="form-control" placeholder="Enter Price" autoComplete="off" disabled />
                                </div>
                            </div>
                            <div className="col-2">
                                <input type="text" name="qty" value={val.quantity} className="form-control" placeholder=" Enter QTY" autoComplete="off" disabled />
                            </div>
                            <div className="col-2">
                                <input type="text" name="freeqty" value={val.freeqty} className="form-control" placeholder="Enter Free QTY" autoComplete="off" disabled />
                            </div>
                            <div className="col-2">
                                <input type="text" name="gst" value={val.gst_per} className="form-control" placeholder=" GST" autoComplete="off" disabled />
                            </div>
                            <div className="col-1">
                                <input type="text" name="discount" value={val.discount_per} className="form-control" placeholder="Dis" autoComplete="off" disabled />
                            </div>
                            <div className="col-2">
                                <input type="text" value={val.total_amt} className="form-control" placeholder="" disabled />
                            </div>
                            <div className="col-1">
                                <button type="button" className="btn btn-primary" name={index} onClick={delete_item}>Delete</button>
                            </div>
                        </div>
                    })
                }

                <div className="row">
                    <div className="col-2">
                        <div class="mb-3">
                            <input type="text" name="amount" value={amount} onChange={calculateTotalAmount} className="form-control" placeholder="Enter Price" autoComplete="off" />
                        </div>
                    </div>
                    <div className="col-2">
                        <input type="text" name="qty" value={quantity} onChange={calculateTotalAmount} className="form-control" placeholder=" Enter QTY" autoComplete="off" />
                    </div>
                    <div className="col-2">
                        <input type="text" name="freeqty" value={freeqty} onChange={calculateTotalAmount} className="form-control" placeholder="Enter Free QTY" autoComplete="off" />
                    </div>
                    <div className="col-2">
                        <input type="text" name="gst" value={gst} onChange={calculateTotalAmount} className="form-control" placeholder=" GST" autoComplete="off" />
                    </div>
                    <div className="col-1">
                        <input type="text" name="discount" value={discount} onChange={calculateTotalAmount} className="form-control" placeholder="Dis" autoComplete="off" />
                    </div>
                    <div className="col-2">
                        <input type="text" value={total_amt.toFixed(2)} className="form-control" placeholder="" disabled />
                    </div>
                    <div className="col-1">
                        <button type="button" className="btn btn-primary" onClick={addItems}>Add</button>
                    </div>
                </div>

            </div>
        </div>
    )
    
}

export default ProductAmaount;