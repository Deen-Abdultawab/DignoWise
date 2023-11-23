<template>
    <div class="navbar">
        <nav>
            <div class="menu" @click="showNav = true">
                <img src="../assets/images/menu.png" alt="">
            </div>
            <h3 class="hero">Symptom Assessment</h3>
        </nav>
        <div class="overlay" :class="{ show: showNav}">
            <div class="sidebar">
                <div class="top hero-container">
                    <div class="col1">
                    <div class="mini-logo">
                        <img src="../assets/images/miniLogo.png" alt="">
                    </div>
                        <h3>New Assessment</h3>
                    </div>
                    <div class="icon">
                        <img src="../assets/images/pencil2.png" alt="">
                    </div>

                    <div class="close-nav" @click="showNav = false">
                        <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-7 h-7">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="mid">
                    <article class="header">
                        <h3>Recent</h3>
                        <div class="arrows">
                            <!-- <img src="../assets/images/arrow.png" alt="" class="icon"> -->
                            <img src="../assets/images/arrow-down.png" alt="" class="icon">
                        </div>
                    </article>
                    <div class="history">
                        <article class="item">
                            <h3>Headache</h3>
                        </article>
                    </div>
                </div>
                <div class="last">
                    <div class="top">
                        <div class="item">
                            <img src="../assets/images/question-mark-circle.png" alt="">
                            <h3>Help</h3>
                        </div>
                        <div class="item">
                            <img src="../assets/images/cog.png" alt="">
                            <h3>Settings</h3>
                        </div>
                    </div>
                    <div class="btm">
                        <div class="user-img">
                            <img src="../assets/images/profileImg.png" alt="">
                        </div>
                        <h3>John Doe</h3>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

    export default {
        setup(){
            const showNav = ref(false)
            
           

            return { showNav }
        }
    }
</script>

<style scoped>

    .user-img {
        width: var(2rem);
        height: var(2rem);
        border-radius: 50%;
        overflow: hidden;
    }
    .last {
        padding: 1.75rem 1rem;
        height: calc(100% - 11rem);
        /* border: 2px solid red; */
        position: relative;
    }

    .last .btm {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        position: absolute;
        bottom: 1.75rem;
    }

    .last .btm h3 {
        color: var(--White);
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 600;
        line-height: 1.125rem; /* 128.571% */
        letter-spacing: 0.0175rem;
    }

    .last .item img {
        width: 1.25rem;
        height: 1.25rem;
    }

    .last .item h3 {
        color: var(--White);
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.125rem; /* 128.571% */
        letter-spacing: 0.0175rem;
    }

    .last .item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1.06rem;
    }

    .history .item {
        border-radius: 0.5rem;
        background: var(--primary-dark-hover);
        width: 100%;
        padding: 0.5rem 0.8125rem;
    }

    .history .item h3 {
        color: var(--text-50);
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1rem; /* 133.333% */
        letter-spacing: 0.01125rem;
    }
    .hero-container, .mid {
        width: 100%;
        padding: 1.5rem 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid transparent;
        border-bottom: 1px solid #D3BDF8;
    }

    .hero-container {
        position: relative;
    }

    .mid {
        padding: 0.88rem 1rem;
        display: block;
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.75rem;
    }

    .top .col1 {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .top h3, .mid h3 {
        color: var(--White);
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: 1.25rem; /* 125% */
        letter-spacing: 0.015rem;
    }

    .top .icon {
        width: 1rem;
        height: 1rem;
    }
    .header .icon, .close-nav .icon {
        width: 1.25rem;
        height: 1.25rem;
    }

    .top .mini-logo {
        background: var(--White);
        width: 2.5rem;
        height:2.5rem;
        border-radius: 50%;
        overflow: hidden;
    }
    .navbar {
        height: 100%;
        z-index: 999999;
        border: 2px solid yellow;
    }
    nav {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 2.4rem;
        padding: 0.6875rem 0.875rem;
        z-index: 99999;
        background: var(--primary-normal);
    }

    nav h3 {
        color: var(--White);
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.375rem;
        letter-spacing: 0.0225rem;
    }

    .close-nav {
        width: 2rem;
        height: 2rem;
        position: absolute;
        right: -3rem;
        top: 0.5rem;
        border: 2px solid white;
        /* padding: 0.2rem; */
        display: grid;
        place-items: center;
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        min-height: 100vh;
        background: rgba(0, 0, 0, 0.01);
        backdrop-filter: blur(2px);
        transition: var(--transition);
        display: flex;
        /* opacity: 0;
        z-index: -1; */
    }

    .overlay.show {
        opacity: 1;
        z-index: 99;
    }

    .sidebar {
        position: absolute;
        top: 0;
        left: 0;
        width: 80%;
        height: 100%;
        background: var(--primary-normal-1);
        transition: all 0.5s linear;
        /* z-index: -1;
        transform: translateX(-100%); */
        border: 1px solid red;
    }

    .show .sidebar {
        transform: translateX(0);
    }

    .menu {
        width: 1.5rem;
        height: 1.5rem;
    }

</style>