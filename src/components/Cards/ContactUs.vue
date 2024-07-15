<template>
  <div class="bg-white shadow-lg p-6 -mt-8 relative z-20">
    <h1 class="text-center text-2xl font-bold mb-8">PERSADA TRANSPORTASI INDONESIA</h1>
    <div class="mb-8">
      <h2 class="text-xl font-semibold">Maps</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.114490686282!2d106.96901337378046!3d-6.248641061180649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698c4ddfc081dd%3A0x5e951f0e20c770c7!2sPT%20Askara%20Internal!5e0!3m2!1sid!2sid!4v1720403423206!5m2!1sid!2sid"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="w-full h-64 mt-2 rounded-md"
      ></iframe>
    </div>
    <div class="mt-[107px] w-full self-start flex items-center mb-[33px]">
            <label class="px-8 text-[#000000] text-lg font-montserrat-bold font-bold">Contact</label>
            
            <hr class="w-full border border-black"></hr>
        </div>

        <div class="flex items-center gap-[95px] mb-20">
            <div class="w-[342px] h-[88px] flex items-center border border-gray-200 p-4 rounded-lg gap-6">
                <div class="w-10 h-10 bg-gray-600 rounded-[50%] flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#000000" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path></svg>
                </div>
                <div class="flex flex-col">
                    <label class="text-gray-600 text-lg font-montserrat-bold font-bold">
                        Marketing
                    </label>
                    <span class="text-gray-400 text-xs font-montserrat-bold font-medium">marketing@askara-int.com</span>
                </div>
            </div>

            <div class="w-[342px] h-[88px] flex items-center border border-gray-200 p-4 rounded-lg gap-6">
                <div class="w-10 h-10 bg-gray-600 rounded-[50%] flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#000000" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path></svg>
                </div>
                <div class="flex flex-col">
                    <label class="text-gray-600 text-lg font-montserrat-bold font-bold">
                        Marketing
                    </label>
                    <a href="https://wa.me/087819062569" target="_blank" class="text-gray-400 text-xs font-montserrat-bold font-medium">
                        https://wa.me/087819062569
                    </a>
                </div>
            </div>
        </div>
    <div class="mb-8">
      <h2 class="text-xl font-semibold">Alamat</h2>
      <hr class="my-2">
      <p><strong>Address:</strong></p>
      <p>Jl. KH Noer Alie Duta Permai Blok C1 No:9-12, West Java, Indonesia</p>
      <p><strong>Phone:</strong> +62 21 889637777</p>
    </div>
    <div class="flex justify-center mt-8">
      <button class="bg-gray-400 text-white px-4 py-2 rounded-md mx-2">Publish</button>
      <button class="bg-yellow-500 text-white px-4 py-2 rounded-md mx-2">Preview</button>
      <button class="bg-red-600 text-white px-4 py-2 rounded-md mx-2">Ubah</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Add your data properties here if needed
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
.contact-card span.material-icons {
  font-size: 2rem;
}
</style>
