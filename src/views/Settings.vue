<template>
    <div class="settings-page section-container">
        <div class="header">
            <div class="icon" @click="$router.back()">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 19L8 12L15 5" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <h3>Settings</h3>
            <div class="icon" @click="$router.back()">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.15128 5.15146C5.61991 4.68283 6.3797 4.68283 6.84833 5.15146L11.9998 10.3029L17.1513 5.15146C17.6199 4.68283 18.3797 4.68283 18.8483 5.15146C19.317 5.62009 19.317 6.37989 18.8483 6.84852L13.6969 12L18.8483 17.1515C19.317 17.6201 19.317 18.3799 18.8483 18.8485C18.3797 19.3171 17.6199 19.3171 17.1513 18.8485L11.9998 13.697L6.84833 18.8485C6.3797 19.3171 5.61991 19.3171 5.15128 18.8485C4.68265 18.3799 4.68265 17.6201 5.15128 17.1515L10.3027 12L5.15128 6.84852C4.68265 6.37989 4.68265 5.62009 5.15128 5.15146Z" fill="#131313"/>
                </svg>
            </div>
        </div>
        <div class="body">
            <article class="card">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M9.99951 8.99997C11.6564 8.99997 12.9995 7.65682 12.9995 5.99997C12.9995 4.34311 11.6564 2.99997 9.99951 2.99997C8.34266 2.99997 6.99951 4.34311 6.99951 5.99997C6.99951 7.65682 8.34266 8.99997 9.99951 8.99997Z" fill="#151515"/>
                    <path d="M2.99951 18C2.99951 14.134 6.13352 11 9.99951 11C13.8655 11 16.9995 14.134 16.9995 18H2.99951Z" fill="#151515"/>
                    </svg>
                </div>
                <div class="details">
                    <h3 class="top">Profile</h3>
                    <div class="link">
                        <h3>Change profile picture</h3>
                        <img src="../assets/images/cheveron-right.png" alt="">
                    </div>
                    <div class="link">
                        <h3>Update profile data</h3>
                        <img src="../assets/images/cheveron-right.png" alt="">
                    </div>
                </div>
            </article>
            <article class="card">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.99951 9V7C4.99951 4.23858 7.23809 2 9.99951 2C12.7609 2 14.9995 4.23858 14.9995 7V9C16.1041 9 16.9995 9.89543 16.9995 11V16C16.9995 17.1046 16.1041 18 14.9995 18H4.99951C3.89494 18 2.99951 17.1046 2.99951 16V11C2.99951 9.89543 3.89494 9 4.99951 9ZM12.9995 7V9H6.99951V7C6.99951 5.34315 8.34266 4 9.99951 4C11.6564 4 12.9995 5.34315 12.9995 7Z" fill="#151515"/>
                    </svg>
                </div>
                <div class="details">
                    <h3 class="top">Password</h3>
                    <div class="link">
                        <h3>Create password</h3>
                        <img src="../assets/images/cheveron-right.png" alt="">
                    </div>
                    <div class="link">
                        <h3>Password recovery</h3>
                        <img src="../assets/images/cheveron-right.png" alt="">
                    </div>
                </div>
            </article>
            <article class="card">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99973 2C10.552 2 10.9997 2.44772 10.9997 3V4.32297L14.9542 5.90474L16.5525 5.10557C17.0465 4.85858 17.6472 5.05881 17.8942 5.55279C18.1411 6.04676 17.9409 6.64744 17.4469 6.89443L16.2138 7.511L17.952 12.9307C18.0725 13.3065 17.9607 13.718 17.6666 13.9812C16.9596 14.614 16.0236 15 14.9997 15C13.9759 15 13.0398 14.614 12.3328 13.9812C12.0387 13.718 11.927 13.3065 12.0475 12.9307L13.7628 7.58227L10.9997 6.47703V16H12.9997C13.552 16 13.9997 16.4477 13.9997 17C13.9997 17.5523 13.552 18 12.9997 18H6.99973C6.44745 18 5.99973 17.5523 5.99973 17C5.99973 16.4477 6.44745 16 6.99973 16H8.99973V6.47703L6.23664 7.58227L7.95196 12.9307C8.07248 13.3065 7.96071 13.718 7.66664 13.9812C6.95963 14.614 6.02356 15 4.99973 15C3.9759 15 3.03983 14.614 2.33282 13.9812C2.03875 13.718 1.92698 13.3065 2.0475 12.9307L3.78567 7.51101L2.55252 6.89443C2.05854 6.64744 1.85831 6.04676 2.1053 5.55279C2.35229 5.05881 2.95297 4.85858 3.44694 5.10557L5.04529 5.90474L8.99973 4.32297V3C8.99973 2.44772 9.44745 2 9.99973 2ZM4.99973 10.2745L4.18149 12.8258C4.43108 12.9378 4.70776 13 4.99973 13C5.2917 13 5.56838 12.9378 5.81797 12.8258L4.99973 10.2745ZM14.9997 10.2745L14.1815 12.8258C14.4311 12.9378 14.7078 13 14.9997 13C15.2917 13 15.5684 12.9378 15.818 12.8258L14.9997 10.2745Z" fill="#151515"/>
                    </svg>
                </div>
                <div class="details">
                    <h3 class="top">Legal information</h3>
                    <router-link :to="{ name: 'terms'}">
                        <div class="link">
                            <h3>Terms of use</h3>
                            <img src="../assets/images/cheveron-right.png" alt="">
                        </div>
                    </router-link>
                    <router-link :to="{ name: 'privacy'}">
                        <div class="link">
                            <h3>Privacy policy</h3>
                            <img src="../assets/images/cheveron-right.png" alt="">
                        </div>
                    </router-link>
                </div>
            </article>
        </div>

    </div>
</template>

<script>
    export default {
        props: ['userId'],
        
    }
</script>

<style scoped>
    .header {
        margin: 1rem 0 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .header .icon {
        height: 1.5rem;
        width: 1.5rem;
        cursor: pointer;
    }

    .body {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .header h3 {
        color: var(--text-800);
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.375rem;
        letter-spacing: 0.0225rem;
    }

    .card {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 0.5rem;
        align-items: start;
    }

    .details {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .link {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
    }

    .link img {
        width: 1.25rem;
        height: 1.25rem;
        flex-shrink: 0;
    }

    .link h3 {
        color: var(--text-400);
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.25rem; /* 142.857% */
        letter-spacing: 0.0175rem;

    }
</style>