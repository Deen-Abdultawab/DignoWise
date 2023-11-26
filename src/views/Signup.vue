<template>
    <div class="page">
        <div class="logo-img">
            <img src="../assets/images/logo.png" alt="">
        </div>
        <form @submit.prevent="submitForm" class="input-container">
            <h3>Create new account</h3>
            <div class="input-field">
                <input type="email" placeholder="Email address" required v-model="mail">
            </div>
            <div class="custom-container input-field">
                <div class="custom">
                    <input :type="[showPassword ? 'text': 'password']" placeholder="Enter Password" required v-model="password">
                    <div class="icons">
                        <div class="icon cus-btn" @click="showPassword = false" v-if="showPassword">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div class="icon cus-btn" @click="showPassword = true" v-if="!showPassword">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M2.4998 2.5L5.49076 5.49097M17.4998 17.5L14.5091 14.5093M11.5622 15.6872C11.0562 15.7831 10.5341 15.8333 10.0002 15.8333C6.2688 15.8333 3.11022 13.3809 2.04834 9.99997C2.33742 9.07958 2.78189 8.22801 3.35099 7.47598M8.23203 8.23223C8.68444 7.77982 9.30944 7.5 9.9998 7.5C11.3805 7.5 12.4998 8.61929 12.4998 10C12.4998 10.6904 12.22 11.3154 11.7676 11.7678M8.23203 8.23223L11.7676 11.7678M8.23203 8.23223L5.49076 5.49097M11.7676 11.7678L5.49076 5.49097M11.7676 11.7678L14.5091 14.5093M5.49076 5.49097C6.79061 4.65295 8.3386 4.16667 10.0002 4.16667C13.7315 4.16667 16.8901 6.61909 17.952 10C17.3629 11.8756 16.1286 13.4654 14.5091 14.5093" stroke="#5C5C5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <p>Manimum of 8 characters</p>
            </div>
            <div class="custom-container input-field">
                <div class="custom">
                    <input :type="[showPassword ? 'text': 'password']" placeholder="Confirm Password" required @input="handleCheck" v-model="confirmPassword">
                    <div class="icons">
                        <div class="icon cus-btn" @click="showPassword = false" v-if="showPassword">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div class="icon cus-btn" @click="showPassword = true" v-if="!showPassword">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M2.4998 2.5L5.49076 5.49097M17.4998 17.5L14.5091 14.5093M11.5622 15.6872C11.0562 15.7831 10.5341 15.8333 10.0002 15.8333C6.2688 15.8333 3.11022 13.3809 2.04834 9.99997C2.33742 9.07958 2.78189 8.22801 3.35099 7.47598M8.23203 8.23223C8.68444 7.77982 9.30944 7.5 9.9998 7.5C11.3805 7.5 12.4998 8.61929 12.4998 10C12.4998 10.6904 12.22 11.3154 11.7676 11.7678M8.23203 8.23223L11.7676 11.7678M8.23203 8.23223L5.49076 5.49097M11.7676 11.7678L5.49076 5.49097M11.7676 11.7678L14.5091 14.5093M5.49076 5.49097C6.79061 4.65295 8.3386 4.16667 10.0002 4.16667C13.7315 4.16667 16.8901 6.61909 17.952 10C17.3629 11.8756 16.1286 13.4654 14.5091 14.5093" stroke="#5C5C5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <p id="error">{{ errorMessage }}</p>
            </div>
           
            <button type="submit" class="btn">Sign up</button>
        </form>
        <div class="auth-req">
            <p>Already have an account?</p> 
            <router-link class="link" :to="{ name: 'signin'}">Log In</router-link>
        </div>
        <div class="divider">
            <span class="line"></span>
            <!-- <p>or</p> -->
            <span class="line"></span>
        </div>
        <!-- <div class="alt-auth-container">
            <div class="auth">
                <img src="../assets/images/google.png" alt="">
                <h3>Sign in using Google</h3>
            </div>
        </div> -->
         <div class="terms">
            <input type="checkbox" name="terms" id="terms" required v-model="accepted">
            <label for="terms">I have read and agreed to the <span class="cus-btn" @click="$router.push({ name: 'terms'})">Terms of Use</span> and <span class="cus-btn"  @click="$router.push({ name: 'privacy'})">Privacy Policy</span> </label>
        </div>
        <div class="error-field" v-if="error">
            <h3>{{ errorText }}</h3>
        </div>
        <!-- <footer>
            <h3>Terms of Use</h3>
            <span></span>
            <h3>Privacy Policy</h3>
        </footer> -->
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

    export default {
        setup(){
            const clicked = false
            const router = useRouter()
            const errorMessage = ref('')
            const errorText = ref('')
            const mail = ref('')
            const password = ref('')
            const accepted = ref(false)
            const showPassword = ref(false)
            const error = ref(false)
            const confirmPassword = ref('')

            function handleCheck(e){
                const value = e.target.value.toLowerCase()
                if(value != password.value.toLowerCase()){
                    errorMessage.value = 'password does not match'
                    console.log('no')
                } else {
                    errorMessage.value = ''
                }
            }
            
            function submitForm(){

                if(password.value == confirmPassword.value){
                    errorMessage.value = ''
                } else {
                     errorMessage.value = 'Password does not match'
                     return
                }


                if(password.value.length < 8){
                    errorText.value = 'Password is less than 8 characters'
                    error.value = true
                    setTimeout(function(){
                        errorText.value = ''
                        error.value = false
                    }, 1000)
                    return
                } else {
                    errorText.value = ''
                    error.value = false
                }

                if(accepted.value !== true){
                    errorText.value = 'Accept Terms and Privacy Policy'
                    error.value = true
                    setTimeout(function(){
                        errorText.value = ''
                        error.value = false
                    }, 1000)
                    console.log(accepted.value)
                    return
                } else {
                    error.value = false
                    router.push({ name: 'details'})
                }

            }
            return{ clicked, submitForm, errorMessage, mail, password, accepted, showPassword, handleCheck, error, errorText, confirmPassword }
        }
    }
