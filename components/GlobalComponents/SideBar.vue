

<script setup lang="ts">
import { LogOutIcon , LayoutDashboardIcon , UsersIcon , ReceiptIcon} from 'lucide-vue-next'

const isDark = ref<boolean | null>(null);
const toggleDark = () => {
  if(process.client){
    const bodyElement = document.querySelector("body");
  if (bodyElement) {
    bodyElement.classList.toggle("dark");
    isDark.value = bodyElement.classList.contains("dark");
  }
  }
 
};
onMounted(() => {
      if (typeof document !== 'undefined') {
        isDark.value = document.body.classList.contains('dark');
      }
    });
</script>

<template>
  <aside class="sticky left-0 top-0 z-40 h-screen w-64 transition-transform">

    <div class="flex h-full flex-col iverflow-y-auto border-r border-slate-200  px-3 py-4">

      <div class="mb-2  flex item-center rounded-lg px-3 py-2 ">
        <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path></svg>
        <span class="ml-3  font-semibold">EZ Bills</span>
      </div>

      <Separator class="my-2" />


      <ul class="space-y-2 text-sm font-medium">
        <li>
          <NuxtLink to="/" class="flex items-center rounded-lg px-3 py-2 " :class="[
        { 'bg-muted hover:bg-muted': $route.path === `/` },
      ]">
            <LayoutDashboardIcon/>
            <span class="ml-3 flex-1 whitespace-nowrap">Dashboard</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/customers" class="flex items-center rounded-lg px-3 py-2 " :class="[
        { 'bg-muted hover:bg-muted': $route.path === `/customers` },
      ]">
          <UsersIcon/>
            <span class="ml-3 flex-1 whitespace-nowrap">Customers</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/invoice" class="flex items-center rounded-lg px-3 py-2 " :class="[
        { 'bg-muted hover:bg-muted': $route.path.includes(`/invoice`) },
      ]">
           <ReceiptIcon/>
            <span class="ml-3 flex-1 whitespace-nowrap">Invoices</span>
          </NuxtLink>
        </li>
      </ul>

      <div class="mt-auto ">


        <div class="flex w-full items-center  px-3 py-2">
          <Avatar>
    <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>

  <div class="flex flex-col space-y-1 ml-3 overflow-x-hidden">
          <p class="text-sm font-medium leading-none">
            shadcn
          </p>
          <p class="text-xs leading-none text-muted-foreground truncate">
            m@example.comasdasdasdasdsfdfsdsdfds
          </p>
        </div>
        </div>

        
        <div class="flex   px-3 py-2">

<Button @click="toggleDark"  class="" variant="ghost">
  <svg
    v-if="isDark"
    viewBox="0 0 15 15"
    width="1.2em"
    height="1.2em"
    class="w-5 h-5 text-foreground"
  >
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M7.5 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5ZM2.197 2.197a.5.5 0 0 1 .707 0L4.318 3.61a.5.5 0 0 1-.707.707L2.197 2.904a.5.5 0 0 1 0-.707ZM.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm1.697 5.803a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707l-1.414 1.414a.5.5 0 0 1-.707 0ZM12.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-1.818-2.682a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707L11.39 4.318a.5.5 0 0 1-.707 0ZM8 12.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Zm2.682-1.818a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 1 1-.707.707l-1.414-1.414a.5.5 0 0 1 0-.707ZM5.5 7.5a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm2-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"
      clip-rule="evenodd"
    ></path>
  </svg>

  <svg
    v-else
    viewBox="0 0 15 15"
    width="1.2em"
    height="1.2em"
    class="w-5 h-5 text-foreground"
  >
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M2.9.5a.4.4 0 0 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6V.5Zm3 3a.4.4 0 1 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6v-.6Zm-4 3a.4.4 0 1 0-.8 0v.6H.5a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 0 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6v-.6ZM8.544.982l-.298-.04c-.213-.024-.34.224-.217.4A6.57 6.57 0 0 1 9.203 5.1a6.602 6.602 0 0 1-6.243 6.59c-.214.012-.333.264-.183.417a6.8 6.8 0 0 0 .21.206l.072.066l.26.226l.188.148l.121.09l.187.131l.176.115c.12.076.244.149.37.217l.264.135l.26.12l.303.122l.244.086a6.568 6.568 0 0 0 1.103.26l.317.04l.267.02a6.6 6.6 0 0 0 6.943-7.328l-.037-.277a6.557 6.557 0 0 0-.384-1.415l-.113-.268l-.077-.166l-.074-.148a6.602 6.602 0 0 0-.546-.883l-.153-.2l-.199-.24l-.163-.18l-.12-.124l-.16-.158l-.223-.2l-.32-.26l-.245-.177l-.292-.19l-.321-.186l-.328-.165l-.113-.052l-.24-.101l-.276-.104l-.252-.082l-.325-.09l-.265-.06l-.292-.053Zm1.86 4.318a7.578 7.578 0 0 0-.572-2.894a5.601 5.601 0 1 1-4.748 10.146a7.61 7.61 0 0 0 3.66-2.51a.749.749 0 0 0 1.355-.442a.75.75 0 0 0-.584-.732c.062-.116.122-.235.178-.355A1.25 1.25 0 1 0 10.35 6.2c.034-.295.052-.595.052-.9Z"
      clip-rule="evenodd"
    ></path>
  </svg>
