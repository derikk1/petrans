<template>
    <div class="flex flex-col gap-4">
        <div class="w-full flex flex-col items-center">
            <div class="our-service mb-6">
                <h3 class="text-[#00000] text-3xl font-montserrat-bold font-bold">PERSADA TRANSPORTASI INDONESIA</h3>
            </div>
    
            <div class="flex justify-center">
                <div class="flex justify-around items-center">
                    <div class="flex flex-col gap-2 w-1/2">
                        <h3 class="text-[#00000] text-7xl font-montserrat-bold font-bold">TRACK YOUR
                            SHIPPING 
                        </h3>
        
                        <input class="p-4 border border-[#000000] rounded-lg" placeholder="Search By BL">
                    </div>
            
                    <div class="w-[393px] bg-red-500">
                        <img src="../../assets/img/icon.svg">
                    </div>
                </div>
            </div>
        </div>
    
        <div class="flex flex-col items-center drop-shadow-lg">
            <div class="w-[1219px] h-[223px] bg-[#F6F5F5] pt-4 rounded-sm">
                <div class="bg-[#D9D9D9]">
                    <h1 class="text-[#00000] text-center text-xl py-2 font-montserrat-bold font-bold">
                        SHIPMENT'S DETAIL
                    </h1>
                </div>

                <div class="grid grid-cols-2 mt-4 mx-8">
                    <div class="flex flex-col gap-[10px]">
                        <div class="flex items-center gap-2">
                            <label class="uppercase text-[#00000] text-sm font-montserrat-bold font-bold">
                                shipper :
                            </label>
                            <span>test</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <label class="uppercase text-[#00000] text-sm font-montserrat-bold font-bold">
                                consignee :
                            </label>
                            <span>test</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <label class="uppercase text-[#00000] text-sm font-montserrat-bold font-bold">
                                b/l no :
                            </label>
                            <span>test</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <label class="uppercase text-[#00000] text-sm font-montserrat-bold font-bold">
                                invoice no :
                            </label>
                            <span>test</span>
                        </div>

                    </div>
                    <div class="flex flex-col gap-[10px]">
                        <div class="flex items-center gap-2">
                            <label class="uppercase text-[#00000] text-sm font-montserrat-bold font-bold">
                                etd :
                            </label>

                            <span>test</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <label class="uppercase text-[#00000] text-sm font-montserrat-bold font-bold">
                                eta :
                            </label>

                            <span>test</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <label class="uppercase text-[#00000] text-sm font-montserrat-bold font-bold">
                                shipment method :
                            </label>

                            <span>test</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <label class="uppercase text-[#00000] text-sm font-montserrat-bold font-bold">
                                cargo type :
                            </label>

                            <span>test</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center drop-shadow-lg">
            <div class="w-[1219px] bg-[#F6F5F5] pt-4 pb-4 rounded-sm">
                <div class="flex gap-4 justify-center items-center mt-10">
                    <!-- DEPART -->
                    <div class="flex flex-col items-center">
                        <div class="bg-red-700 rounded-full h-[53px] w-[207px] flex items-center justify-center">
                            <span class="text-white font-bold text-lg">DEPART</span>
                        </div>
                    </div>
                    <!-- Panah -->
                    <div class="flex items-center">
                        <div class="h-[2px] w-[50px] bg-red-700"></div>
                        <div class="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[20px] border-l-red-700"></div>
                    </div>
                    <!-- TRANSIT -->
                    <div class="flex flex-col items-center">
                        <div class="bg-red-700 rounded-full h-[53px] w-[207px] flex items-center justify-center">
                            <span class="text-white font-bold text-lg">TRANSIT</span>
                        </div>
                    </div>
                    <!-- Panah -->
                    <div class="flex items-center">
                        <div class="h-[2px] w-[50px] bg-red-700"></div>
                        <div class="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[20px] border-l-red-700"></div>
                    </div>
                    <!-- ARRIVE AT -->
                    <div class="flex flex-col items-center">
                        <div class="bg-red-700 rounded-full h-[53px] w-[207px] flex items-center justify-center">
                            <span class="text-white font-bold text-lg">ARRIVE AT</span>
                        </div>
                    </div>
                    <!-- Panah -->
                    <div class="flex items-center">
                        <div class="h-[2px] w-[50px] bg-red-700"></div>
                        <div class="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[20px] border-l-red-700"></div>
                    </div>
                    <!-- DELIVERY -->
                    <div class="flex flex-col items-center">
                        <div class="bg-red-700 rounded-full h-[53px] w-[207px] flex items-center justify-center">
                            <span class="text-white font-bold text-lg">DELIVERY</span>
                        </div>
                    </div>
                </div>
                <div class="flex gap-4 justify-center items-start mt-10">
                    <!-- DEPART Details -->
                    <div class="flex flex-col items-center w-[207px]">
                        <div class="text-left">
                            <p class="font-bold">01 Januari 2023</p>
                            <p>12:03:00</p>
                            <p>Barang masih dalam proses</p>
                        </div>
                    </div>
                    <!-- Empty space for the arrow -->
                    <div class="flex items-center">
                        <div class="h-[2px] w-[50px] invisible"></div>
                    </div>
                    <!-- TRANSIT Details -->
                    <div class="flex flex-col items-center w-[207px]">
                        <div class="text-left">
                            <p class="font-bold">01 Januari 2023</p>
                            <p>12:03:00</p>
                            <p>Barang masih dalam proses</p>
                        </div>
                    </div>
                    <!-- Empty space for the arrow -->
                    <div class="flex items-center">
                        <div class="h-[2px] w-[50px] invisible"></div>
                    </div>
                    <!-- ARRIVE AT Details -->
                    <div class="flex flex-col items-center w-[207px]">
                        <div class="text-left">
                            <p class="font-bold gap-1">Tanjung Priuk Port</p>
                            <p class="font-bold">01 Januari 2023</p>
                            <p>12:03:00</p>
                            <p>Barang masih dalam proses</p>
                        </div>
                    </div>
                    <!-- Empty space for the arrow -->
                    <div class="flex items-center">
                        <div class="h-[2px] w-[50px] invisible"></div>
                    </div>
                    <!-- DELIVERY Details -->
                    <div class="flex flex-col items-center w-[207px]">
                        <div class="text-left">
                            <p class="font-bold gap-1">Inland Port</p>
                            <p class="font-bold">Banshu Plastic</p>
                            <p>Jl H Imran No 19</p>
                            <p class="font-bold">01 Januari 2023</p>
                            <p>12:03:00</p>
                            <p>Barang masih dalam proses</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>