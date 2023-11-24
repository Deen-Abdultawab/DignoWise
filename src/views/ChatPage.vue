<template>
    <Navbar />
    <div class="chat-page">
        <section class="text-area">
            <div class="intro-section" v-if="!startDiagnosis">
                <div class="logo">
                    <img src="../assets/images/logo.png" alt="">
                </div>
                <div class="main-container section-container">
                    <h3 class="hero-text">Hello John, </h3>
                    <p class="hero-desc">Embark on Your Health Journey with DignoWise</p>
                    <div class="cards-container">
                        <article class="card">
                            <h3 class="header">Embark on Your Health Journey with DignoWise</h3>
                            <p class="descr">Thrilled to have you at DignoWise, your reliable AI healthcare companion. While I can provide valuable insights, remember I'm not a substitute for professional medical advice.</p>
                        </article>
        
                        <article class="card">
                            <h3 class="header">AI powered symptom Analysis</h3>
                            <p class="descr">Describe your symptoms and DignoWise will generate quick response, offering preliminary medical advice</p>
                        </article>
                    
                        <article class="card">
                            <h3 class="header">Decision support</h3>
                            <p class="descr">DignoWise will aid you decision wheher you need to seek in-person medical care based o the Ai generated responses, enhancing health decision - making</p>
                        </article>
                    </div>
                </div>
            </div>
            <ChatBox v-else/>
        </section>
        <section class="nav-section section-container">
            <div class="btns">
                <div class="mic icon btn">
                    <img src="../assets/images/microphone.png" alt="">
                </div>
                <input type="text" placeholder="Type your symptom here.....">
                <div class="send icon btn" @click="handleState">
                    <img src="../assets/images/paper-plane.png" alt="">
                </div>
            </div>
            <p class="disclaimer">DignoWise may display inaccurate info, so double-check its responses</p>
        </section>

    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import ChatBox from '@/components/ChatBox.vue'
import { ref } from 'vue'
    export default {
        components: { Navbar, ChatBox },
        props: ['userId'],
        setup(){
            const startDiagnosis = ref(false)

            function handleState(){
                if(startDiagnosis.value === false){
                    startDiagnosis.value = true
                }
            }


            return { startDiagnosis, handleState }
        }
    }
</script>

<style scoped>
    .logo {
        width: 4.0625rem;
        height: 5.25rem;
        margin: 1rem auto 1.25rem;
        flex-shrink: 0;
    }

    .hero-text {
        color: var(--primary-normal);
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem; /* 120% */
        letter-spacing: 0.025rem;
        margin-bottom: 0.25rem;
    }

    .hero-desc {
        color: var(--text-500);
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.125rem; /* 128.571% */
        letter-spacing: 0.0175rem;
        margin-bottom: 0.25rem;
    }

    .card {
        border-radius: var(--spacing-2-pt);
        background: var(--primary-light);
        box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.15);
        padding: 1rem 1rem;
        margin-top: 1rem;
    }

    .card h3 {
        font-family: Nunito;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.25rem; /* 125% */
        letter-spacing: 0.015rem;
        background: var(--Gradient, linear-gradient(153deg, #5B21BA 22.31%, rgba(220, 10, 123, 0.00) 109.49%));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 0.25rem;
    }

    .card p {
        color: var(--text-300);
        font-family: Nunito;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.25rem; /* 142.857% */
        letter-spacing: 0.0175rem;
    }

    .btns {
        display: grid;
        align-items: center;
        grid-template-columns: auto 1fr auto;
        gap: 0.5rem;
        margin-bottom: 0.75rem;
    }

    .chat-page {
        display: grid;
        grid-template-rows: 1fr auto;
        min-height: 100vh;
    }

    .icon {
        border: 1px solid var(--text-400); 
        border-radius: var(--spacing-2-pt);
        padding: var(--spacing-2-pt);

    }

    .send {
        background: #7229E8;
    }

    .btns input {
        border-radius: var(--spacing-2-pt);
        border: 2px solid var(--text-400);
        background: var(--White);
        color: var(--text-400);
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.25rem;
        letter-spacing: 0.0175rem;
        padding: 0.5rem;
        transition: var(--transition);
    }

    .text-area {
        margin-bottom: 3.13rem;
        overflow-y: auto;
    }

    .btns input:focus {
        border-color: var(--primary-dark);
        outline: var(--primary-dark);
    }

    .disclaimer {
        color: var(--text-200);
        font-family: Nunito;
        font-size: 0.625rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1rem; /* 160% */
        letter-spacing: 0.00938rem;
        text-align: center;
        margin-bottom: 1rem;
    }

    

</style>