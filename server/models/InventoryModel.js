class inventoryModel 
{
    constructor()
    {
        this.id
        this.itemsSpecification;
        this.dateOfOrder;
        this.orderedBy;
        this.deliveryDate;
        this.supervisedBy;
        this.quantity;
        this.rate;
        this.totalBill;
        this.gst;
        this.paidBy;
        this.paidAmount;
        this.pendingBillAmount;
        this.paidRemarks;
        //this.srNo;
        this.selectedUnit;
        this.selectedPaymentMode;
    }

    calculateTotalBill = () =>
    {
        if(selectedUnit.toLowerCase() == "lumpsum")
        {
           quantity = 1
        }
        return (rate * quantity)*(1 + gst/100)
    };

    calculatePendingBill = () =>
    {
        return totalBill - paidAmount

    }

    // calculateBillDetails()
    // {
    //     this.CalculateTotalBill()
    //     this.CalculatePendingBill()
    // }
}

module.exports = {
    inventoryModel : inventoryModel
    
}