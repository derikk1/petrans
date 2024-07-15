<script setup>
import Navbar from '@/components/Navbars/Navbar.vue'
import Footer from '@/components/Footers/Footer.vue'
import Carousel from '@/components/Carousel/Carousel.vue'
import HomeBody from '@/components/HomeBody/Body.vue'
import BusinessProcess from '@/components/BusinessProcess/Business.vue'
import OurService from '@/components/OurService/Service.vue'
import PartnerBusiness from '@/components/PartnerBusiness/Partner.vue'
import ContactUs from '@/components/ContactUs/Contact.vue'
import TrackShipment from '@/components/TrackShipment/Track.vue'
</script>

<template>
  <Navbar/>
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

  <section id="partner-business" class="w-full flex justify-center pb-10">
    <PartnerBusiness/>
  </section>

  <section id="contact-us" class="w-full flex justify-center pb-10">
    <ContactUs/>
  </section>

  <section id="track-shipment" class="w-full flex justify-center pb-10">
    <TrackShipment/>
  </section>
  <Footer/>
</template>

<style scoped>
</style>
