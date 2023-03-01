<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="position-absolute w-100">
      <b-navbar-brand href="#"><img src="~/assets/img/logo.png" alt="logo"></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
   

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
               <b-navbar-nav>
          <b-nav-item href="#" class="mx-3">Products</b-nav-item>
          <b-nav-item href="#" class="mx-3">Pricing</b-nav-item>
           <b-nav-item href="#" class="mx-3">Integration</b-nav-item>
            <b-nav-item href="#" class="mx-3">Contact Us</b-nav-item>
             <b-nav-item href="#" class="mx-3">Sign In</b-nav-item>
              <b-button class="button btn--theme--white">Try It For Free</b-button>
        </b-navbar-nav>

   
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>