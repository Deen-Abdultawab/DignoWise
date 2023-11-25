<template>
  <section class="homepage">
    <div class="bot-illustration">
      <img src="../assets/images/bot.png" alt="">
    </div>
    <div class="hero-container">
      <h3 class="hero-text"><span>DignoWise:</span> Your symptoms and Diagnosis AI Chatbot</h3>
      <p class="hero-desc">This chat bot is designed to provide information and support, but it's important to consult with a healthcare professional when necessary. Let's embark on this journey to a healthier you together.</p>
      <router-link :to="{ name: 'signup'}">
        <button class="btn">
          Get Started
        </button>
      </router-link>
    </div>
    <div class="auth-req">
      <p>Already have a account?</p> 
      <router-link :to="{ name: 'signin'}">Log in</router-link>
    </div>
  </section>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .bot-illustration {
    width: 19.375rem;
    height: 18.5rem;
    margin: 4rem auto 1.53rem;
  }

  .hero-container {
    width: 90%;
    margin: 0 auto;
    text-align: center;
  }

  .hero-text {
    color: #000;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem;
    letter-spacing: 0.03rem;
    margin-bottom: 0.5rem;
  }

  .hero-text span {
    color: var(--primary-normal);
    font-weight: 900;
  }

  .hero-desc {
    color: var(--text-400);
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.015rem;
    margin-bottom: 2.5rem;
  }

  .btn {
    border-radius: 0.5rem;
    background: var(--primary-normal-active, #5B21BA);
    padding: 0.6875rem 1.5rem;
    color: var(--primary-light, #F1EAFD);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.125rem;
    letter-spacing: 0.0175rem;
    border: none;
    margin-bottom: 2.5rem;
  }

  .btn a {
    cursor: pointer;
    transition: var(--transition);
  }

  .auth-req {
    color: var(--text-400);
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25rem;
    letter-spacing: 0.015rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.15rem;
    margin-bottom: 4.44rem;
    
  }
  
</style>