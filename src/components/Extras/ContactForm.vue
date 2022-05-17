<!-- @format -->

<template>
  <div class="container">
    <form @submit.prevent="sendEmail">
      <label>Firstname</label>
      <input
        type="text"
        v-model="firstname"
        name="firstname"
        placeholder="Firstname"
      />
      <label>Lastname</label>
      <input
        type="text"
        v-model="lastname"
        name="lastname"
        placeholder="Lastname"
      />
      <label>Email</label>
      <input
        type="email"
        v-model="email"
        name="email"
        placeholder="Your Email"
      />
      <label>Message</label>
      <textarea
        name="message"
        v-model="message"
        cols="30"
        rows="5"
        placeholder="Message"
      >
      </textarea>

      <input type="submit" value="Send" />
    </form>
  </div>
</template>

<script>
  import emailjs from 'emailjs-com';
  export default {
    name: 'ContactUs',
    data() {
      return {
        firstname: '',
        lastname: '',
        email: '',
        message: '',
      };
    },
    methods: {
      sendEmail(e) {
        try {
          emailjs.sendForm(
            'service_lxcxtqe',
            'template_crorviy',
            e.target,
            'user_W6adY5SqlyVDRyakCkRz7',
            {
              firstname: this.firstname,
              lastname: this.lastname,
              email: this.email,
              message: this.meessage,
            }
          );
        } catch (error) {
          console.log({ error });
        }
        // Reset form field
        this.firstname = '';
        this.lastname = '';
        this.email = '';
        this.message = '';
      },
    },
  };
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  label {
    float: left;
  }
  input[type='text'],
  [type='email'],
  textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
  }
  input[type='submit'] {
    background-color: #4caf50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  input[type='submit']:hover {
    background-color: #b8c7b9;
  }
  .container {
    display: block;
    margin: auto;
    text-align: center;
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
    width: 50%;
  }
</style>
