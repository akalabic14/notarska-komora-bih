<template>
    <section class="section-hero section-shaped my-0">
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
        <base-alert :type="error.type" icon="ni ni-support-16" dismissible :visible="error.show">
            <span slot="text">{{error.message}}!</span>
        </base-alert>
        <div class="container shape-container d-flex align-items-center">
            <div class="col px-0">
                <div class="row justify-content-center align-items-center">
                    <card gradient="secondary" shadow body-classes="p-lg-5">
                        <h4 class="mb-1">Napišite novu vijest</h4>
                        <br>
                        <br>
                        <base-input 
                            class="mb-4"
                            placeholder="Unesite naslov"
                            label="Naslov vijesti"
                            >
                            <input type="text" class="form-control form-control-alternative" placeholder="Unesite naslov" v-model="news.naslov"></input>
                        </base-input>
                        <base-input class="mb-4" label="Text vijesti">
                                <textarea class="form-control form-control-alternative" name="name" rows="12"
                                            cols="80" placeholder="Unesite tijelo vijesti..." v-model="news.tijelo"></textarea>
                        </base-input>
                        <base-button type="default" round block size="lg" @click="dodaj">
                            Snimi vijest
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
        return {
            news: {
                naslov: '',
                tijelo: ''
            },
            defaultNews: {
                naslov: '',
                tijelo: ''
            },
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
        dodaj () {
            this.$axios.post('/news-actions/create', this.news)
            .then(res => {
                if (res.data.error) {
                    this.pokaziError(res.data.error);
                } else {
                    this.news = Object.assign({}, this.defaultNews);
                    this.pokaziUspjeh('Uspjeh');
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
