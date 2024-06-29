<script setup lang="ts">
import InvoiceForm from '../../../components/InvoicesComp/InvoiceForm.vue';
import InvoicePreview from '../../../components/InvoicesComp/InvoicePreview.vue';

import { storeToRefs } from "pinia";
import { useInvoiceStore } from "@/stores/InvoiceStore";
const invoiceStore = useInvoiceStore();
const { getCurrInvoiceStep  } = storeToRefs(invoiceStore);

const updateCurrStep = (step:number)=>{
  invoiceStore.currentInvoiceStep = step
}
</script>


<template>

<div class=" h-full flex-1 flex-col space-y-5 py-8 px-4  ">
    <div class="flex items-center justify-between space-y-2 ">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
         Create new Invoice
        </h2>
        <p class="text-muted-foreground">
         Get Started with a new Invoice
        </p>
      </div>

      
     
    </div>

    <Separator />


    <div class=" flex flex-wrap"> 

      <Button @click="updateCurrStep(1)" :variant="getCurrInvoiceStep != 1 ? 'secondary' : 'default'" class="mr-5">Details</Button>
      <Button @click="updateCurrStep(2)" :variant="getCurrInvoiceStep != 2 ? 'secondary' : 'default'" class="mr-5">From & To</Button>
      <Button @click="updateCurrStep(3)" :variant="getCurrInvoiceStep != 3 ? 'secondary' : 'default'" class="mr-5">Items</Button>
      <Button @click="updateCurrStep(4)" :variant="getCurrInvoiceStep != 4 ? 'secondary' : 'default'" class="mr-5">Summary</Button>

    </div>

    <div class="grid grid-cols-2 gap-4 mt-3">

        <div class=" rounded-md border p-4">

            <InvoiceForm/>
        </div>
        <div class=" rounded-md border p-4">
          <InvoicePreview/>
        </div>
    </div>


   
  </div>

</template>