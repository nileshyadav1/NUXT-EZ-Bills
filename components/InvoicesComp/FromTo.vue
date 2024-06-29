<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useInvoiceStore } from "@/stores/InvoiceStore";
const invoiceStore = useInvoiceStore();
const {  invoiceDetail } = storeToRefs(invoiceStore);


// Dummy Data Start
const customers = ref([{ name: "client 1" }, { name: "client 2" }]);

// Dummy Data End


const invoiceCustomer = ref(invoiceDetail.value.invoiceCustomer);

</script>

<template>
<div class="grid grid-cols-1 gap-4">
        <div class="grid gap-2">
          <Label for="month">Customer</Label>
          <Select v-model="invoiceCustomer">
            <SelectTrigger id="currency">
              <SelectValue placeholder="Select your Customer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                v-for="(client, index) in customers"
                :key="index"
                :value="client.name"
              >
                {{ client.name }}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

</template>
