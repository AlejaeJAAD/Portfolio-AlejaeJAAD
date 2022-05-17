<!-- @format -->

<template>
  <v-app style="background-color: #262c30 !important" class="bgStyle">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col cols="12">
              <h1>About me</h1>
              <br />
              <v-divider></v-divider>
            </v-col>
            <v-col cols="12" sm="6" md="6" lg="6">
              <v-card-title>
                {{ education.title }}
              </v-card-title>
              <v-card color="transparent" flat class="bgStyle">
                <v-timeline
                  dense
                  clipped
                  v-for="e in education.data"
                  :key="e.name"
                >
                  <v-timeline-item
                    class="mb-4"
                    color="grey"
                    icon-color="grey lighten-2"
                    small
                  >
                    <v-card-title>{{ e.name }} - {{ e.place }} </v-card-title>
                    <v-card-subtitle>
                      {{ e.degree }}
                      <br />
                      {{ e.date }}
                    </v-card-subtitle>
                  </v-timeline-item>
                </v-timeline>
              </v-card>
            </v-col>

            <v-col cols="12" sm="6" md="6" lg="6">
              <v-card-title>
                {{ experience.title }}
              </v-card-title>
              <v-card color="transparent" flat class="bgStyle">
                <v-timeline
                  dense
                  clipped
                  v-for="e in experience.data"
                  :key="e.name"
                >
                  <v-timeline-item
                    color="grey"
                    icon-color="grey lighten-2"
                    small
                  >
                    <v-card-title>{{ e.name }} - {{ e.place }} </v-card-title>
                    <v-card-subtitle>
                      {{ e.position }}
                      <br />
                      {{ e.date }}
                    </v-card-subtitle>
                    <v-card-text>
                      {{ e.description }}
                    </v-card-text>
                  </v-timeline-item>
                </v-timeline>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import info from '../../../info';
  export default {
    data() {
      return {
        education: {
          title: 'Education',
          data: info.education,
        },
        experience: {
          title: 'Experiences',
          data: info.experience,
        },
      };
    },
  };
</script>

<style lang="scss" scoped>
  .bgStyle {
    height: 100vh;
    font-size: 10px;
    color: #d3d2d2 !important;
  }
</style>
