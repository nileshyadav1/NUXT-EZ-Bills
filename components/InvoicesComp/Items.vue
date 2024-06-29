<script setup lang="ts">

import { Trash2Icon, PlusCircleIcon } from "lucide-vue-next";
import { storeToRefs } from "pinia";
import { useInvoiceStore } from "@/stores/InvoiceStore";
const invoiceStore = useInvoiceStore();
const { getCurrInvoiceStep ,invoiceDetail } = storeToRefs(invoiceStore);

interface InvoiceItem {
  itemName: string;
  itemQuantity: number;
  itemPrice: number;
  itemTotal: number;
}

const invoiceItems = reactive<InvoiceItem[]>([
  {
    itemName: "FrontEnd Development",
    itemQuantity: 2,
    itemPrice: 800.5,
    itemTotal: 0,
  },
  {
    itemName: "Backend Development",
    itemQuantity: 2,
    itemPrice: 1000.5,
    itemTotal: 0,
  },
]);

const calculateItemTotal = (item: InvoiceItem, index: number): number => {
  let { itemPrice, itemQuantity } = item;
  const itemTotal =  parseFloat((itemPrice * itemQuantity).toFixed(2)) ;

  if (itemTotal > 0) {
    invoiceItems[index]= { ...item, itemTotal };
  }

  return itemTotal;
};

const addNewInvoiceItem = (): void => {
  let obj = { itemName: "", itemQuantity: 0, itemPrice: 0, itemTotal: 0 };

  invoiceItems.push(obj);
};

const removeInvoiceItem = (index: number): void => {
  invoiceItems.splice(index, 1);
};
</script>

<template>
 <div class="pb-2">
      <div class="grid grid-cols-1 gap-4">
        <div class="grid gap-2">
          <Label for="invoiceItems" class="text-left"> Invoice Items </Label>
        </div>
        <div class="grid gap-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead class="w-[250px]"> Item </TableHead>
                <TableHead>Qty</TableHead>
                <TableHead>Price</TableHead>
                <TableHead> Total </TableHead>
                <TableHead class="w-[50px]"> </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow v-for="(item, index) in invoiceItems" :key="index">
                <TableCell class="font-medium">
                  <Input
                    :id="index + `item-name`"
                    type="text"
                    v-model="item.itemName"
                    placeholder="Item Name"
                    class=""
                  />
                </TableCell>
                <TableCell>
                  <Input
                    :id="index + `item-qty`"
                    type="number"
                    v-model="item.itemQuantity"
                    placeholder="Item Qty"
                    class=""
                /></TableCell>
                <TableCell
                  ><Input
                    :id="index + `item-price`"
                    type="number"
                    v-model="item.itemPrice"
                    placeholder="Item Price"
                    class=""
                /></TableCell>
                <TableCell>
                  {{ calculateItemTotal(item, index) }}
                </TableCell>
                <TableCell>
                  <Button
                    @click="removeInvoiceItem(index)"
                    class=""
                    variant="destructive"
                    ><Trash2Icon
                  /></Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div class="grid gap-2 place-items-center">
          <Button @click="addNewInvoiceItem" class="max-w-[200px]"
            ><PlusCircleIcon class="mr-2" /> Add New Item</Button
          >
        </div>
      </div>
    </div>
</template>
