<!-- @format -->

<template>
  <div>
    <LHome />
    <LAboutMe />
    <LApiContent />
    <LApiProjects />
    <LSkills />
  </div>
</template>

<script>
  import LHome from '@/components/Landing/LHome.vue';
  import LAboutMe from '@/components/Landing/LAboutMe.vue';
  import LApiContent from '@/components/Landing/LApiContent.vue';
  import LApiProjects from '@/components/Landing/LApiProjects.vue';
  import LSkills from '@/components/Landing/LSkills.vue';
  export default {
    components: {
      LHome,
      LAboutMe,
      LApiContent,
      LApiProjects,
      LSkills,
    },
    data() {
      return {};
    },
  };
</script>

<style scoped></style>
