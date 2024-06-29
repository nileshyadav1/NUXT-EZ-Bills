<script setup lang="ts">

</script>


<template>

<div class=" h-full flex-1 flex-col space-y-8 p-8 ">
    <div class="flex items-center justify-between space-y-2 ">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
         Your Invoices
        </h2>
        <p class="text-muted-foreground">
            Effortlessly manage and track all your invoices!
        </p>
      </div>

      <div>
        <Button @click="navigateTo(`/invoice/create`)">Create New</Button>
      </div>
      
     
    </div>

    <Separator />


   
  </div>

</template>