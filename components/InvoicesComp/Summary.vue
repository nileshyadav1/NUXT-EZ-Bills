<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useInvoiceStore } from "@/stores/InvoiceStore";
const invoiceStore = useInvoiceStore();
const { getCurrInvoiceStep ,invoiceDetail } = storeToRefs(invoiceStore);


const toggleTaxCheckbox = (value: boolean): void => {
  includeTax.value = value;
};
const toggleAdviceCheckbox = (value: boolean): void => {
  includeAdviceNote.value = value;
};




const includeTax = ref(invoiceDetail.value.includeTax);
const TaxValue = ref(invoiceDetail.value.TaxValue);
const includeAdviceNote = ref(invoiceDetail.value.includeAdviceNote);
const AdviceNote = ref(invoiceDetail.value.AdviceNote);
</script>

<template>
      <div class="grid grid-cols-1 gap-4 pb-2">
        <div class="grid gap-2">
          <div class="flex items-center space-x-2">
            <Checkbox
              id="includeAdvice"
              @update:checked="toggleAdviceCheckbox"
            />
            <label
              for="includeAdvice"
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Include Advice note
            </label>
          </div>
        </div>

        <div class="grid gap-2" v-if="includeAdviceNote">
          <Label for="invoiceAdvice" class="text-left">
            Invoice Advice Note
          </Label>
          <Input
            id="invoiceAdvice"
            placeholder="Add some note information!"
            v-model="AdviceNote"
          />
        </div>
      </div>
    <div class="grid grid-cols-1 gap-4">
    
        <div class="grid gap-2">
          <div class="flex items-center space-x-2">
            <Checkbox id="includeTax" @update:checked="toggleTaxCheckbox" />
            <label
              for="includeTax"
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Include Tax
            </label>
          </div>
        </div>

        <div class="grid gap-2 " v-if="includeTax">
          <Label for="invoiceTax" class="text-left"> Tax Value (%) </Label>
          <Input
            id="invoiceTax"
            placeholder="Tax %"
            type="number"
            class="max-w-[150px]"
            v-model="TaxValue"
          />
        </div>
    </div>
</template>
