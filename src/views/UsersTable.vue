<template>
    <section class="section-hero section-shaped my-0">
        <base-alert type="danger" icon="ni ni-support-16" dismissible :visible="error.show">
            <span slot="text"><strong>Greška!</strong> {{error.message}}!</span>
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
                        <b-row>
                        <b-col md="6" class="my-1">
                            <b-form-group label-cols-sm="3" label="Filter" class="mb-0">
                            <b-input-group>
                                <b-form-input v-model="filter" placeholder="Pretražite korisnika"></b-form-input>
                            </b-input-group>
                            </b-form-group>
                        </b-col>

                        <b-col md="6" class="my-1">
                            <b-form-group label-cols-sm="3" label="Sortiraj" class="mb-0">
                            <b-input-group>
                                <b-form-select v-model="sortBy" :options="sortOptions">
                                <option slot="first" :value="null">-- none --</option>
                                </b-form-select>
                                <b-form-select v-model="sortDesc" :disabled="!sortBy" slot="append">
                                <option :value="false">Asc</option> <option :value="true">Desc</option>
                                </b-form-select>
                            </b-input-group>
                            </b-form-group>
                        </b-col>
                        </b-row>

                        <!-- Main table element -->
                        <b-table
                        show-empty
                        stacked="md"
                        :items="items"
                        :fields="fields"
                        :current-page="currentPage"
                        :per-page="perPage"
                        :filter="filter"
                        :sort-by.sync="sortBy"
                        :sort-desc.sync="sortDesc"
                        :sort-direction="sortDirection"
                        @filtered="onFiltered"
                        >

                        <template slot="actions" slot-scope="row">
                            <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
                              Izmjeni
                            </b-button>
                            <b-button size="sm" @click="izbrisi(row.item)">
                              Izbrisi
                            </b-button>
                        </template>
                        </b-table>

                        <b-row>
                        <b-col md="6" class="my-1">
                            <b-pagination
                            v-model="currentPage"
                            :total-rows="totalRows"
                            :per-page="perPage"
                            class="my-0"
                            ></b-pagination>
                        </b-col>
                        </b-row>
                        <!-- Info modal -->
                        <b-modal id="info-modal" :title="infoModal.title" ok-title="Sačuvaj" cancel-title="Otkaži" @cancel="resetInfoModal" @ok="modalAction">
                          <base-checkbox 
                            class="mb-3" 
                            v-model="infoModal.is_admin">
                            Administrator
                          </base-checkbox>
                          <base-checkbox 
                            class="mb-3" 
                            v-model="infoModal.is_writer">
                            Urednik
                          </base-checkbox>
                          <base-input alternative
                                      class="mb-3"
                                      placeholder="Korisničko ime"
                                      addon-left-icon="ni ni-email-83"
                                      v-model="infoModal.username">
                          </base-input>
                          <base-input alternative
                                      type="password"
                                      placeholder="Šifra"
                                      addon-left-icon="ni ni-lock-circle-open"
                                      v-model="infoModal.password">
                          </base-input>
                          <base-input alternative
                                      type="text"
                                      placeholder="Ime i prezime"
                                      addon-left-icon="ni ni-lock-circle-open"
                                      v-model="infoModal.name">
                          </base-input>
                          <base-input alternative
                                      type="text"
                                      placeholder="Kanton"
                                      addon-left-icon="ni ni-lock-circle-open"
                                      v-model="infoModal.region">
                          </base-input>
                          <base-input alternative
                                      type="text"
                                      placeholder="Grad"
                                      addon-left-icon="ni ni-lock-circle-open"
                                      v-model="infoModal.city">
                          </base-input>
                          <base-input class="mb-4">
                                  <textarea class="form-control form-control-alternative" name="name" rows="4"
                                              cols="80" placeholder="Unesite svoju adresu..." v-model="infoModal.address"></textarea>
                          </base-input>
                        </b-modal>
                        <b-row>
                          <b-col md="6" class="my-1">
                            <b-button size="sm" @click="createModal">
                              Dodaj novog user-a
                            </b-button>
                          </b-col>
                        <b-row>
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
        items: [
        ],
        fields: [
          { key: 'username', label: 'Korisničko ime', sortable: true, sortDirection: 'desc' },
          { key: 'name', label: 'Ime', sortable: true, class: 'text-center' },
          { key: 'uloga', label: 'Uloga', sortable: true, class: 'text-center' },
          { key: 'actions', label: 'Akcije' }
        ],
        error: {
            show: false,
            message: ''
        },
        defaultError: {
            show: false,
            message: ''
        },
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15],
        sortBy: null,
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        modal_index: null,
        infoModal: {
          id: 'info-modal',
          title: '',
          content: '',
          username:  '',
          password: '',
          address:   '',
          name: '',
          city: '',
          region: '',
          is_admin: false,
          is_writer: false
        },
        defaultModal: {
          id: 'info-modal',
          title: '',
          content: '',
          username:  '',
          name: '',
          password: '',
          address:   '',
          city: '',
          region: '',
          is_admin: false,
          is_writer: false
        }
      }
    },
    computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      }
    },
    mounted() {
      // Set the initial number of items
      this.$axios.post('/user-actions/get')
      .then(res => {
        if (res.data.error) {
          this.pokaziError(res.data.error);
        } else {
          this.items = res.data
          this.totalRows = this.items.length
        }
      })
      .catch(err => {
        this.pokaziError(err.toString());
      })
    },
    methods: {
      info(item, index, button) {
        this.infoModal = Object.assign(item, {
          password: '',
          title: 'Promjeni podatke korisnika'
        })
        this.modal_index = this.items.indexOf(item);
        this.$root.$emit('bv::show::modal', 'info-modal', button)
      },
      createModal() {
        this.infoModal = Object.assign({},this.defaultModal);
        this.infoModal.title = 'Kreiraj novog korisnika';
        this.$root.$emit('bv::show::modal', 'info-modal');
      },
      pokaziError (message) {
        this.error.message = message;
        this.error.show = true;
        setTimeout(() => {
            this.error = Object.assign({}, this.defaultError)
        }, 3000)
      },
      resetInfoModal() {
        this.infoModal = Object.assign({}, this.defaultModal)
      },
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },
      modalAction() {
        if (this.infoModal._id) {
          var user_data = {
            id: this.infoModal._id,
            username: this.infoModal.username,
            name: this.infoModal.name,
            password: this.infoModal.password != '' ? this.infoModal.password : null,
            address: this.infoModal.address,
            city: this.infoModal.city,
            region: this.infoModal.region,
            is_admin: this.infoModal.is_admin || false,
            is_writer: this.infoModal.is_writer || false
          };
          if (!user_data.password) {
            delete user_data.password
          }
          this.$axios.post('/user-actions/update', user_data)
          .then(res => {
            if (res.data.error) {
              this.pokaziError(res.data.error);
            } else {
              this.items.splice(this.modal_index, 1, res.data);
              this.modal_index = null;
            }
          })
          .catch(err => {
            this.pokaziError(err.toString());
          })
        } else {
          this.$axios.post('/user-actions/create', {
            username: this.infoModal.username,
            password: this.infoModal.password,
            name: this.infoModal.name,
            address: this.infoModal.address,
            city: this.infoModal.city,
            region: this.infoModal.region,
            is_admin: this.infoModal.is_admin || false,
            is_writer: this.infoModal.is_writer || false
          })
          .then(res => {
            if (res.data.error) {
              this.pokaziError(res.data.error);
            } else {
              this.items.push(res.data);
              this.modal_index = null;
            }
          })
          .catch(err => {
            this.pokaziError(err.toString());
          })
        }
      },
      izbrisi (item) {
        this.$axios.post('/user-actions/delete', {
            id: item._id
          })
          .then(res => {
            if (res.data.error) {
              this.pokaziError(res.data.error);
            } else {
              this.items.splice(this.modal_index, 1);
            }
          })
          .catch(err => {
            this.pokaziError(err.toString());
          })
      }
    }
  }
</script>