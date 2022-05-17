<!-- @format -->

<template>
  <v-card class="cardColor" height="100vh">
    <v-row>
      <v-col cols="3" class="container arriba">
        <v-card class="card" color="transparent">
          <v-card class="face face1">
            <div class="content">
              <img
                src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"
              />
              <h3>Design</h3>
            </div>
          </v-card>
          <v-card class="face face2">
            <div class="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                cum cumque minus iste veritatis provident at.
              </p>
              <a href="#">Read More</a>
            </div>
          </v-card>
        </v-card>
      </v-col>
      <v-col cols="3" class="container arriba">
        <v-card class="card" color="transparent">
          <v-card class="face face1">
            <div class="content">
              <img
                src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"
              />
              <h3>Design</h3>
            </div>
          </v-card>
          <v-card class="face face2">
            <div class="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                cum cumque minus iste veritatis provident at.
              </p>
              <a href="#">Read More</a>
            </div>
          </v-card>
        </v-card>
      </v-col>
      <v-col cols="3" md="3" sm="3" class="container arriba">
        <v-card class="card" color="transparent">
          <v-card class="face face1">
            <div class="content">
              <img
                src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"
              />
              <h3>Design</h3>
            </div>
          </v-card>
          <v-card class="face face2">
            <div class="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                cum cumque minus iste veritatis provident at.
              </p>
              <a href="#">Read More</a>
            </div>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
  export default {
    name: 'Prueba',
    data: () => ({
      dialog: false,
    }),
  };
</script>

<style scoped>
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
  .arriba {
    padding-top: 150px;
  }
</style>
