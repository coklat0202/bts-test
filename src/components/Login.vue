<template>
<div class="login-page">
	<div class="card-container">
		<v-layout>
			<v-flex xs12 sm6 offset-sm3>
				<v-card>
    <router-link to="/"><h2>TEST APP</h2></router-link>
					<v-form v-model="valid">
						<v-container>
							<v-layout>
								<v-flex>
									<v-text-field
										v-model="email"
										:rules="emailRules"
										label="E-mail"
										required
									></v-text-field>

									<v-text-field
										v-model="password"
										:rules="passwordRules"
										label="Password"
										required
									></v-text-field>
								<div>
									<v-btn color="error" large="true">Masuk</v-btn>
								</div>
								</v-flex>
							</v-layout>
						</v-container>
					</v-form>
				</v-card>
			</v-flex>
		</v-layout>
	</div>
</div>
</div>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      email: '',
      emailRules: [
          v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        // v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
    })
  }
</script>

<style>
  #app {
    height: 100vh;
    background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/e7366e62-3ce3-4664-909b-ae3e2b0986a6/0cfc2d39-a796-4222-9982-894b99f7ec8e/ID-en-20190304-popsignuptwoweeks-perspective_alpha_website_small.jpg");
  }
  .login-page {
    background-color: rgba(0, 0, 0, 0.5);;
    height: 100%;
    color: #fff;
  }

	.v-card{
		margin-top: 20vh!important;
		width: 400px;
		margin: auto;
	}
</style>