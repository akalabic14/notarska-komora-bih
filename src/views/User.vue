<template>
    <section class="section-hero section-shaped my-0">
        <base-alert :type="error.type" icon="ni ni-support-16" dismissible :visible="error.show">
            <span slot="text">{{error.message}}!</span>
        </base-alert>
        <div class="shape shape-style-1 shape-primary">
            <span class="span-150"></span>
            <span class="span-50"></span>
            <span class="span-50"></span>
            <span class="span-75"></span>
            <span class="span-100"></span>
            <span class="span-75"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
        </div>
        <div class="container shape-container d-flex align-items-center">
            <div class="col px-0">
                <div class="row justify-content-center align-items-center">
                    <card gradient="secondary" shadow body-classes="p-lg-5">
                        <h4 class="mb-1">Moji podaci</h4>
                        <br>
                        <br>
                        <base-input alternative
                                    class="mb-3"
                                    placeholder="Email"
                                    addon-left-icon="ni ni-email-83"
                                    v-model="user.username">
                        </base-input>
                        <base-input alternative
                                    type="password"
                                    placeholder="Šifra"
                                    addon-left-icon="ni ni-lock-circle-open"
                                    v-model="user.password">
                        </base-input>
                        <base-input alternative
                                    type="text"
                                    placeholder="Kanton"
                                    addon-left-icon="ni ni-lock-circle-open"
                                    v-model="user.region">
                        </base-input>
                        <base-input alternative
                                    type="text"
                                    placeholder="Grad"
                                    addon-left-icon="ni ni-lock-circle-open"
                                    v-model="user.city">
                        </base-input>
                        <base-input class="mb-4">
                                <textarea class="form-control form-control-alternative" name="name" rows="4"
                                            cols="80" placeholder="Unesite svoju adresu..." v-model="user.address"></textarea>
                        </base-input>
                        <base-button type="default" round block size="lg" @click="update">
                            Snimi promjenu
                        </base-button>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        var user = Object.assign({}, this.$user);
        delete user.password;
        user.id = user._id;
        return {
            user: user,
            error: {
                show: false,
                message: '',
                type: 'success'
            },
            defaultError: {
                show: false,
                message: '',
                type: 'success'
            }
        }
    },
    methods: {
        update () {
            this.$axios.post('/user-actions/update', this.user)
            .then(res => {
                if (res.data.error) {
                    this.pokaziError(res.data.error);
                } else {
                    this.pokaziUspjeh('Uspješno ste snimili podatke');
                }
            })
            .catch(err => {
                this.pokaziError(err.toString());
            })
        },
        pokaziError (message) {
            this.error.message = message;
            this.error.type = 'danger';
            this.error.show = true;
            setTimeout(() => {
                this.error = Object.assign({}, this.defaultError)
            }, 3000)
        },
        pokaziUspjeh (message) {
            this.error.message = message;
            this.error.type = 'success';
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
