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
                        <b-media v-for="(vijest, index) in vijesti" :key="index" tag="li" right-align vertical-align="center">
                            <b-img slot="aside" blank blank-color="#abc" width="64" alt="placeholder"></b-img>
                            <router-link :to="`/news/${index}`">
                                <h5 class="mt-0 mb-1" style="color: white">{{vijest.naslov}}</h5>
                            </router-link>
                            <p class="mb-0" style="color: white">
                                {{vijest.text}}
                            </p>
                        </b-media>
                    </ul>
                    <div class="mt-3">
                        <b-pagination v-model="currentPage" :per-page="10" :total-rows="rows" align="center"></b-pagination>
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
            rows: 30,
            vijesti: [
                {
                    naslov: 'List-based media object',
                    text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.`
                },{
                    naslov: 'List-based media object',
                    text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.`
                },{
                    naslov: 'List-based media object',
                    text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.`
                },{
                    naslov: 'List-based media object',
                    text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.`
                },{
                    naslov: 'List-based media object',
                    text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.`
                },{
                    naslov: 'List-based media object',
                    text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.`
                }
            ]
        }
    },
};
</script>
<style>
</style>
