
<script setup lang="ts">
// import {useInvoiceStore} from "@/stores/InvoiceStore"
// const invoiceStore = useInvoiceStore()
import Details from "./Details.vue";
import FromTo from "./FromTo.vue";
import Items from "./Items.vue";
import Summary from "./Summary.vue";
import { storeToRefs } from "pinia";
import { useInvoiceStore } from "@/stores/InvoiceStore";
const invoiceStore = useInvoiceStore();
const { getCurrInvoiceStep ,currentInvoiceStep } = storeToRefs(invoiceStore);


const handleStep = (step:number)=>{
  if(invoiceStore.currentInvoiceStep <=4){
    invoiceStore.currentInvoiceStep += step
  }
  
}
</script>

<template>
  <div class="h-full flex flex-col  p-2 ">
    <div class="flex-1 h-full  space-y-4 ">
      <Details v-if="getCurrInvoiceStep === 1" />
    <FromTo v-if="getCurrInvoiceStep === 2" />
    <Items v-if="getCurrInvoiceStep === 3" />
    <Summary v-if="getCurrInvoiceStep === 4" />
    </div>

    <div class=" flex justify-end">
      <Button @click="handleStep(-1)" :disabled="getCurrInvoiceStep == 1" class="mx-5" variant="outline">Back</Button>
      <Button @click="handleStep(1)">Next</Button>
    </div>
    
  </div>
</template>
