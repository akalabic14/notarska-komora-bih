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
                                    addon-left-icon="ni ni-email-83">
                        </base-input>
                        <base-input alternative
                                    type="password"
                                    placeholder="Šifra"
                                    addon-left-icon="ni ni-lock-circle-open">
                        </base-input>
                        <base-input alternative
                                    type="text"
                                    placeholder="Kanton"
                                    addon-left-icon="ni ni-lock-circle-open">
                        </base-input>
                        <base-input alternative
                                    type="text"
                                    placeholder="Grad"
                                    addon-left-icon="ni ni-lock-circle-open">
                        </base-input>
                        <base-input class="mb-4">
                                <textarea class="form-control form-control-alternative" name="name" rows="4"
                                            cols="80" placeholder="Unesite svoju adresu..."></textarea>
                        </base-input>
                        <base-button type="default" round block size="lg">
                            Snimi promjenu
                        </base-button>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {};
</script>
<style>
</style>