</script>

<style scoped>

    .page {
        width: 90%;
        margin: 0 auto;
        position: relative;
    }

    #error {
        color: red;
    }

    .error-field {
        position: absolute;
        top: 0;
        width: 100%;
        background: red;
        color: white;
        font-family: Nunito;
        font-size: 0.88rem;
        text-align: center;
        font-style: normal;
        font-weight: 700;
        line-height: 1.375rem;
        letter-spacing: 0.0225rem;
        margin-bottom: 1.25rem;
        padding: 0.5rem;
    }
    .logo-img {
        width: 4.0625rem;
        height: 5.25rem;
        margin: 2.38rem auto 1.62rem;
    }

    .input-container h3 {
        color: var(--text-normal);
        font-family: Nunito;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.375rem;
        letter-spacing: 0.0225rem;
        margin-bottom: 1.25rem;
    }

    .input-field {
        width: 100%;
        margin-bottom: 1rem;
    }

    .input-field input {
        width: 100%;
        background: inherit;
        border-radius: var(--spacing-2-pt);
        border: 2px solid var(--text-400);
        padding: 0.5rem;
        color: var(--text-color-400, #434240);
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.125rem;
        letter-spacing: 0.0175rem;
    }

    input:focus {
        border-color: var(--primary-normal);
        outline: var(--primary-normal);
    }

    .custom {
        position: relative;
    }

    .icons {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
    }
    .icons svg {
        width: 1.25rem;
        height: 1.25rem;
        cursor: pointer;
    }

    .custom-container p {
        color: var(--text-color-500);
        font-family: Nunito;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.25rem;
        letter-spacing: 0.0175rem;
    }

    .btn {
        border-radius: 0.5rem;
        background: var(--primary-normal-active);
        width: 100%;
        padding: 0.6875rem 1.5rem;
        color: var(--primary-light);
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.125rem;
        letter-spacing: 0.0175rem;
        margin-bottom: 1rem;
    }

    .link {
        color: var(--primary-normal, #7229E8);
        font-weight: 700;
    }

    .auth-req {
        color: var(--text-400);
        text-align: center;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.125rem; /* 128.571% */
        letter-spacing: 0.0175rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.15rem;
    }

    .divider {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        margin: 2rem 0;
    }

    .divider p {
        color: var(--text-light-active);
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1rem;
        letter-spacing: 0.01125rem;
    }

    .divider span {
        height: 0.0625rem;
        width: 100%;
        background: #DCDCDC;
    }

    .alt-auth-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    .auth img {
        width: var(--spacing-5-pt);
        height: var(--spacing-5-pt);
    }

    .auth {
        display: flex;
        align-items: center;
        padding: 0.5rem 1.5rem;
        gap: var(--spacing-2-pt);
        border-radius: var(--spacing-2-pt);
        border: 1px solid var(--text-400);
    }

    .auth h3 {
        color: #000;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.125rem;
        letter-spacing: 0.0175rem;
    }

    .terms {
        display: flex;
        align-items: flex-start;
        gap: 0.35rem;
        margin-bottom: 6.75rem;
    }

    .terms input {
        border-radius: 0.25rem;
        border: 1px solid var(--primary-light-active);
        width: 1.2rem;
        height: 1.2rem;
    }

    .terms label {
        color: var(--text-400);
        font-family: Nunito;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.125rem; /* 128.571% */
        letter-spacing: 0.0175rem;
    }

    .terms label span {
        color: var(--primary-normal);
    }

</style>