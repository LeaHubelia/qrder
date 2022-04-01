<template>
  <div>
    <h1>Create Account </h1>
    <v-form 
      v-model="isValid"
      ref="form"
      lazy-validation
    >
      <v-text-field
        v-model="username"
        :rules="usernameRules"
        label="Username"
        required
      ></v-text-field>
  
      <v-text-field
        v-model="password"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="passwordRules"
        :type="show ? 'text' : 'password'"
        label="Password"
        required
        @click:append="show = !show"
      ></v-text-field> 

      <v-text-field
        v-model="confirmPassword"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="passwordRules"
        :type="show1 ? 'text' : 'password'"
        label="Confirm Password"
        required
        @click:append="show1 = !show1"
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field> 
      
      <div class="red--text"> {{errorMessage}}</div>

      <v-btn
        :disabled="!isValid"
        color="success"
        class="mr-4"
        @click="validate"
      >
        Confirm
      </v-btn>
    </v-form>
    
    
  </div>
</template>

<script>
data: () => ({
    isValid: true,
    username: '',
    password:'',
    confirmPassword:'',
    errorMessage: "",
    show: false,
    show1: false,
    usernameRules: [
      v => !!v || 'Name is required',
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 8) || 'Password must have 8+ characters',
      v => /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character', 
    v => /(?=.*\d)/.test(v) || 'Must have one number', 
    v => /([!@$%])/.test(v) || 'Must have one special character [!@#$%]'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
  }),

  methods: {
    validate () {
        if(this.password == this.confirmPassword){
            this.$refs.form.validate()
        }else {
         this.errorMessage = "Password did not match"
       }
    },
  },
})
</script>
