<template>
    <Teleport to="#modal">
        <Transition name="modal">
            <div class="modal-bg">
                <div class="modal max-w-[817px] max-h-[520px] overflow-y-auto flex flex-col items-center">
                    <button @click="closeModal" class="close-btn font-montserrat-bold font-bold">
                        X
                    </button>
    
                    <h1 class="text-[#00000] text-center text-2xl font-montserrat-bold font-bold mb-[42px]">
                        Our Service
                    </h1>
    
                    <img :src="image" class="mb-[23px]">
    
                    <label class="text-[#00000] self-start text-xl font-montserrat-bold font-bold mb-[23px]">
                        {{ props.detailData.title }}
                    </label>
    
                    <p class="text-[#00000] self-start text-sm font-montserrat font-bold">
                        {{ props.detailData.detail }}
                    </p>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
import { ref } from 'vue'

const modalTarget = ref(null)

console.log(modalTarget.value)

const props = defineProps({
    detailData: Object
})

const image = new URL(props.detailData.gambar, import.meta.url)
console.log(`porps`, props)

const emit = defineEmits(['toggleModal'])

const closeModal = () => {
    emit('toggleModal')
}

</script>

<style scoped>
.modal-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    align-items: center;
    justify-content: center;
}

.modal {
    position: relative;
    background: white;
    padding: 50px 100px;
    border-radius: 5px;
}

.modal .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;

    background: none;
    border: none;
    cursor: pointer;
}

.modal-enter-active,
.modal-leave.active {
    transition: all 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
    transform: scale(1.1);
}
</style>