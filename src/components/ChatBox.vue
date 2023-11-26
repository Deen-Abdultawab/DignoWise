<template>
    <section class="chat-container section-container">
        <div class="chat-box" v-for="chat in chats" :key="chat.id">
            <div class="user-chat">
                <div class="user-img">
                    <img src="../assets/images/profileImg.png" alt="">
                </div>
                <div contenteditable="true" class="user-text" :value="chat.message" ref="chatInput" readonly>
                    {{ chat.message }}
                </div>
                <div class="edit-btn" @click="handleFocus" :data-id="chat.id">
                    <img src="../assets/images/pencil.png" alt="" :data-id="chat.id">
                </div>
            </div>
            <div class="btn-container">
                <button class="sub-btn cus-btn" @click="handleSubmit" :data-id="chat.id">Submit</button>
                <button class="can-btn cus-btn" @click="handleCancel" :data-id="chat.id">Cancel</button>
            </div>
        </div>
        <div class="bot-chat">
            <div class="bot-img">
                <img src="../assets/images/chat-logo.png" alt="">
            </div>
            <div class="bot-text-field">
                <div>
                    <h3>I’m sorry to hear that. I’d like to help. Can you tell me more about your symptoms? Have you noticed any patterns or specific triggers for headache?</h3>
                </div>
                <div class="icons">
                    <div class="icon copy" @click="handleCopy">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M6.66659 4.16667H4.99992C4.07944 4.16667 3.33325 4.91286 3.33325 5.83333V15.8333C3.33325 16.7538 4.07944 17.5 4.99992 17.5H13.3333C14.2537 17.5 14.9999 16.7538 14.9999 15.8333V15M6.66659 4.16667C6.66659 5.08714 7.41278 5.83333 8.33325 5.83333H9.99992C10.9204 5.83333 11.6666 5.08714 11.6666 4.16667M6.66659 4.16667C6.66659 3.24619 7.41278 2.5 8.33325 2.5H9.99992C10.9204 2.5 11.6666 3.24619 11.6666 4.16667M11.6666 4.16667H13.3333C14.2537 4.16667 14.9999 4.91286 14.9999 5.83333V8.33333M16.6666 11.6667H8.33325M8.33325 11.6667L10.8333 9.16667M8.33325 11.6667L10.8333 14.1667" stroke="#A2A2A2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="icon like">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M11.6667 8.33333H15.6366C16.8756 8.33333 17.6814 9.63719 17.1273 10.7454L14.2107 16.5787C13.9283 17.1433 13.3512 17.5 12.7199 17.5H9.37184C9.23557 17.5 9.09982 17.4833 8.96762 17.4502L5.83333 16.6667M11.6667 8.33333V4.16667C11.6667 3.24619 10.9205 2.5 10 2.5H9.92044C9.50414 2.5 9.16667 2.83748 9.16667 3.25377C9.16667 3.84903 8.99047 4.43096 8.66028 4.92624L5.83333 9.16667V16.6667M11.6667 8.33333H10M5.83333 16.6667H4.16667C3.24619 16.6667 2.5 15.9205 2.5 15V10C2.5 9.07953 3.24619 8.33333 4.16667 8.33333H6.25" stroke="#A2A2A2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="icon dislike">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M8.33334 11.6667H4.3634C3.12443 11.6667 2.3186 10.3628 2.87269 9.25464L5.78935 3.42131C6.07167 2.85667 6.64878 2.5 7.28006 2.5H10.6282C10.7644 2.5 10.9002 2.51671 11.0324 2.54976L14.1667 3.33333M8.33334 11.6667V15.8333C8.33334 16.7538 9.07953 17.5 10 17.5H10.0796C10.4959 17.5 10.8333 17.1625 10.8333 16.7462C10.8333 16.151 11.0095 15.569 11.3397 15.0738L14.1667 10.8333V3.33333M8.33334 11.6667H10M14.1667 3.33333H15.8333C16.7538 3.33333 17.5 4.07952 17.5 5V10C17.5 10.9205 16.7538 11.6667 15.8333 11.6667H13.75" stroke="#A2A2A2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="icon share">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.23656 11.1183C7.40513 10.7818 7.5 10.402 7.5 10C7.5 9.59803 7.40513 9.21821 7.23656 8.88172M7.23656 11.1183C6.82611 11.9376 5.97874 12.5 5 12.5C3.61929 12.5 2.5 11.3807 2.5 10C2.5 8.61929 3.61929 7.5 5 7.5C5.97874 7.5 6.82611 8.06243 7.23656 8.88172M7.23656 11.1183L12.7634 13.8817M7.23656 8.88172L12.7634 6.11828M12.7634 6.11828C13.1739 6.93757 14.0213 7.5 15 7.5C16.3807 7.5 17.5 6.38071 17.5 5C17.5 3.61929 16.3807 2.5 15 2.5C13.6193 2.5 12.5 3.61929 12.5 5C12.5 5.40197 12.5949 5.78179 12.7634 6.11828ZM12.7634 13.8817C12.5949 14.2182 12.5 14.598 12.5 15C12.5 16.3807 13.6193 17.5 15 17.5C16.3807 17.5 17.5 16.3807 17.5 15C17.5 13.6193 16.3807 12.5 15 12.5C14.0213 12.5 13.1739 13.0624 12.7634 13.8817Z" stroke="#A2A2A2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="icon refresh">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M3.33325 3.33334V7.50001H3.81785M16.615 9.16668C16.2049 5.87808 13.3996 3.33334 9.99992 3.33334C7.2021 3.33334 4.80683 5.05682 3.81785 7.50001M3.81785 7.50001H7.49992M16.6666 16.6667V12.5H16.182M16.182 12.5C15.193 14.9432 12.7977 16.6667 9.99992 16.6667C6.60024 16.6667 3.79491 14.1219 3.38483 10.8333M16.182 12.5H12.4999" stroke="#A2A2A2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
                <p class="active">{{ activeMessage }}</p>
    </section>
