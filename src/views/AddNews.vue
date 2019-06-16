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
                        <h4 class="mb-1">Napišite novu vijest</h4>
                        <br>
                        <br>
                        <base-input 
                                    class="mb-4"
                                    placeholder="Unesite naslov"
                                    label="Naslov vijesti">
                                <input type="text" class="form-control form-control-alternative" placeholder="Unesite naslov"></input>
                        </base-input>
                        <base-input class="mb-4" label="Text vijesti">
                                <textarea class="form-control form-control-alternative" name="name" rows="12"
                                            cols="80" placeholder="Unesite text vijesti..."></textarea>
                        </base-input>
                        <base-button type="default" round block size="lg">
                            Snimi vijest
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
