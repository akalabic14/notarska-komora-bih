<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/bih-logo-png-transparent.png" alt="logo">
            </router-link>
            <div class="nav-item">
                <router-link to="/search" class="nav-link" style="color: white !important;">Spisak notara</router-link>
            </div>
            <div class="nav-item">
                <router-link to="/news" class="nav-link" style="color: white !important;">Vijesti</router-link>
            </div>
            <div class="nav-item">
                <router-link to="/contact" class="nav-link" style="color: white !important;">Kontakt</router-link>
            </div>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <router-link to="/login" 
                       class="btn btn-neutral btn-icon">
                <span class="btn-inner--icon">
                  <i class="fa fa-cloud-download mr-2"></i>
                </span>
                        <span class="nav-link-inner--text">Uloguj se</span>
                    </router-link>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style>
</style>
