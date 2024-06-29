<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})
// import UserAuthForm from './components/UserAuthForm.vue'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
// import { useRouter } from 'vue-router';
const isLoading = ref(false);

const emailAdd = ref('')
const password = ref('')

// const router = useRouter()

async function onSubmit(event: Event) {
  event.preventDefault();
  isLoading.value = true;


  try {
    isLoading.value = true;
    console.log("NAme email ",emailAdd.value , "PAss",password.value)
    // const {  error } = await supabase.auth.signInWithPassword({
    //     email: emailAdd.value,
    //     password: password.value,
    //   });

    // if (error) {
    //   console.log("Login Error",error)
    //   throw error;
    // }

    // router.push({ name: 'Home' })

  } catch (error) {
    localStorage.removeItem('redirectRoute');
    console.error(error);
    alert('Something went wrong! Check the console for more details');
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>



  <div class="container relative  h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
    <NuxtLink
      to="/register"
      :class="cn(
        buttonVariants({ variant: 'ghost' }),
        'absolute right-4 top-4 md:right-8 md:top-8',
      )"
    >
     Don't have an account yet ? Sign Up!
    </NuxtLink>
    <div class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
      <div class="absolute inset-0 bg-zinc-900" />
      <div class="relative z-20 flex items-center text-lg font-medium">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="mr-2 h-6 w-6"
        >
          <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
        </svg>
        Ez Bills
      </div>
      <div class="relative z-20 mt-auto">
        <blockquote class="space-y-2">
          <p class="text-lg">
            &ldquo;A simple to app create an invoice and store it digitally as well as generate and send it to any client!&rdquo;
          </p>
          <footer class="text-sm">
            Made with Nuxt3  + Shadcn-vue + Supabse
          </footer>
        </blockquote>
      </div>
    </div>
    <div class="lg:p-8">
      <div class="mx-auto  flex w-full flex-col justify-center h-screen md:h-full  space-y-6 sm:w-[350px]">
        <div class="flex flex-col space-y-2 text-center">
          <h1 class="text-2xl font-semibold tracking-tight">
            Login to your account
          </h1>
          <p class="text-sm text-muted-foreground">
            Enter your details below to login your account
          </p>
        </div>
        
          <!-- USer Auth Form Start -->
  <div :class="cn('grid gap-6', $attrs.class ?? '')">
    <form @submit="onSubmit">
      <div class="grid gap-2">
        <div class="grid gap-1">
          <Label class="sr-only" for="email"> Email </Label>
          <Input
            id="email"
            v-model="emailAdd"
            placeholder="name@example.com"
            type="email"
            auto-capitalize="none"
            auto-complete="email"
            auto-correct="off"
            :disabled="isLoading"
          />
        </div>
        <div class="grid gap-1">
          <Label class="sr-only" for="login-pass"> Passowrd </Label>
          <Input
            id="login-pass"
            v-model="password"
            placeholder="password"
            type="password"
            :disabled="isLoading"
          />
        </div>
        <Button :disabled="isLoading">
            <!-- <LoadingSpinner v-if="isLoading" class="mr-2 "/> -->
          Sign In with Email
        </Button>
      </div>
    </form>
    <div class="relative">
      <div class="absolute inset-0 flex items-center">
        <span class="w-full border-t" />
      </div>
      <div class="relative flex justify-center text-xs uppercase">
        <span class="bg-background px-2 text-muted-foreground">
          Or continue with
        </span>
      </div>
    </div>
  </div>
  <!-- User login Form End --> 
        <p class="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our
          <NuxtLink
            to="/login"
            class="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </NuxtLink>
          and
          <NuxtLink
            to="/login"
            class="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </NuxtLink>
          .
        </p>
      </div>
    </div>
  </div>
</template>