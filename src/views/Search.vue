<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="text-center mt-5">
                            <h3>Imenik notara
                            </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Pretrazite registar notara</div>
                            <div class="row justify-content-center">
                                <tabs fill class="mt--600">
                                    <card shadow>
                                        <tab-pane title="Po imenu">
                                            <label for="input-ime">Ime notara</label>
                                            <b-form-input list="imena-list" id="input-ime" placeholder="Unesite ime"></b-form-input>
                                            <b-form-datalist id="imena-list" :options="imena"></b-form-datalist>
                                            <br>
                                            <base-button type="neutral" round block @click="prikazi_rez=true">
                                                Nadji Notara
                                            </base-button>
                                        </tab-pane>
                                        <tab-pane title="Po gradu">
                                            <label for="input-grad">Pretrazite po gradu</label>
                                            <b-form-input list="gradovi-list" id="input-grad" placeholder="Unesite grad"></b-form-input>
                                            <b-form-datalist id="gradovi-list" :options="gradovi"></b-form-datalist>
                                            <br>
                                            <base-button type="neutral" round block @click="prikazi_rez=true">
                                                Nadji Notara
                                            </base-button>
                                        </tab-pane>
                                        <tab-pane title="Po kantonu/regiji">
                                            <label for="input-regija">Pretrazite po kantonu/regiji</label>
                                            <b-form-input list="input-list" id="input-regija" placeholder="Unesite kanton/regiju"></b-form-input>
                                            <b-form-datalist id="input-list" :options="regije"></b-form-datalist>
                                            <br>
                                            <base-button type="neutral" round block @click="prikazi_rez=true">
                                                Nadji Notara
                                            </base-button>
                                        </tab-pane>
                                    </card>
                                </tabs>
                            </div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center" v-for="(notar, index) in notari" :key="index" v-if="prikazi_rez">
                                <div class="col-lg-4 col-sm-6">
                                    <router-link :to="`/imenik/${index}`">
                                        <b-card no-body class="overflow-hidden" style="max-width: 300px;" :img-src="notar.slika">
                                            <b-card-body :title="notar.ime">
                                                <b-card-text>
                                                    {{notar.grad}}
                                                </b-card-text>
                                            </b-card-body>
                                        </b-card>
                                    </router-link>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
export default {
    data() {
        return {
            prikazi_rez: false,
            imena: ['jedno', 'drugo'],
            gradovi: ['grad', 'selo', 'opstina'],
            regije: ['velika', 'mala', 'vazna', 'nevazna'],
            notari: [{
                ime: 'Selvedin Ahmetašević',
                grad: 'Velika Kladuša',
                slika: 'img/theme/team-1-800x800.jpg'
            },{
                ime: 'Vesna Andrijanić',
                grad: 'Visoko',
                slika: 'img/theme/team-2-800x800.jpg'
            },{
                ime: 'Emira Babić',
                grad: 'Kakanj',
                slika: 'img/theme/team-3-800x800.jpg'
            }]
        }
    },
    components: {
        TabPane, Tabs
    }
};
</script>
<style>
</style>

