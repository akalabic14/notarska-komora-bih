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
                        <template slot="name" slot-scope="row">
                            {{ row.value.first }} {{ row.value.last }}
                        </template>

                        <template slot="isActive" slot-scope="row">
                            {{ row.value }}
                        </template>

                        <template slot="actions" slot-scope="row">
                            <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
                            Izmjeni
                            </b-button>
                            <b-button size="sm" @click="row.toggleDetails">
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
                        <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
                        <pre>{{ infoModal.content }}</pre>
                        </b-modal>
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
          { isActive: true, age: 40, name: { first: 'Dickerson', last: 'Macdonald' } },
          { isActive: false, age: 21, name: { first: 'Larsen', last: 'Shaw' } },
          {
            isActive: false,
            age: 9,
            name: { first: 'Mini', last: 'Navarro' },
            _rowVariant: 'success'
          },
          { isActive: false, age: 89, name: { first: 'Geneva', last: 'Wilson' } },
          { isActive: true, age: 38, name: { first: 'Jami', last: 'Carney' } },
          { isActive: false, age: 27, name: { first: 'Essie', last: 'Dunlap' } },
          { isActive: true, age: 40, name: { first: 'Thor', last: 'Macdonald' } },
          {
            isActive: true,
            age: 87,
            name: { first: 'Larsen', last: 'Shaw' },
            _cellVariants: { age: 'danger', isActive: 'warning' }
          },
          { isActive: false, age: 26, name: { first: 'Mitzi', last: 'Navarro' } },
          { isActive: false, age: 22, name: { first: 'Genevieve', last: 'Wilson' } },
          { isActive: true, age: 38, name: { first: 'John', last: 'Carney' } },
          { isActive: false, age: 29, name: { first: 'Dick', last: 'Dunlap' } }
        ],
        fields: [
          { key: 'name', label: 'Person Full name', sortable: true, sortDirection: 'desc' },
          { key: 'age', label: 'Person age', sortable: true, class: 'text-center' },
          { key: 'isActive', label: 'is Active' },
          { key: 'actions', label: 'Actions' }
        ],
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15],
        sortBy: null,
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
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
      this.totalRows = this.items.length
    },
    methods: {
      info(item, index, button) {
        this.infoModal.title = `Row index: ${index}`
        this.infoModal.content = JSON.stringify(item, null, 2)
        this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      },
      resetInfoModal() {
        this.infoModal.title = ''
        this.infoModal.content = ''
      },
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      }
    }
  }
</script>