<template>
    <footer class="footer has-cards">
        <div class="container">
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        Notarska komora Bosne i Hercegovine, Maršala Tita 5/II, 71000 Sarajevo, Bosna i Hercegovina
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                            E-mail: komorafbih@notaribih.ba
                        </li>
                        <li class="nav-item">
                            Telefoni: (+387) 33/222-115, (+387) 33/222-116
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
</style>
