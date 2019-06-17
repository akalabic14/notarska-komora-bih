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
                            <h3>{{news.naslov}}
                            </h3>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center py-3">
                                <div class="col-lg-9">
                                    <p class="lead">{{news.tijelo}}</p>
                                </div>
                            </div>
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
            news: {
                naslov: '',
                tijelo: ``
            }
        }
    },
    mounted() {
        this.$axios.post(`/get-news?id=${this.$route.params.id}`)
        .then(res => {
            this.news = res.data;
        })
    },
};
</script>
<style>
</style>
