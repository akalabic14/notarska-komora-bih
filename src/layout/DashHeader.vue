<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/bih-logo-png-transparent.png" alt="logo">
            </router-link>
            <div class="nav-item">
                <router-link to="/user" class="nav-link" style="color: white !important;">Moji podaci</router-link>
            </div>
            <div class="nav-item" v-if="$user.is_admin || $user.is_writer">
                <router-link to="/add-news" class="nav-link" style="color: white !important;">Dodaj vijest</router-link>
            </div>
            <div class="nav-item" v-if="$user.is_admin">
                <router-link to="/users" class="nav-link" style="color: white !important;">Korisnici</router-link>
            </div>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <div @click="logout" 
                       class="btn btn-neutral btn-icon">
                        <span class="btn-inner--icon">
                        <i class="fa fa-cloud-download mr-2"></i>
                        </span>
                        <span class="nav-link-inner--text">Izloguj se</span>
                    </div>
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
  },
  methods: {
      logout() {
        this.$axios.post('/logout')
            .then(res => {
                this.$router.push('/login')
            })
            .catch(err => {
                console.error(err.toString())
            })
        }
  }
};
</script>
<style>
</style>
