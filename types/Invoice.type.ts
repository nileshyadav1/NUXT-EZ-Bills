import type { DatePickerModel } from "v-calendar/dist/types/src/use/datePicker";

export type InvoiceItem = {
    itemName: string;
    itemQuantity: number;
    itemPrice: number;
    itemTotal: number;
  }

export type InvoiceData = {

    invoiceCreatedDate: string | DatePickerModel,
    invoiceStatus: string,
    invoiceNumber: string,
    invoiceTitle: string,
    invoiceDescription: string,
    selectedCurrency: string,
    invoiceCustomer: string,
    includeTax: boolean,
    TaxValue: number,
    includeAdviceNote: boolean,
    AdviceNote: string,
    invoiceDueDate: string | DatePickerModel,
    invoiceItems: InvoiceItem[],
}