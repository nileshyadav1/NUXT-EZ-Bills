<script setup lang="ts">
import { PlusCircleIcon } from "lucide-vue-next";
import { Loader2 } from "lucide-vue-next";
import { useToast } from "@/components/ui/toast/use-toast";
const { toast } = useToast();
const clientName = ref("");
const clientEmail = ref("");
const clientAddress = ref("");
const clientCity = ref("");
const clientZipCode = ref("");
const clientCountry = ref("");
const isLoading = ref(false);
const closeDialogBtn = ref<HTMLButtonElement | null>(null);;
const isFormValid = computed(() => {
  return (
    clientName.value !== "" &&
    clientEmail.value !== "" &&
    clientAddress.value !== "" &&
    clientCity.value !== "" &&
    clientZipCode.value !== "" &&
    clientCountry.value !== ""
  );
});

const resetForm = ()=>{
    clientName.value = "" 
    clientEmail.value = "" 
    clientAddress.value = "" 
    clientCity.value = "" 
    clientZipCode.value = "" 
    clientCountry.value = ""
}


const handleToast = (title: string, description: string): void => {
  toast({
    title: title,
    description: description,
  });
};

const createNewClient = async () => {
  try {

    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (clientEmail.value && !regex.test(clientEmail.value)) {
        handleToast('Uh oh! Something went wrong.','Customer Email is invalid!')
    return;
  }
    isLoading.value = true;
    const payload = {
        clientName : clientName.value,
clientEmail : clientEmail.value,
clientAddress : clientAddress.value,
clientCity : clientCity.value,
clientZipCode : clientZipCode.value,
clientCountry : clientCountry.value
    }
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    // console.log("REsponse", response.json())
    let data = await response.json();

    console.log("DAtar", data);
    resetForm()
    console.log("fsdfsdfdsgsdg",closeDialogBtn.value)
    closeDialogBtn.value?.dispatchEvent(new Event('click'))
    handleToast("Data feches", "sdfsdfgsgs");
    

  } catch (error) {
    if (error) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button>
        <PlusCircleIcon class="mr-2 h-4 w-4" />
        Create Customer
      </Button>
    </DialogTrigger>
    <DialogContent class="max-w-[800px]">
      <DialogHeader>
        <DialogTitle>Create New Customer</DialogTitle>
        <DialogDescription>
          Fill in the customer details. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <ScrollArea class="h-[510px] w-full px-2">
        <div class="grid gap-2 py-2 px-8">
          <Label for="clientName" class="text-left"> Name </Label>
          <Input
            id="clientName"
            v-model="clientName"
            placeholder="John Doe"
            class=""
          />
        </div>
        <div class="grid gap-2 py-2 px-8">
          <Label for="clientEmail" class="text-left"> Email </Label>
          <Input
            id="clientEmail"
            v-model="clientEmail"
            placeholder="johndoe@example.com"
            class=""
          />
        </div>
        <div class="grid gap-2 py-2 px-8">
          <Label for="clientAddress" class="text-left"> Address </Label>
          <Input
            id="clientAddress"
            placeholder="123 Main St, Cityville, State"
            class=""
            v-model="clientAddress"
          />
        </div>
        <div class="grid gap-2 py-2 px-8">
          <Label for="clientCity" class="text-left"> City </Label>
          <Input
            id="clientCity"
            v-model="clientCity"
            placeholder="Mumbai"
            class=""
          />
        </div>
        <div class="grid gap-2 py-2 px-8">
          <Label for="clientZipCode" class="text-left"> Zip Code </Label>
          <Input
            id="clientZipCode"
            v-model="clientZipCode"
            placeholder="400091"
            class=""
          />
        </div>
        <div class="grid gap-2 py-2 px-8">
          <Label for="clientCountry" class="text-left"> Country </Label>
          <Input
            id="clientCountry"
            v-model="clientCountry"
            placeholder="India"
            class=""
          />
        </div>
      </ScrollArea>
      <DialogFooter>
        <DialogClose as-child class=" ">
          <Button type="button" ref="closeDialogBtn" variant="secondary">
            Close
          </Button>
        </DialogClose>
        <Button @click="createNewClient" :disabled="!isFormValid">
          <span v-if="!isLoading">Save</span>
          <div v-else>
            <Loader2 class="w-4 h-4 mr-2 animate-spin" />
          </div>
        </Button>
        
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
