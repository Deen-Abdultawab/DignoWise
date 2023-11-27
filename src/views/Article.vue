<template>
    <div class="article-page">
        <Navbar :logo="logo" :title="title" class="nav"/>
        <div class="presentation">
            <!-- <div class="cancel-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M5.15128 5.15146C5.61991 4.68283 6.3797 4.68283 6.84833 5.15146L11.9998 10.3029L17.1513 5.15146C17.6199 4.68283 18.3797 4.68283 18.8483 5.15146C19.317 5.62009 19.317 6.37989 18.8483 6.84852L13.6969 12L18.8483 17.1515C19.317 17.6201 19.317 18.3799 18.8483 18.8485C18.3797 19.3171 17.6199 19.3171 17.1513 18.8485L11.9998 13.697L6.84833 18.8485C6.3797 19.3171 5.61991 19.3171 5.15128 18.8485C4.68265 18.3799 4.68265 17.6201 5.15128 17.1515L10.3027 12L5.15128 6.84852C4.68265 6.37989 4.68265 5.62009 5.15128 5.15146Z" fill="#131313"/>
                </svg>
            </div> -->
            <div class="article-container">
                <article class="article" v-for="article in articles" :key="article.id">
                    <div class="img">
                        <img :src="require(`@/assets/images/${article.src}`)" alt="">
                    </div>
                    <div class="info">
                        <a href="#" class="link">{{ article.title }}</a>
                        <p>{{ article.source }}</p>
                    </div>
                </article>
            </div>
        </div>

    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import { ref } from 'vue';
    export default {
        components: { Navbar },
        setup(){
            const title = 'Health Articles'
            const logo = 'article-2.png'
            const url = 'https://newsapi.org/v2/top-headlines?country=ng&category=health&apiKey=9dc43693000c4e3896b62cec6d15cffc'
            const items = ref([])
           

            const articles = [
                {
                    id: 1,
                    src: 'img1.png',
                    title: 'Do children get migraine headaches? What parents need to know',
                    source: 'Harvard Health Publishing'
                },
                {
                    id: 2,
                    src: 'img2.png',
                    title: 'Veggie Burgers: Health Tips from a Dietitian',
                    source: 'Johns Hopkins Medicine'
                },
                {
                    id: 3,
                    src: 'img3.png',
                    title: 'Kidneys, eyes, ears, and more: Why do we have a spare?',
                    source: 'Harvard Health Publishing'
                },
                {
                    id: 4,
                    src: 'img4.png',
                    title: 'Extreme heat projected to increase cardiovascular deaths',
                    source: 'National Institutes of Health (NIH)'
                },
                {
                    id: 7,
                    src: 'img5.png',
                    title: 'Mammogram Age Guidelines: What You Need to Know',
                    source: 'Johns Hopkins Medicine'
                },
                {
                    id: 6,
                    src: 'img6.png',
                    title: 'High levels of particulate air pollution associated with increased breast cancer incidence',
                    source: 'National Institutes of Health (NIH)'
                },
                {
                    id: 5,
                    src: 'img7.png',
                    title: 'Opill: Is this new birth control pill right for you?',
                    source: 'Harvard Health Publishing'
                },
            ]

            // function fetchData() {
            //     fetch(url)
            //         .then(response => {
            //             if (!response.ok) {
            //                 throw new Error('Network response was not ok')
            //             }
            //             return response.json()
            //         })
            //         .then(data => {console.log(data.article)})
            //         .catch(error => {
            //             console.error('Error fetching data:', error)
            //         });
            //     }

            // fetchData()
            
            
            
           
            console.log(items.value)
            
            return { title, logo , articles}
        }
    }
</script>

<style scoped>

    .article-page {
        position: relative;
        height: 100vh;
        overflow: hidden;
    }
    .nav {
        position: sticky;
        top: 0;
    }

    .presentation {
        margin: 1.5rem auto;
    }

    .info {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .info a {
        color: var(--text-500);
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 600;
        line-height: 1.25rem;
        letter-spacing: 0.0175rem;
        text-decoration-line: underline;
    }

    .info p {
        color: var(--primary-normal);
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1rem; /* 133.333% */
        letter-spacing: 0.01125rem;

    }

    .article-container {
        display: flex;
        flex-direction: column;
        height: calc(100vh - 2.875rem);
        overflow-y: auto;
        padding-bottom: 1.5rem;
    }

    .article-container::-webkit-scrollbar{
        display: none;
    }

    .article {
        display: grid;
        align-items: center;
        gap: 0.69rem;
        padding: 1rem;
        grid-template-columns: auto 1fr;
        border-bottom: 1px solid  #DCDCDC;

    }

    .img {
        width: 4.5rem;
        height: 4.5rm;
        border-radius: var(--spacing-2-pt, 0.5rem);
        border: 1px solid var(--primary-light-active);
    }
</style>