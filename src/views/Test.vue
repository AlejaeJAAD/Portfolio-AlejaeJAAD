<!-- @format -->

<template>
  <div>
    <!-- <Footer />
    <hr />
    <InformacionEmpresa />
    <hr />
    <Proyecto />
    <hr /> -->
    <ContactForm />
    <hr />
  </div>
</template>

<script>
  import Footer from '../components/Extras/Footer.vue';
  import InformacionEmpresa from '../components/Extras/InformacionEmpresa.vue';
  import Proyecto from '../components/Extras/Proyecto.vue';
  import ContactForm from '../components/Extras/ContactForm.vue';

  export default {
    name: 'App',
    components: {
      Footer,
      InformacionEmpresa,
      Proyecto,
      ContactForm,
    },
    data() {
      return {};
    },
  };
</script>

<style lang="scss" scoped></style>
