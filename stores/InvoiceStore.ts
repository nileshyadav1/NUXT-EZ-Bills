import { defineStore } from "pinia";
import type { InvoiceData } from "@/types/Invoice.type";

interface InvoiceState {
  invoiceDetail: InvoiceData;
  currentInvoiceStep: number;
}

export const useInvoiceStore = defineStore('invoiceStore', {
  state: (): InvoiceState => ({
    invoiceDetail: {
      invoiceCreatedDate: "",
      invoiceStatus: "",
      invoiceNumber: "12",
      invoiceTitle: "",
      invoiceDescription: "",
      selectedCurrency: "",
      invoiceCustomer: "",
      includeTax: false,
      TaxValue: 0,
      includeAdviceNote: false,
      AdviceNote: "",
      invoiceDueDate: "",
      invoiceItems: [],
    },
    currentInvoiceStep: 1,
  }),
  
  getters: {
    getInvoiceData: (state: InvoiceState) => state.invoiceDetail,
    // getCurrInvoiceStep: (state: InvoiceState) => state.currentInvoiceStep,
    getCurrInvoiceStep():number{
        return this.currentInvoiceStep
    }
  },

  actions: {
    setInvoiceDetail(invoiceDataPayload: InvoiceData) {
      this.invoiceDetail = { ...invoiceDataPayload };
    },
  },
});

