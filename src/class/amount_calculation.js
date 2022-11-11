
class amountCalulation {

    discount(amount, qty, freeqty, discount) {
        return ((amount * (qty + freeqty)) * discount) / 100;
    }

    gst(amount, qty, freeqty, discount, gst) {
        return (((amount * (qty + freeqty)) - discount) * gst) / 100;
    }
    amount(amount, qty, freeqty, discount, gst) {
        return (((amount * (qty + freeqty)) - discount) + gst)
    }

    checkNumber = (e) => {
        let numbers = /^[0-9]+$/;
        if (e.target.value.match(numbers)) {
            return true;
        }
        return false;
    }
    onlyNumberKey = (evt) => {
        if (isNaN(evt)) {
            return false;
        } else {
            return true;
        }
    }

}

export default amountCalulation;