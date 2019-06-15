<template>
    <div>
        <hero></hero>
        <section class="section bg-secondary">
            <div class="container">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6">
                        <div class="card bg-default shadow border-0">
                            <img v-lazy="'img/theme/img-1-1200x1000.jpg'" class="card-img-top">
                            <blockquote class="card-blockquote">
                                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                                     class="svg-bg">
                                    <polygon points="0,52 583,95 0,95" class="fill-default"></polygon>
                                    <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-default"></polygon>
                                </svg>
                                <h4 class="display-3 font-weight-bold text-white">Struktura notarske komore BiH</h4>
                                <p class="lead text-italic text-white">Članovi Notarske komore su svi notari s područja Bosne i Hercegovine koji su upisani u Imenik notara Notarske komore.</p>
                            </blockquote>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="pl-md-5">
                            <icon name="ni ni-settings" class="mb-5" size="lg" type="warning" shadow rounded></icon>
                            <h3>O Notarskoj komori BiH</h3>
                            <p class="lead">Osnovana je 4. maja/svibnja 2007. godine.</p>
                            <p>Osnovni ciljevi osnivanja notarijata su rasterećenje sudskih procesa i ostvarivanje brzine, ekonomičnosti i pravne sigurnosti građana.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-3 bg-gradient-default shape-skew">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container pt-lg pb-300">
                <div class="row text-center justify-content-center">
                    <div class="col-lg-10">
                        <h2 class="display-3 text-white">Notarske usluge</h2>
                        <p class="lead text-white">Notar je Vaš povjerenik za sve neophodne pravne poslove.
                            <br>Notarski postupak obezbjeđuje najveći stepen zaštite Vaših interesa u pravnom prometu.
                            <br>Građani imaju pravo na slobodan izbor notara.</p>
                    </div>
                </div>
                <div class="row row-grid mt-5">
                    <div class="col-lg-4">
                        <icon name="ni ni-settings" size="lg" gradient="white" shadow round color="primary"></icon>
                        <h5 class="text-white mt-3">Notarska obrada isprava</h5>
                        <p class="text-white mt-3">Najvažniji rezultat rada notara je notarski obradena isprava.</p>
                    </div>
                    <div class="col-lg-4">
                        <icon name="ni ni-ruler-pencil" size="lg" gradient="white" shadow round color="primary"></icon>
                        <h5 class="text-white mt-3">Ovjera kopija i potpisa</h5>
                        <p class="text-white mt-3">Isprave sacinjene od strane notara imaju karakter javnih isprava. Imenovanje notara vrši Ministar pravde, a nadzor i kontrolu rada notara vrši država.</p>
                    </div>
                    <div class="col-lg-4">
                        <icon name="ni ni-atom" size="lg" gradient="white" shadow round color="primary"></icon>
                        <h5 class="text-white mt-3">Vođenje ostavinskih postupaka</h5>
                        <p class="text-white mt-3">Notari su kao povjerenici suda nadležni za vođenje ostavinskih postupaka.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg">
            <div class="container">
                <div class="row justify-content-center text-center mb-lg">
                    <div class="col-lg-8">
                        <h2 class="display-3">Imenik notara u BiH</h2>
                        <p class="lead text-muted">Na ovom sajtu možete pronaći sve notare registrovane u imenik notara Notarske komore.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img v-lazy="'img/theme/team-1-800x800.jpg'"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Selvedin Ahmetašević</span>
                                    <small class="h6 text-muted">Velika Kladuša</small>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img v-lazy="'img/theme/team-2-800x800.jpg'"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Vesna Andrijanić</span>
                                    <small class="h6 text-muted">Visoko</small>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img v-lazy="'img/theme/team-3-800x800.jpg'"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Emira Babić</span>
                                    <small class="h6 text-muted">Kakanj</small>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img v-lazy="'img/theme/team-4-800x800.jpg'"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Zdravka Bago</span>
                                    <small class="h6 text-muted">Sarajevo</small>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg pt-0">
            <div class="container">
                <card gradient="warning"
                      no-body
                      shadow-size="lg"
                      class="border-0">
                    <div class="p-5">
                        <div class="row align-items-center">
                            <div class="col-lg-8">
                                <h3 class="text-white">Notarska tarifa u Bosni i Hercegovini</h3>
                                <p class="lead text-white mt-3">Naknada za notarske usluge plaća se prema notarskoj tarifi 
                                sukladno "Tarifi o nagradama i naknadama notara" koju definira ministarstvo pravde BiH.</p>
                            </div>
                            <div class="col-lg-3 ml-lg-auto">
                                <base-button tag="a" href="http://www.notaribih.ba/sites/default/files/tarifa_o_nagradama_i_naknadama_notara_snfbih_57_13.pdf"
                                             type="white" block size="lg">
                                    Preuzmi tarifu
                                </base-button>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>

<script>
import Hero from "./components/Hero";
export default {
  name: "home",
  components: {
      Hero
  }
};
</script>
