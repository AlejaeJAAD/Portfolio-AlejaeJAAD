<!-- @format -->

<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card-title>Skills.</v-card-title>
          <v-divider></v-divider>
        </v-col>
        <v-col
          cols="12"
          md="4"
          sm="12"
          xl="4"
          class="text-center pb-5 px-4"
          v-for="skill in skills"
          :key="skill.title"
        >
          <v-card>
            <v-icon x-large>{{ skill.icon }}</v-icon>
            <v-card-title>{{ skill.title }}</v-card-title>
            <v-divider></v-divider>
            <hr />
            <v-card-subtitle>{{ skill.info.join(', ') }}</v-card-subtitle>
          </v-card>
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
          title: 'education',
          data: info.education,
        },
        experience: {
          title: 'experiences',
          data: info.experience,
        },
        skills: info.skills,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .cardColor {
    background-color: rgb(28, 28, 28) !important;
    border-color: #3c3c3c !important;
  }
  .cardColor2 {
    background-color: rgb(26, 26, 26) !important;
    border-color: #1f1e1e !important;
  }
  .container {
    position: relative;
    display: flex;
    justify-content: space-between;
  }

  .container .card {
    position: absolute;
    cursor: pointer;
    border-radius: 15px;
  }

  .container .card .face {
    width: 300px;
    height: 200px;
    transition: 0.9s;
  }

  .container .card .face.face1 {
    position: relative;
    background-color: rgb(160, 61, 61);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: translateY(100px);
  }

  .container .card:hover .face.face1 {
    background: #6e1f3b;
    transform: translateY(0);
  }

  .container .card .face.face1 .content {
    opacity: 0.2;
    transition: 0.5s;
  }

  .container .card:hover .face.face1 .content {
    opacity: 1;
  }

  .container .card .face.face1 .content img {
    max-width: 100px;
  }

  .container .card .face.face1 .content h3 {
    margin: auto 0 0;
    padding: 0;
    color: #000000;
    text-align: center;
    font-size: 1.5em;
  }

  .container .card .face.face2 {
    position: relative;
    background: #1f1d1d;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    transform: translateY(-100px);
  }

  .container .card:hover .face.face2 {
    transform: translateY(0);
  }

  .container .card .face.face2 .content p {
    margin: 0;
    padding: 0;
  }

  .container .card .face.face2 .content a {
    margin: 15px 0 0;
    display: inline-block;
    text-decoration: none;
    font-weight: 900;
    color: #333;
    padding: 5px;
    border: 1px solid #333;
  }

  .container .card .face.face2 .content a:hover {
    background: #333;
    color: #fff;
  }
</style>
