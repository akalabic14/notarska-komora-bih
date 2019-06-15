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
                <div class="col-lg-5">
                    <card gradient="secondary" shadow body-classes="p-lg-5">
                        <h4 class="mb-1">Kontakt forma</h4>
                        <base-input class="mt-5"
                                    alternative
                                    placeholder="Vaše ime"
                                    addon-left-icon="ni ni-user-run">
                        </base-input>
                        <base-input alternative
                                    placeholder="Email adresa"
                                    addon-left-icon="ni ni-email-83">
                        </base-input>
                        <base-input class="mb-4">
                                <textarea class="form-control form-control-alternative" name="name" rows="4"
                                            cols="80" placeholder="Napišite Vašu poruku..."></textarea>
                        </base-input>
                        <base-button type="default" round block size="lg">
                            Pošalji poruku
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
