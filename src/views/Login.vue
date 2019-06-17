<template>
    <section class="section section-shaped section-lg my-0">
        <base-alert type="danger" icon="ni ni-support-16" dismissible :visible="error.show">
            <span slot="text"><strong>Greška!</strong> {{error.message}}!</span>
        </base-alert>
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
                <div class="col-lg-5">
                    <card gradient="secondary" shadow body-classes="p-lg-5">
                        <h4 class="mb-1">Uloguj se</h4>
                        <br>
                        <br>
                        <base-input alternative
                                    class="mb-3"
                                    placeholder="Korisničko ime"
                                    addon-left-icon="ni ni-email-83"
                                    v-model="username">
                        </base-input>
                        <base-input alternative
                                    type="password"
                                    placeholder="Šifra"
                                    addon-left-icon="ni ni-lock-circle-open"
                                    v-model="password">
                        </base-input>
                        <base-button type="default" round block size="lg" @click="login">
                            Prijavi se
                        </base-button>
                    </card>
                    <div class="row mt-3">
                        <div class="col-6">
                            <a href="#" class="text-light">
                                <small>Zaboravili ste sifru?</small>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            error: {
                show: false,
                message: ''
            },
            defaultError: {
                show: false,
                message: ''
            }
        }
    },
    methods: {
        login () {
            this.$axios.post('/login', {username: this.username, password: this.password})
            .then(res => {
                if (res.data.error) {
                    this.pokaziError (res.data.error)
                } else {
                    this.$router.push('/user')
                }
            })
            .catch(err => {
                this.pokaziError(err.toString())
            })
        },
        pokaziError (message) {
            this.error.message = message;
            this.error.show = true;
            setTimeout(() => {
                this.error = Object.assign({}, this.defaultError)
            }, 3000)
        }
    },
};
</script>
<style>
</style>
