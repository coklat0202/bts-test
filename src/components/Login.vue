<template>
<div class="login-page">
	<div class="card-container">
		<v-layout>
			<v-flex xs12 sm6 offset-sm3>
				<v-card>
					<div style="padding-left: 145px;padding-top:25px"><router-link to="/"><h2>TEST APP</h2></router-link></div>
					<v-form>
						<v-container>
							<v-layout>
								<v-flex>
									<v-text-field
										v-model="email"
										label="E-mail"
										required
									></v-text-field>

									<v-text-field
										v-model="password"
										label="Password"
										:type="'password'"
									></v-text-field>
								<div style="padding-right: 15px">
									<v-btn color="error" large>Masuk</v-btn>
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
		name: 'Login',
    data: () => ({
      email: '',
      password: '',
    })
  }
</script>

<style scoped>
	button {
		width: 100%;

	}
	.layout {
		overflow: hidden!important;
    height: 100vh;
	}
  .login-page {
    background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/e7366e62-3ce3-4664-909b-ae3e2b0986a6/0cfc2d39-a796-4222-9982-894b99f7ec8e/ID-en-20190304-popsignuptwoweeks-perspective_alpha_website_small.jpg")!important;
    color: #fff;
  }

	h2 {
		color: #ed1c24;
    font-family: sans-serif !important;
		margin: auto;
	}

	a {
		text-decoration: none!important;
	}

	.v-card{
		margin-top: 20vh!important;
		width: 400px;
		margin: auto;
		height: 300px!important;
	}

	.v-btn, error {
		background-color: #ed1c24!important;
	}
</style>