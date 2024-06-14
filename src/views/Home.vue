<script setup>
import Carousel from '@/components/Carousel/Carousel.vue'
import HomeBody from '@/components/HomeBody/Body.vue'
import BusinessProcess from '@/components/BusinessProcess/Business.vue'
import OurService from '@/components/OurService/Service.vue'
import PartnerBusiness from '@/components/PartnerBusiness/Partner.vue'
import ContactUs from '@/components/ContactUs/Contact.vue'
import TrackShipment from '@/components/TrackShipment/Track.vue'
</script>

<template>
  <div class="flex bg-white w-full">
    <Carousel/>
  </div>

  <div class="flex items-center w-full py-[240px] px-6">
    <HomeBody/>
  </div>

  <section id="business-process" class="flex justify-center pb-10">
    <BusinessProcess/>
  </section>

  <section id="our-service" class="w-full flex justify-center py-16">
    <OurService/>
  </section>

  <section id="partner-business" class="w-full flex justify-center pb-8">
    <PartnerBusiness/>
  </section>

  <section id="contact-us" class="w-full flex justify-center pb-8">
    <ContactUs/>
  </section>

  <section id="track-shipment" class="w-full flex justify-center pb-8">
    <TrackShipment/>
  </section>
</template>

<style scoped>
</style>