</template>

<script>
import { ref } from 'vue'



    export default {
        props: ['chats'],
        setup(props){
            const edit = ref(false)
            const chatInput = ref(null)
            const activeMessage = ref('')


           function handleFocus(e){
                const targetElement = e.currentTarget
                const targetInput = targetElement.previousElementSibling
                targetElement.parentElement.nextElementSibling.classList.add('show')
                targetInput.readOnly = false
                targetInput.focus()
                edit.value = true

                
                
           }

           function handleSubmit(e){
            const targetElement = e.currentTarget
            const targetId = targetElement.dataset.id
            const targetInput = targetElement.parentElement.previousElementSibling.children[1]

            console.log(targetInput)

                props.chats.forEach(chat => {
                    if(chat.id === targetId){
                         chat.message = targetInput.value
                    }
                })
                targetInput.readOnly = true
                targetInput.blur()
                targetElement.parentElement.classList.remove('show')
           }

           function handleCancel(e){
                const targetElement = e.currentTarget
                const targetInput = targetElement.parentElement.previousElementSibling.children[1]
                targetInput.readOnly = true
                targetInput.blur()
                targetElement.parentElement.classList.remove('show')
           }

           function handleCopy(e){
                const targetElement = e.currentTarget.parentElement.previousElementSibling

                const storage = document.createElement('textarea')
                storage.value = targetElement.children[0].innerHTML
                targetElement.appendChild(storage)

                storage.select()
                storage.setSelectionRange(0, 999999)
                document.execCommand('copy')
                targetElement.removeChild(storage)
                activeMessage.value = 'copied to clipboard'
                setTimeout(()=>{
                    activeMessage.value = ''
                }, 1000)

                console.log(targetElement.style)
           }

            

            return {handleFocus, edit, handleSubmit, chatInput, handleCancel, handleCopy, activeMessage}
        }
        
    }
</script>

<style scoped>

.btn-container {
    width: 100%;
    align-items: center;
    justify-content: end;
    gap: 2.5rem;
    margin-bottom: 1rem;
    display: none;
}

.show {
    display: flex;
}

.active {
    color: green;
    font-size: 0.875rem;
    font-style: normal;
}

.sub-btn {
    border-radius: 0.5rem;
    background: var(--primary-normal-active, #5B21BA);
    padding: 0.6875rem 1.5rem;
    color: var(--primary-light, #F1EAFD);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.125rem; /* 128.571% */
    letter-spacing: 0.0175rem;
}

.can-btn {
    color: var(--primary-normal, #7229E8);
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25rem; /* 125% */
    letter-spacing: 0.015rem;
    background: none;
}
    .chat-container {
        padding-top: 0.75rem;
    }

    .user-chat {
        display: grid;
        align-items: start;
        grid-template-columns: auto 1fr auto;
        gap: 0.88rem;
        margin-bottom: 1rem;
    }

    .user-img {
        width: var(--spacing-6-pt);
        height: var(--spacing-6-pt);
        border-radius: 2rem;
    }

    .user-text {
        color: #000;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.25rem; /* 142.857% */
        letter-spacing: 0.0175rem;
        width: auto;
        border: none;
        background: inherit;
        height: auto;
        max-height: 10rem;
        /* border: 1px solid red; */

    }

    .user-text:focus {
        border: none;
        outline: none;
    }

    .edit-btn {
        width: 1.25rem;
        height: 1.25rem;
    }

    .bot-chat {
        display: flex;
        padding: 0.75rem 0.5rem;
        align-items: flex-start;
        gap: 0.5rem;
        border-radius: var(--spacing-2-pt, 0.5rem);
        background: var(--primary-light);
    }

    .bot-img {
        width: 1.625rem;
        height: 1.625rem;
        flex-shrink: 0;
    }

    .bot-text-field {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .icons .icon {
        width: 1.25rem;
        height: 1.25rem;
        cursor: pointer;
    }



    .icons {
        display: flex;
        align-items: center;
        gap: 1rem;
    }



    .bot-chat h3 {
        color: #000;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.25rem; /* 142.857% */
        letter-spacing: 0.0175rem;
    }

</style>