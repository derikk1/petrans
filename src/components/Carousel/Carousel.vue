<template>
    <div class="carousel relative w-full overflow-hidden">
        <div class="z-[100] absolute px-2 py-[320px] font-medium text-7xl text-dark">
            <img src="@/assets/img/text-hero.png" alt="Persada Transpotasi Indonesia">
        </div>
        <div class="carousel-inner relative">
            <div class="carousel-item active">
                <img src="../../assets/img/bg_carousel.png" alt="Image 1" class="w-full">
            </div>
            <div class="carousel-item">
                <img src="../../assets/img/bg_carousel.png" alt="Image 2" class="w-full">
            </div>
            <div class="carousel-item">
                <img src="../../assets/img/bg_carousel.png" alt="Image 3" class="w-full">
            </div>
        </div>
        <div class="carousel-indicators absolute bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center items-center">
            <span class="indicator active mx-1 cursor-pointer" data-slide-to="0"></span>
            <span class="indicator mx-1 cursor-pointer" data-slide-to="1"></span>
            <span class="indicator mx-1 cursor-pointer" data-slide-to="2"></span>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue'
export default {
    setup() {
        onMounted(() => {
            const slides = document.querySelectorAll('.carousel-item');
            const indicators = document.querySelectorAll('.indicator');
            let currentIndex = 0;
            const intervalTime = 3000; // 3 seconds
            let slideInterval;

            function showSlide(index) {
                slides.forEach((slide, i) => {
                    slide.classList.toggle('active', i === index);
                });
                indicators.forEach((indicator, i) => {
                    indicator.classList.toggle('active', i === index);
                });
            }

            function nextSlide() {
                currentIndex = (currentIndex + 1) % slides.length;
                showSlide(currentIndex);
            }

            function startSlideShow() {
                slideInterval = setInterval(nextSlide, intervalTime);
            }

            function stopSlideShow() {
                clearInterval(slideInterval);
            }

            indicators.forEach((indicator, i) => {
                indicator.addEventListener('click', () => {
                    stopSlideShow();
                    currentIndex = i;
                    showSlide(currentIndex);
                    startSlideShow();
                });
            });

            startSlideShow();
        })
    }
}
</script>

<style scoped>
    .carousel-item {
            min-width: 100%;
            transition: opacity 1s ease-in-out;
            opacity: 0;
            position: absolute;
        }

        .carousel-item.active {
            opacity: 1;
            position: relative;
        }

        .indicator {
            width: 10px;
            height: 10px;
            background-color: white;
            border-radius: 50%;
            transition: width 0.3s ease-in-out;
        }

        .indicator.active {
            width: 20px;
        }
</style>