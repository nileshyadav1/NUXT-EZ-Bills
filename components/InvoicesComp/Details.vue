<script setup lang="ts">
import { CalendarIcon } from "lucide-vue-next";
import { cn } from "@/lib/utils";
import { storeToRefs } from "pinia";
import { useInvoiceStore } from "@/stores/InvoiceStore";
const invoiceStore = useInvoiceStore();
const { invoiceDetail } = storeToRefs(invoiceStore);




const getFormattedDate = (date:any)=>{
  if (date == '' ) return null;
  const inputDateObject = new Date(date);
  const day = inputDateObject.getDate().toString().padStart(2, "0");
  const month = (inputDateObject.getMonth() + 1).toString().padStart(2, "0");
  const year = inputDateObject.getFullYear();
  return day && month && year ? `${day}/${month}/${year}` : null;
}
</script>

<template>
  <div class="h-full flex-1 flex-col space-y-4 p-2">
    <div class="grid grid-cols-2 gap-4 pb-2">
      <div class="grid gap-2">
        <Label for="invoiceNumber" class="text-left"> Invoice Number </Label>
        <Input
          id="invoiceNumber"
          v-model="invoiceDetail.invoiceNumber"
          placeholder="001"
          class=""
        />
      </div>
      <div class="grid gap-2">
        <Label for="status">Status</Label>
        <Select v-model="invoiceDetail.invoiceStatus">
          <SelectTrigger id="status">
            <SelectValue placeholder="Invoice Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pending"> Pending</SelectItem>
            <SelectItem value="paid"> Paid</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <!-- Create Date Start -->
      <div class="grid gap-2">
        <Label for="InvoiceCreateDate" class="shrink-0"> Creating Date </Label>
        <Popover>
          <PopoverTrigger as-child>
            <Button
              :variant="'outline'"
              :class="
                cn(
                  'w-full justify-start text-left font-normal',
                  !getFormattedDate(invoiceDetail.invoiceCreatedDate) && 'text-muted-foreground'
                )
              "
            >
              <CalendarIcon class="mr-2 h-4 w-4" />
              <span>{{
                getFormattedDate(invoiceDetail.invoiceCreatedDate)
                  ? getFormattedDate(invoiceDetail.invoiceCreatedDate)
                  : "Invoice Create Date"
              }}</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent class="w-auto p-0">
            <Calendar v-model="invoiceDetail.invoiceCreatedDate" />
          </PopoverContent>
        </Popover>
      </div>
      <!-- Create Date End -->
      <!-- Due Date  Start -->
      <div class="grid gap-2">
        <Label for="InvoiceDueDate" class="shrink-0"> Due Date </Label>
        <Popover>
          <PopoverTrigger as-child>
            <Button
              :variant="'outline'"
              :class="
                cn(
                  'w-full justify-start text-left font-normal',
                  !getFormattedDate(invoiceDetail.invoiceDueDate) && 'text-muted-foreground'
                )
              "
            >
              <CalendarIcon class="mr-2 h-4 w-4" />
              <span>{{
                getFormattedDate(invoiceDetail.invoiceDueDate) ? getFormattedDate(invoiceDetail.invoiceDueDate) : "Invoice Due Date"
              }}</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent class="w-auto p-0">
            <Calendar v-model="invoiceDetail.invoiceDueDate" />
          </PopoverContent>
        </Popover>
      </div>
      <!-- Due Create Date End -->
    </div>
    <Separator />

    <div class="pb-2">
      <div class="grid gap-2">
        <Label for="month">Currency</Label>
        <Select v-model="invoiceDetail.selectedCurrency">
          <SelectTrigger id="currency">
            <SelectValue placeholder="Select your Currency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="INR"> INR </SelectItem>
            <SelectItem value="USD"> USD </SelectItem>
            <SelectItem value="EUR"> EUR </SelectItem>
            <SelectItem value="GBP"> GBP </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
    <div class="pb-2">
      <div class="grid grid-cols-1 gap-4">
        <div class="grid gap-2">
          <Label for="invoiceTitle" class="text-left"> Invoice title </Label>
          <Input
            id="invoiceTitle"
            placeholder="Invoice Title"
            class=""
            v-model="invoiceDetail.invoiceTitle"
          />
        </div>
        <div class="grid gap-2">
          <Label for="invoiceDescription" class="text-left">
            Invoice Description
          </Label>
          <Input
            id="invoiceDescription"
            placeholder="Invoice Description"
            class=""
            v-model="invoiceDetail.invoiceDescription"
          />
        </div>
      </div>
    </div>
  </div>
</template>
