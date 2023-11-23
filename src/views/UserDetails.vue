<template>
    <div class="user-info section-container">
        <div class="hero-container">
            <h1 class="hero">Welcome to DignoWise </h1>
            <p class="desc">We are asking this questions to provide you with better personalised recommendation in the future</p>
        </div>
        <form class="input-container" @submit.prevent="submitForm">
            <div class="inputs">
                <div class="custom-container input-field">
                    <div class="custom">
                        <input type="text" placeholder="First Name">
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M12.6935 4.36019L15.6398 7.30647M13.9435 3.11019C14.7571 2.2966 16.0762 2.2966 16.8898 3.11019C17.7034 3.92379 17.7034 5.24288 16.8898 6.05647L5.41667 17.5296H2.5V14.5537L13.9435 3.11019Z" stroke="#5C5C5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="custom-container input-field">
                    <div class="custom">
                        <input type="text" placeholder="Last Name">
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M12.6935 4.36019L15.6398 7.30647M13.9435 3.11019C14.7571 2.2966 16.0762 2.2966 16.8898 3.11019C17.7034 3.92379 17.7034 5.24288 16.8898 6.05647L5.41667 17.5296H2.5V14.5537L13.9435 3.11019Z" stroke="#5C5C5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="input-field">
                    <select name="gender" id="gender">
                        <option value="Gender">Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                        <option value="not say">I'll rather not say</option>
                    </select>
                </div>
                <div class="custom-container input-field">
                    <div class="custom">
                        <input type="date" placeholder="Date of birth (MM/DD/YY)">
                        <div class="icons">
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M6.66667 5.83333V2.5M13.3333 5.83333V2.5M5.83333 9.16667H14.1667M4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V5.83333C17.5 4.91286 16.7538 4.16667 15.8333 4.16667H4.16667C3.24619 4.16667 2.5 4.91286 2.5 5.83333V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5Z" stroke="#5C5C5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg> -->
                        </div>
                    </div>
                </div>
                
                <div class="input-field">
                    <select name="highbp" id="highbp">
                        <option value="">Any allergies? if Yes, kindly state it</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        <option value="not say">I'll rather not say</option>
                    </select>
                </div>
                <div class="custom-container input-field">
                    <div class="custom">
                        <input type="text" placeholder="Any allergies? if Yes, kindly state it">
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M12.6935 4.36019L15.6398 7.30647M13.9435 3.11019C14.7571 2.2966 16.0762 2.2966 16.8898 3.11019C17.7034 3.92379 17.7034 5.24288 16.8898 6.05647L5.41667 17.5296H2.5V14.5537L13.9435 3.11019Z" stroke="#5C5C5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="input-field">
                    <select name="smoker" id="smoker">
                        <option value="#">Are you a smoker?</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        <option value="formerly">Used to be</option>
                        <option value="not say">I'll rather not say</option>
                    </select>
                </div>
                <div class="custom-container input-field">
                    <div class="custom">
                        <textarea placeholder="Any pre-existing medical condition? if yes, please share" cols="30" rows="6"></textarea>
                        <div class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M12.6935 4.36019L15.6398 7.30647M13.9435 3.11019C14.7571 2.2966 16.0762 2.2966 16.8898 3.11019C17.7034 3.92379 17.7034 5.24288 16.8898 6.05647L5.41667 17.5296H2.5V14.5537L13.9435 3.11019Z" stroke="#5C5C5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btns">
                <a href="#" class="skip-btn btn">Skip</a>
                <button class="btn submit-btn">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';

    export default {
        setup(){
            const router = useRouter()

            function submitForm(){
                router.push({ name: 'chat', params:{ userId: 1}})
            }

            return { submitForm }
        }
        
    }
</script>

<style scoped>

    .btns {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 7.25rem;
        margin-bottom: 2.5rem;
    }

    .skip-btn {
        color: var(--primary-normal);
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.25rem; /* 125% */
        letter-spacing: 0.015rem;
    }

    .submit-btn {
        border-radius: 0.5rem;
        background: var(--primary-normal-active);
        color: var(--primary-light);
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.125rem;
        letter-spacing: 0.0175rem;
        padding: 0.6875rem 1.5rem;
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

    .input-field {
        width: 100%;
        margin-bottom: 1rem;
    }

    .input-field input, select, textarea {
        width: 100%;
        background: inherit;
        border-radius: var(--spacing-2-pt);
        border: 2px solid var(--text-400);
        padding: 0.5rem;
        color: var(--text-color-400);
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.125rem;
        letter-spacing: 0.0175rem;
    }

    

    textarea::placeholder {
        width: 89%;
        color: var(--text-400);
    }

    select, textarea::placeholder {
        font-family: Nunito;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.25rem; /* 142.857% */
        letter-spacing: 0.0175rem;
    }

     input:focus, select:focus {
        border-color: var(--primary-normal);
        outline: var(--primary-normal);
    }

    .inputs {
        margin-bottom: 4.5rem;
    }

    .hero-container {
        margin: 1.5rem 0;
    }

    .hero {
        font-family: Nunito;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem; /* 120% */
        letter-spacing: 0.025rem;
        background: var(--Gradient, linear-gradient(153deg, #5B21BA 22.31%, rgba(220, 10, 123, 0.00) 109.49%));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 0.25rem;
    }

    .hero-container p {
        color: var(--text-400);
        font-family: Nunito;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.125rem;
        letter-spacing: 0.0175rem;
    }

</style>