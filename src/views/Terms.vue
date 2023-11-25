<template>
    <div class="terms-page">
        <header class="section-container">
            <div class="icons">
                <div class="icon" @click="$router.back()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15 19L8 12L15 5" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="icon" @click="$router.back()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.15152 5.15146C5.62015 4.68283 6.37995 4.68283 6.84858 5.15146L12 10.3029L17.1515 5.15146C17.6202 4.68283 18.3799 4.68283 18.8486 5.15146C19.3172 5.62009 19.3172 6.37989 18.8486 6.84852L13.6971 12L18.8486 17.1515C19.3172 17.6201 19.3172 18.3799 18.8486 18.8485C18.3799 19.3171 17.6202 19.3171 17.1515 18.8485L12 13.697L6.84858 18.8485C6.37995 19.3171 5.62015 19.3171 5.15152 18.8485C4.68289 18.3799 4.68289 17.6201 5.15152 17.1515L10.303 12L5.15152 6.84852C4.68289 6.37989 4.68289 5.62009 5.15152 5.15146Z" fill="#131313"/>
                    </svg>
                </div>
            </div>
            <div class="nav">
                <button class="terms-btn btn" :class="{ active: clicked}" @click="clicked = true">
                    Terms of Use
                </button>
                <button class="privacy-btn btn" :class="{ active: !clicked}" @click="clicked = false">
                    Privacy Policy
                </button>
            </div>
        </header>
        <div class="main section-container">
            <section class="terms" v-if="clicked">
                <p class="welcome">
                    Welcome to DignoWise! By using our AI-Powered Symptom and Diagnosis Guidance Chatbot, you agree to comply with and be bound by the following terms and conditions of use. If you disagree with any part of these terms, please do not use DignoWise.
                </p>
                <article class="item">
                    <h3>Acceptance of Terms</h3>
                    <p>
                        By accessing or using DignoWise, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. These terms apply to all users of the app.
                    </p>
                </article>
                <article class="item">
                    <h3>Use of the Service</h3>
                    <p>
                        You agree to use DignoWise for its intended purpose of providing AI-powered medical guidance. You must not use the service for any illegal or unauthorized purpose.
                    </p>
                </article>
                <article class="item">
                    <h3>Disclaimer</h3>
                    <p>
                        DignoWise is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                    </p>
                </article>
                <article class="item">
                    <h3>Limitation of Liability</h3>
                    <p>
                        DignoWise and its creators are not liable for any direct, indirect, incidental, consequential, or exemplary damages resulting from your use of the service.
                    </p>
                </article>
                <article class="item">
                    <h3>Termination</h3>
                    <p>
                        We reserve the right to terminate or suspend access to DignoWise at any time without prior notice.
                    </p>
                </article>
            </section>
            <section class="terms privacy" v-else>
                <article class="item">
                    <h3>Information We Collect</h3>
                    <p>
                        DignoWise collects personal information to provide you with accurate medical advice. This may include symptoms, user feedback, and device information. We do not sell or share this information with third parties.
                    </p>
                </article>
                <article class="item">
                    <h3>Use of Information:</h3>
                    <p>
                        The information collected is used to enhance and personalize your experience with DignoWise. We may also use aggregated and anonymized data for research purposes.
                    </p>
                </article>
                <article class="item">
                    <h3>Data Security:</h3>
                    <p>
                        We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
                    </p>
                </article>
                <article class="item">
                    <h3>Cookies:</h3>
                    <p>
                        DignoWise uses cookies to improve user experience. You can disable cookies in your browser settings, but this may affect certain functionalities.
                    </p>
                </article>
                <article class="item">
                    <h3>Third-Party Services:</h3>
                    <p>
                        DignoWise may use third-party services for analytics and performance monitoring. These services may collect information about your use of the app.
                    </p>
                </article>
                <article class="item">
                    <h3>User Rights:</h3>
                    <p>
                        You have the right to access, correct, or delete your personal information. Contact us at contact@dignowise.com to exercise your rights.
                    </p>
                </article>
            </section> 
        </div>
        <div class="btns">
            <button class="btn dec-btn" @click="$router.back()">Decline</button>
            <button class="btn accept-btn" @click="handleAccept" >Accept</button>
        </div>
        <div class="noti" v-if="accept">
            <h3>You’ve agreed to our Terms of use and privacy policy </h3>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

    export default {
        setup(){
            const clicked = ref(true)
            const accept = ref(false)
            const router = useRouter()

            function changeState(){
                accept.value = true
            }

            function handleAccept(){
                accept.value = true
                setTimeout(function(){
                    accept.value = false
                    router.go(-1)
                }, 1000)
                
            }
           

            return{ clicked, handleAccept, accept }
        }
        
    }
</script>

<style scoped>
    .terms-page {
        height: 100vh;
        position: relative;
        overflow: hidden;
        display: grid;
        grid-template-rows:auto 1fr auto ;
    }

    .noti {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding: 0.5rem 2.625rem;
        background: var(--primary-normal);
        
    }

    /* .noti.show {
        z-index: 9999;
        opacity: 1;
    } */

    .noti h3 {
        color: var(--White);
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1rem;
        letter-spacing: 0.01125rem;
    }

    .icons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 0;
    }

    .icon {
        width: 1.5rem;
        height: 1.5rem;
    }

    .nav {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .nav button {
        padding: 0.75rem 2.1875rem;
        background: var(--primary-light-hover);
        color: var(--text-200);
        font-family: Nunito;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.25rem; /* 125% */
        letter-spacing: 0.015rem;
        margin-bottom: 1.62rem;
    }

    button.active {
        color: var(--White);
        background: var(--primary-normal);
    }

    .terms {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding-bottom: 0.5rem;
    }

    .main {
        overflow-y: auto;
    }

    .main::-webkit-scrollbar{
        display: none;
    }

    .main p {
        color: var(--text-400);
        font-family: Nunito;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.25rem; /* 142.857% */
        letter-spacing: 0.0175rem;
    }

    .main h3 {
        color: var(--text-500, #151515);
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.125rem; /* 128.571% */
        letter-spacing: 0.0175rem;
        margin-bottom: 0.25rem;

    }

    .btns {
        padding: 0.75rem 1.25rem;
        background: var(--White);
        box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .btns .btn {
        
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.125rem; /* 128.571% */
        letter-spacing: 0.0175rem;
    }

    .dec-btn {
        color: var(--primary-normal);
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: 0.015rem;
        background: none;

    }

    .accept-btn {
        border-radius: 0.5rem;
        background: var(--primary-normal-active, #5B21BA);
        padding: 0.6875rem 1.5rem;
        color: var(--primary-light);
    }
</style>