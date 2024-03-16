<script lang="ts" setup>
useHead({
  title: 'Projects - Ali arya',
  meta: [
    { name: 'description', content: 'My amazing site.' },
  ],
})
</script>

<template>
  <div>
    <div class="prose mb-8">
      <h1 class="text-h3 text-title">Projects</h1>
    </div>
    <article>
      <div class="">
        <v-container>
          <v-row>
            <v-col cols="12" lg="3" style="--stagger: 1" data-animate>
              <v-card class="mx-auto projects-card" max-width="374">
                <template v-slot:loader="{ isActive }">
                  <v-progress-linear
                    :active="isActive"
                    color="deep-purple"
                    height="4"
                    indeterminate></v-progress-linear>
                </template>

                <v-img cover height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

                <v-card-item>
                  <v-card-title>Cafe Badilico</v-card-title>
                </v-card-item>

                <v-card-text>
                  <div>
                    Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.
                  </div>
                </v-card-text>
                <v-card-item>
                  <v-card-subtitle>
                    <span class="me-1">Des 6, 2023</span>
                  </v-card-subtitle>
                </v-card-item>
              </v-card>
            </v-col>  
            <v-col cols="12" lg="3" style="--stagger: 1" data-animate>
              <v-card class="mx-auto projects-card" max-width="374">
                <template v-slot:loader="{ isActive }">
                  <v-progress-linear
                    :active="isActive"
                    color="deep-purple"
                    height="4"
                    indeterminate></v-progress-linear>
                </template>

                <v-img cover height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

                <v-card-item>
                  <v-card-title>Cafe Badilico</v-card-title>
                </v-card-item>

                <v-card-text>
                  <div>
                    Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.
                  </div>
                </v-card-text>
                <v-card-item>
                  <v-card-subtitle>
                    <span class="me-1">Des 6, 2023</span>
                  </v-card-subtitle>
                </v-card-item>
              </v-card>
            </v-col>
            <v-col cols="12" lg="3" style="--stagger: 1" data-animate>
              <v-card class="mx-auto  projects-card" max-width="374">
                <template v-slot:loader="{ isActive }">
                  <v-progress-linear
                    :active="isActive"
                    color="deep-purple"
                    height="4"
                    indeterminate></v-progress-linear>
                </template>

                <v-img cover height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

                <v-card-item>
                  <v-card-title>Cafe Badilico</v-card-title>
                </v-card-item>

                <v-card-text>
                  <div>
                    Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.
                  </div>
                </v-card-text>
                <v-card-item>
                  <v-card-subtitle>
                    <span class="me-1">Des 6, 2023</span>
                  </v-card-subtitle>
                </v-card-item>
              </v-card>
            </v-col>
            <v-col cols="12" lg="3" style="--stagger: 1" data-animate>
              <v-card class="mx-auto  projects-card" max-width="374">
                <template v-slot:loader="{ isActive }">
                  <v-progress-linear
                    :active="isActive"
                    color="deep-purple"
                    height="4"
                    indeterminate></v-progress-linear>
                </template>

                <v-img cover height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

                <v-card-item>
                  <v-card-title>Cafe Badilico</v-card-title>
                </v-card-item>

                <v-card-text>
                  <div>
                    Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.
                  </div>
                </v-card-text>
                <v-card-item>
                  <v-card-subtitle>
                    <span class="me-1">Des 6, 2023</span>
                  </v-card-subtitle>
                </v-card-item>
              </v-card>
            </v-col>
            <v-col cols="12" lg="3" style="--stagger: 2" data-animate>
              <v-card class="mx-auto projects-card" max-width="374">
                <template v-slot:loader="{ isActive }">
                  <v-progress-linear
                    :active="isActive"
                    color="deep-purple"
                    height="4"
                    indeterminate></v-progress-linear>
                </template>

                <v-img cover height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

                <v-card-item>
                  <v-card-title>Cafe Badilico</v-card-title>
                </v-card-item>

                <v-card-text>
                  <div>
                    Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.
                  </div>
                </v-card-text>
                <v-card-item>
                  <v-card-subtitle>
                    <span class="me-1">Des 6, 2023</span>
                  </v-card-subtitle>
                </v-card-item>
              </v-card>
            </v-col>
            <v-col cols="12" lg="3"> 1 </v-col>
            <v-col cols="12" lg="3"> 1 </v-col>
          </v-row>
        </v-container>
      </div>
    </article>
  </div>
</template>
