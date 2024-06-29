<script setup lang="ts">
import type { InvoiceItem } from "@/types/Invoice.type";
import { storeToRefs } from "pinia";
import { useInvoiceStore } from "@/stores/InvoiceStore";
const invoiceStore = useInvoiceStore();

const { getInvoiceData } = storeToRefs(invoiceStore);
const invoiceData = computed(() => getInvoiceData.value);

const calculateItemTotal = (item: InvoiceItem): number => {
  let { itemPrice, itemQuantity } = item;
  return parseFloat((itemPrice * itemQuantity).toFixed(2));
};

const currentSelectedCurrency = computed(() => {
  const selectedCurrency = invoiceData.value.selectedCurrency;

  switch (selectedCurrency) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    case "GBP":
      return "£";
    case "INR":
      return "₹";
    default:
      return "$";
  }
});
const invoiceDate = computed(() => {
  let { invoiceCreatedDate } = invoiceData.value;
  return invoiceCreatedDate ? invoiceCreatedDate : "";
});
const invoiceNumber = computed(() => {
  return invoiceData.value.invoiceNumber;
});
const dueDate = computed(() => {
  let { invoiceDueDate } = invoiceData.value;
  return invoiceDueDate ? invoiceDueDate : "";
});

const calculateNetTotal = computed(() => {
  let { includeTax, invoiceItems, TaxValue } = invoiceData.value;

  const ItemsTotal = invoiceItems.reduce(
    (acc, item) => acc + item.itemPrice * item.itemQuantity,
    0
  );
  const netTotal = includeTax
    ? (TaxValue / 100) * ItemsTotal + ItemsTotal
    : ItemsTotal;
  return parseFloat(netTotal.toFixed(2));
});

const getFormattedDate = (date: any) => {
  if (date == "") return null;
  const inputDateObject = new Date(date);
  const day = inputDateObject.getDate().toString().padStart(2, "0");
  const month = (inputDateObject.getMonth() + 1).toString().padStart(2, "0");
  const year = inputDateObject.getFullYear();
  return day && month && year ? `${day}/${month}/${year}` : null;
};
</script>

<template>
  <div class="flex-1 flex-col space-y-8 p-8 bg-teal-100">
    <div class="h-full w-full px-4">
      <div class="flex justify-between">
        <div>
          <p class="pb-2 text-4xl">MB Road apples</p>
          <p class="text-sm text-gray-400">4520 Wood Duck Drive</p>
          <p class="text-sm text-gray-400">Marquette Michigan 49855</p>
        </div>
        <div>
          <img src="https://logo.clearbit.com/react.com" />
        </div>
      </div>
      <div class="flex justify-between pt-16">
        <div>
          <p>{{ getFormattedDate(invoiceDate) }}</p>
          <p class="pb-3 text-4xl font-bold">INVOICE</p>
          <p class="text-sm font-bold">
            INVOICE NO.
            <span class="pl-1 font-normal">{{ invoiceNumber }}</span>
          </p>
          <p class="text-sm font-bold">
            DUE DATE:
            <span class="pl-1 font-normal">{{
              getFormattedDate(dueDate)
            }}</span>
          </p>
        </div>
        <div class="pl-2 text-right">
          <p class="text-gray-400">CLIENT</p>
          <p class="font-bold">Tony Stark</p>
          <p class="text-sm">Avengers Mansion</p>
          <p class="text-sm">890 Fifth Avenue</p>
          <p class="text-sm">Manhattan New York 10004</p>
        </div>
      </div>
      <div class="pt-16">
        <table class="w-full table-auto text-sm">
          <thead class="border-b-2">
            <tr class="h-10 text-left">
              <th>ITEM</th>
              <th>QUANTITY</th>
              <th>PRICE €</th>
              <th class="text-right">TOTAL €</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="h-10"
              v-for="(item, index) in invoiceData.invoiceItems"
              :key="index"
            >
              <td>{{ item.itemName }}</td>
              <td>{{ item.itemQuantity }}</td>
              <td>{{ currentSelectedCurrency }}{{ item.itemPrice }}</td>
              <td class="text-right">
                {{ currentSelectedCurrency }}{{ calculateItemTotal(item) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex justify-end">
        <p class="pt-6 text-xl font-bold">
          {{ currentSelectedCurrency }}{{ calculateNetTotal }}
        </p>
      </div>
      <div class="pt-16 text-sm">
        <p class="font-bold">PAYMENT ADVICE</p>
        <p>Account name: MB Road apples</p>
        <p>Bank name: Hello World</p>
        <p>IBAN: GB95BARC20038428989175</p>
      </div>
    </div>
  </div>
</template>
