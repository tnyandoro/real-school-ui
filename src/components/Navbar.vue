<template>
  <!-- component -->
  <nav class="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">

    <div class="mb-2 sm:mb-0 flex flex-row
    ">
      <div class="h-10 w-10 self-center mr-2">
        <img class="h-10 w-10 self-center" src="@/assets/logo.jpeg" />
      </div>
      <div>
        <a href="/home" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">The Real Estate Institute of Zimbabwe</a><br>
        <span class="text-xs text-grey-dark"></span>
      </div>
    </div>

    <div class="sm:mb-0 self-center">
      <!-- <div class="h-10" style="display: table-cell, vertical-align: middle;"> -->
      <a href="#" class="text-md no-underline text-black hover:text-blue-dark ml-2 px-1">Guest</a>
      <a href="#" class="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">Register</a>
      <!-- <a href="/two" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">About Us</a> -->
      <a href="#" class="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">Login</a>
      <!-- </div> -->

    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      isSticky: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Check if we should make the navbar sticky
      if (window.pageYOffset > 0) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    }
  }
};
</script>

