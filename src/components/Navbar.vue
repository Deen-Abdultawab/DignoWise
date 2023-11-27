<template>
    <div class="navbar">
        <nav>
            <div class="menu" @click="showNav = true">
                <img src="../assets/images/menu.png" alt="">
            </div>
            <h3 class="hero">{{  title }}</h3>
            <div class="menu" @click="showArticle">
                <img :src="require(`@/assets/images/${logo}`)" alt="">
            </div>
        </nav>
        <div class="overlay" :class="{ show: showNav}" @click="showNav = false"></div>
        <div :class="{ show: showNav}">
            <div class="sidebar">
                <div class="top hero-container">
                    <div class="col1">
                        <div class="mini-logo">
                            <img src="../assets/images/miniLogo.png" alt="">
                        </div>
                        <h3>New Assessment</h3>
                    </div>
                    <div class="icon btn" @click="handleRoute">
                        <img src="../assets/images/pencil2.png" alt="">
                    </div>

                    <!-- <div class="close-nav" @click="showNav = false">
                        <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-7 h-7">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div> -->
                </div>
                <div class="mid section-container">
                    <div class="real-mid">
                        <article class="header title">
                            <h3>Recent</h3>
                            <div class="arrows">
                                <img src="../assets/images/arrow.png" alt="" class="icon" v-if="showRecent" @click="showRecent = false">
                                <img src="../assets/images/arrow-down.png" alt="" class="icon" v-else @click="showRecent = true">
                            </div>
                        </article>
                        <div class="history">
                            <!-- <article class="item">
                                <h3>Headache</h3>
                            </article> -->
                        </div>
                    </div>
                    <div class="last">
                        <div class="top">
                            <div class="item">
                                <img src="../assets/images/question-mark-circle.png" alt="">
                                <h3>Help</h3>
                            </div>
                            <router-link class="item" :to="{ name: 'settings', params: {userId: 1}}">
                                <img src="../assets/images/cog.png" alt="">
                                <h3>Settings</h3>
                            </router-link>
                        </div>
                    </div>
                </div>
                
                <div class="btm section-container">
                    <div class="user-btm">
                        <div class="user-img">
                            <img src="../assets/images/profileImg.png" alt="">
                        </div>
                        <h3>{{ name }}</h3>
                    </div>
                    <div class="log-out" @click="handleLogout">
                        <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M14.1667 13.3333L17.5 9.99998M17.5 9.99998L14.1667 6.66665M17.5 9.99998L5.83333 9.99998M10.8333 13.3333V14.1666C10.8333 15.5474 9.71405 16.6666 8.33334 16.6666H5C3.61929 16.6666 2.5 15.5474 2.5 14.1666V5.83331C2.5 4.4526 3.61929 3.33331 5 3.33331H8.33334C9.71405 3.33331 10.8333 4.4526 10.8333 5.83331V6.66665" stroke="#EA4F55" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                        </div>
                        <h3>Log out</h3>
                    
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useLogout from '@/function/useLogout'

    export default {
        props: ['title', 'logo', 'name'],
        setup(){
            const showNav = ref(false)
            const router = useRouter()
            const showRecent =  ref(false)
            const {logout} = useLogout()
            function showArticle(){
                router.push({ name: 'article'})
            }

            function handleRoute(){
                router.push({ name: 'chat', params:{ userId: 1} })
            }

            async function handleLogout(){
                await logout()
                router.push({ name: 'home'})
            }
           

            return { showNav, showArticle, handleRoute, showRecent, handleLogout }
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
    }

    .log-out .icon {
        width: 1.25rem;
        height: 1.25rem;
    }

    .log-out h3 {
        color: var(--text-error-normal);
    }

    .btm {
        display: flex;
        /* align-items: center; */
        flex-direction: column;
        margin-bottom: 1.75rem;
        gap: 0.88rem;
    }

    .user-btm, .log-out {
         display: flex;
        align-items: center;
        /* flex-direction: column; */
        margin-bottom: 1.75rem;
        gap: 0.88rem;
    }

    .btm h3 {
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
        line-height: 1.125rem;
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
    .hero-container {
        width: 100%;
        padding: 1.5rem 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #D3BDF8;
        position: relative;
    }

    .real-mid {
        height: auto;
        max-height: 50%;
        position: relative;
        overflow-y: auto;
        padding: 0 0 0.88rem; 
    }

    .real-mid::-webkit-scrollbar{
        display: none;
    }

    .title {
        position: sticky;
        top: 0;
        background: var(--primary-normal-1);
        padding: 0.88rem 0;
    }

    .history {
        display: flex;
        flex-direction: column;
        gap: 0.88rem;
        overflow-y: auto;
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

    
    nav {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.6875rem 0.875rem;
        /* z-index: -1; */
        position: relative;
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
        right: -2rem;
        top: 0.5rem;
        border: 2px solid white;
        display: grid;
        place-items: center;
        z-index: 9999999999;
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
        /* display: flex; */
        z-index: -1;
        opacity: 0;
        display: none;
    }

    .overlay.show {
        display: block;
        opacity: 1;
        z-index: 99;
    }

    .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        width: 80%;
        height: 100vh;
        background: var(--primary-normal-1);
        transition: all 0.5s linear;
        z-index: -1;
        transform: translateX(-100%);
        overflow: hidden;
        display: grid;
        grid-template-rows: auto 1fr auto;
    }

    .show .sidebar {
        transform: translateX(0);
        z-index: 99999;
    }

    .menu {
        width: 1.5rem;
        height: 1.5rem;
    }

</style>