</Button>
<Button variant="ghost" class="">
<LogOutIcon class="mr-3"/>
Logout
</Button>
</div>
       
      </div>

    </div>
   
  </aside>
</template>


<!-- <script setup lang="ts">
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

</script>

<template>
  <div :class="cn('pb-12', $attrs.class ?? '')">
    <div class="space-y-4 py-4">
      <div class="px-3 py-2">
        <h2 class="mb-2 px-4 text-lg font-semibold tracking-tight">
          Discover
        </h2>
        <div class="space-y-1">
          <Button variant="secondary" class="w-full justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="mr-2 h-4 w-4"
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
            Listen Now
          </Button>
          <Button variant="ghost" class="w-full justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="mr-2 h-4 w-4"
            >
              <rect width="7" height="7" x="3" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="14" rx="1" />
              <rect width="7" height="7" x="3" y="14" rx="1" />
            </svg>
            Browse
          </Button>
          <Button variant="ghost" class="w-full justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="mr-2 h-4 w-4"
            >
              <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
              <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
              <circle cx="12" cy="12" r="2" />
              <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
              <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
            </svg>
            Radio
          </Button>
        </div>
      </div>
      <div class="px-3 py-2">
        <h2 class="mb-2 px-4 text-lg font-semibold tracking-tight">
          Library
        </h2>
        <div class="space-y-1">
          <Button variant="ghost" class="w-full justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="mr-2 h-4 w-4"
            >
              <path d="M21 15V6" />
              <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              <path d="M12 12H3" />
              <path d="M16 6H3" />
              <path d="M12 18H3" />
            </svg>
            Playlists
          </Button>
          <Button variant="ghost" class="w-full justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="mr-2 h-4 w-4"
            >
              <circle cx="8" cy="18" r="4" />
              <path d="M12 18V2l7 4" />
            </svg>
            Songs
          </Button>
          <Button variant="ghost" class="w-full justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="mr-2 h-4 w-4"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Made for You
          </Button>
          <Button variant="ghost" class="w-full justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="mr-2 h-4 w-4"
            >
              <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
              <circle cx="17" cy="7" r="5" />
            </svg>
            Artists
          </Button>
          <Button variant="ghost" class="w-full justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="mr-2 h-4 w-4"
            >
              <path d="m16 6 4 14" />
              <path d="M12 6v14" />
              <path d="M8 8v12" />
              <path d="M4 4v16" />
            </svg>
            Albums
          </Button>
        </div>
      </div>
      <div class="py-2">
        <h2 class="relative px-7 text-lg font-semibold tracking-tight">
          Playlists
        </h2>
        
      </div>
    </div>
  </div>
</template> -->