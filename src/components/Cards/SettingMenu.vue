<template>
  <div class="bg-white shadow-lg p-6 -mt-8 relative z-20">
    <div class="flex justify-between items-center mb-4">
        <h3 class="text-red-700 text-3xl font-inter font-normal">Dashboard</h3>
        <button class="bg-red-700 text-white text-xl font-inter font-bold w-64 h-12 rounded-l-full">View Chart</button>
    </div>
    <div class="flex items-center bg-white text-red-700 p-4 rounded shadow mb-4">
      <label for="month-year" class="block font-inter font-normal mr-4">Month/year</label>
      <input type="month" id="month-year" class="border w-28 h-7 rounded" value="2024-03" />
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div class="bg-white p-4 rounded shadow">
        <div class="bg-red-700 text-white text-xl font-inter font-bold w-64 h-12 rounded-r-full flex items-center justify-center">
          Shipper Proses
        </div>
        <p class="text-red-700 text-3xl mb-4 w-28 h-28 flex items-center justify-center">10</p>
        <table class="w-full text-left">
          <thead class="border-b">
            <tr>
              <th class="py-2">Shipper</th>
              <th class="py-2">BL No</th>
              <th class="py-2">Invoice NO</th>
              <th class="py-2">Status</th>
              <th class="py-2">Publish</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="py-2">PETRANS</td>
              <td class="py-2">22546854623</td>
              <td class="py-2">0123456789</td>
              <td class="py-2"><button class="bg-red-700 text-white px-2 py-1 rounded">Depart</button></td>
              <td class="py-2 text-center">✔️</td>
            </tr>
            <tr class="border-b">
              <td class="py-2">FIM GLOBAL</td>
              <td class="py-2">22546854623</td>
              <td class="py-2">0123456789</td>
              <td class="py-2"><button class="bg-yellow-500 text-white px-2 py-1 rounded">Transit</button></td>
              <td class="py-2 text-center">✔️</td>
            </tr>
            <tr>
              <td class="py-2">IPL</td>
              <td class="py-2">22546854623</td>
              <td class="py-2">0123456789</td>
              <td class="py-2"><button class="bg-blue-500 text-white px-2 py-1 rounded">Delivery</button></td>
              <td class="py-2 text-center">✔️</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="bg-white p-4 rounded shadow">
        <div class="bg-red-700 text-white text-xl font-inter font-bold w-64 h-12 rounded-r-full flex items-center justify-center">
          Shipper Close
        </div>
        <p class="text-red-700 text-3xl mb-4 w-28 h-28 flex items-center justify-center">50</p>
        <table class="w-full text-left">
          <thead class="border-b">
            <tr>
              <th class="py-2">Shipper</th>
              <th class="py-2">BL No</th>
              <th class="py-2">Invoice NO</th>
              <th class="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="py-2">PETRANS</td>
              <td class="py-2">22546854623</td>
              <td class="py-2">0123456789</td>
              <td class="py-2"><button class="bg-green-500 text-white px-2 py-1 rounded">Close</button></td>
            </tr>
            <tr class="border-b">
              <td class="py-2">FIM GLOBAL</td>
              <td class="py-2">22546854623</td>
              <td class="py-2">0123456789</td>
              <td class="py-2"><button class="bg-green-500 text-white px-2 py-1 rounded">Close</button></td>
            </tr>
            <tr>
              <td class="py-2">IPL</td>
              <td class="py-2">22546854623</td>
              <td class="py-2">0123456789</td>
              <td class="py-2"><button class="bg-green-500 text-white px-2 py-1 rounded">Close</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="bg-white p-4 rounded shadow col-span-2">
        <div class="bg-red-700 text-white text-xl font-inter font-bold w-64 h-12 rounded-r-full flex items-center justify-center">
          Invoice
        </div>
        <p class="text-red-700 text-3xl mb-4 w-28 h-28 flex items-center justify-center">60</p>
        <table class="w-full text-left">
          <thead class="border-b">
            <tr>
              <th class="py-2">No Job Order</th>
              <th class="py-2">Shipper</th>
              <th class="py-2">B/L No</th>
              <th class="py-2">Invoice NO</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="py-2">TRA01</td>
              <td class="py-2">PETRANS</td>
              <td class="py-2">22546854623</td>
              <td class="py-2">0123456789</td>
            </tr>
            <tr class="border-b">
              <td class="py-2">TRA02</td>
              <td class="py-2">FIM GLOBAL</td>
              <td class="py-2">22546854623</td>
              <td class="py-2">0123456789</td>
            </tr>
            <tr class="border-b">
              <td class="py-2">TRA03</td>
              <td class="py-2">IPL</td>
              <td class="py-2">22546854623</td>
              <td class="py-2">0123456789</td>
            </tr>
            <tr class="border-b">
              <td class="py-2">TRA04</td>
              <td class="py-2">PETRANS</td>
              <td class="py-2">22546854623</td>
              <td class="py-2">0123456789</td>
            </tr>
            <tr class="border-b">
              <td class="py-2">TRA05</td>
              <td class="py-2">FIM GLOBAL</td>
              <td class="py-2">22546854623</td>
              <td class="py-2">0123456789</td>
            </tr>
            <tr class="border-b">
              <td class="py-2">TRA06</td>
              <td class="py-2">IPL</td>
              <td class="py-2">22546854623</td>
              <td class="py-2">0123456789</td>
            </tr>
            <tr class="border-b">
              <td class="py-2">TRA07</td>
              <td class="py-2">PETRANS</td>
              <td class="py-2">22546854623</td>
              <td class="py-2">0123456789</td>
            </tr>
            <tr class="border-b">
              <td class="py-2">TRA08</td>
              <td class="py-2">FIM GLOBAL</td>
              <td class="py-2">22546854623</td>
              <td class="py-2">0123456789</td>
            </tr>
            <tr>
              <td class="py-2">TRA09</td>
              <td class="py-2">IPL</td>
              <td class="py-2">22546854623</td>
              <td class="py-2">0123456789</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
};
</script>

<style scoped>
.text-3xl {
  font-size: 1.875rem; /* 30px */
  line-height: 2.25rem; /* 36px */
}
.mb-4 {
  margin-bottom: 1rem; /* 16px */
}
.w-28 {
  width: 114px; /* or use w-[114px] in Tailwind */
}
.h-28 {
  height: 116px; /* or use h-[116px] in Tailwind */
}
</style>