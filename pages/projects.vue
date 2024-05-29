<script lang="ts" setup>
useHead({
  title: 'Projects - Ali arya',
  meta: [
    { name: 'description', content: 'My amazing site.' },
  ],
})
const minagoo = ref(false)
const flylounge = ref(false)
const shahrdari = ref(false)

const minagooInfo = [
  {name:'Site1', img:"minagoo-thumbnail.png"}, 
  {name:'site2', img:"minagoo-explore.png"},
  {name:'site3', img:"minagoo-lessons.png"},
  {name:'site4', img:"minagoo-teachers.png"},
  {name:'site4', img:"minagoo-package.png"},
  {name:'site4', img:"minagoo-exercise.png"},
]
const flyInfo = [
  {name:'Site1', img:"flylounge-menu.png"}, 
]
const shahrdariInfo = [
  {name:'Site1', img:"shahrdari-main.png"}, 
  {name:'Site2', img:"shahrdari-peygiri.png"}, 
{name:'Site2', img:"shahrdari-sabt.png"}, 
]

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
            <v-col cols="12" lg="4" style="--stagger: 1" data-animate>
              <div type="button">
                <v-card class="mx-auto projects-card" max-width="374">
                <template v-slot:loader="{ isActive }">
                  <v-progress-linear  
                    :active="isActive"
                    color="deep-purple"
                    height="4"
                    indeterminate></v-progress-linear>
                </template>

                <v-img cover height="250" src="/assets/images/minagoo-thumbnail.png"></v-img>

                <v-card-item>
                  <v-card-title>Minagoo</v-card-title>
                </v-card-item>

                <v-card-text>
                  <div>
                    Minagoo is an online English learning platform to Improve your language skills and it can be used for any age, level, and nationality.
                    <p>
                      Front-end technologies:
                    </p>
                    <ul class="mx-3 my-3">
                      <li style="font-size: 12px;">
                        HTML-CSS
                      </li>
                      <li style="font-size: 12px;">
                        JavaScript
                      </li>
                      <li style="font-size: 12px;">
                        VUE
                      </li>
                      <li style="font-size: 12px;">
                        NUXT
                      </li>
                    </ul>
                  </div>
                  <div>
                    Minagoo.ir
                  </div>
                </v-card-text>
                <v-card-item>
                  <v-card-subtitle>
                   <div>
                    <span class="me-1">Des 6, 2023</span>
                   </div>
                  </v-card-subtitle>
                </v-card-item>
              </v-card>
              </div>
              
            </v-col>  
              <v-col cols="12" lg="4" style="--stagger: 1" data-animate>
              <div type="button">
                <v-card class="mx-auto projects-card" max-width="374">
                <template v-slot:loader="{ isActive }">
                  <v-progress-linear  
                    :active="isActive"
                    color="deep-purple"
                    height="4"
                    indeterminate></v-progress-linear>
                </template>

                <v-img cover height="250" src="/assets/images/flylounge-menu.png"></v-img>

                <v-card-item>
                  <v-card-title>Flylounge</v-card-title>
                </v-card-item>

                <v-card-text>
                  <div>
                   A restaurant cafe menu with a beautiful design and interesting features such as table reservation, choosing food from the menu
                    <p>
                      Front-end technologies:
                    </p>
                    <ul class="mx-3 my-3">
                      <li style="font-size: 12px;">
                        HTML-CSS
                      </li>
                      <li style="font-size: 12px;">
                        JavaScript
                      </li>
                      <li style="font-size: 12px;">
                        VUE
                      </li>
                      <li style="font-size: 12px;">
                        NUXT
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div class="text-red">CHECK IN RESPONSIVE MODE</div>
                    menuly.vip/flylounge
                  </div>
                </v-card-text>
                <v-card-item>
                  <v-card-subtitle>
                   <div>
                    <span class="me-1">Des 6, 2023</span>
                   </div>
                  </v-card-subtitle>
                </v-card-item>
              </v-card>
              </div>
              
            </v-col> 
             <v-col cols="12" lg="4" style="--stagger: 1" data-animate>
              <div type="button">
                <v-card class="mx-auto projects-card" max-width="374">
                <template v-slot:loader="{ isActive }">
                  <v-progress-linear  
                    :active="isActive"
                    color="deep-purple"
                    height="4"
                    indeterminate></v-progress-linear>
                </template>

                <v-img cover height="250" src="/assets/images/shahrdari-main.png"></v-img>

                <v-card-item>
                  <v-card-title>137</v-card-title>
                </v-card-item>

                <v-card-text>
                  <div>
                    A system for municipalities with the possibility of registering citizens' reports in the city and following up on reports and solving urban problems by managers
                    <p>
                      Front-end technologies:
                    </p>
                    <ul class="mx-3 my-3">
                      <li style="font-size: 12px;">
                        HTML-CSS
                      </li>
                      <li style="font-size: 12px;">
                        JavaScript
                      </li>
                      <li style="font-size: 12px;">
                        VUE
                      </li>
                      <li style="font-size: 12px;">
                        NUXT
                      </li>
                    </ul>
                  </div>
                  <div>
                    http://kermanshah.137.demo.hemend.com/en
                  </div>
                </v-card-text>
                <v-card-item>
                  <v-card-subtitle>
                   <div>
                    <span class="me-1">Des 6, 2023</span>
                   </div>
                  </v-card-subtitle>
                </v-card-item>
              </v-card>
              </div>
              
            </v-col> 
          </v-row>
        </v-container>
      </div>
    </article>
    <ModalBaseModal v-model="minagoo" :item="minagooInfo" />
    <ModalBaseModal v-model="flylounge" :item="flyInfo" />
    <ModalBaseModal v-model="shahrdari" :item="shahrdariInfo" />


  </div>
</template>
