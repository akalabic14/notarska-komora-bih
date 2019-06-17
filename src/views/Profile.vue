<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <card shadow class="card-profile" no-body>
                    <div class="px-4">
                        <div class="text-center mt-5">
                            <h3>{{korisnik.name}}
                            </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>{{korisnik.region}}</div>
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>{{korisnik.city}}, {{korisnik.address}}</div>
                        </div>
                    </div>
                </card>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            korisnik: {
                name: '',
                region: '',
                city: '',
                address: ''
            }
        }
    },
    mounted() {
        this.$axios.post(`/get-all-notars?id=${this.$route.params.id}`)
        .then(res => {
            this.korisnik = res.data;
        })
    }
};
</script>
<style>
</style>
