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
            <h3 class="display-3 text-white">
                Vijesti Notarske komore BiH
            </h3>
            <br>
            <br>
            <br>
            <div class="row justify-content-center">
                <div class="overflow-auto">
                    <ul class="list-unstyled">
                        <b-media v-for="(vijest, index) in filtered_vijesti" :key="index" tag="li" center-align vertical-align="center">
                            <router-link :to="`/news/${vijest._id}`">
                                <h8 class="mt-0 mb-1" style="color: white">{{vijest.naslov}}</h8>
                            </router-link>
                            <p class="mb-0" style="color: white">
                                {{vijest.tijelo.slice(0, 80)}}...
                            </p>
                        </b-media>
                    </ul>
                    <div class="mt-3">
                        <b-pagination v-model="currentPage" :per-page="8" :total-rows="rows" align="center"></b-pagination>
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
            currentPage: 0,
            rows: 0,
            vijesti: [
                
            ]
        }
    },
    mounted() {
        this.$axios.post('/get-news')
        .then(res => {
            this.vijesti = res.data.filter(vijest => vijest.naslov);
            this.rows = this.vijesti.length;
        })
    },
    computed: {
        filtered_vijesti () {
            return this.vijesti.slice((this.currentPage - 1) * 8, 8 * this.currentPage)
        }
    },
};
</script>
<style>
</style>
