<template>
    <div class="bg-white">
        <div
            class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-2 lg:px-8">
            <!-- Left Collumn -->
            <div class="flex justify-center">

                <img src="@/assets/img/how-we-work.png" alt="" class="object-fill">
            </div>
            <div class="order-first md:order-first lg:order-last">
                <h2 class="text-left font-philosopher font-bold text-brand text-2xl md:text-4xl">Bagaimana Kami Bekerja?</h2>
                <p class="text-left mt-4 font-philosopher text-base max-w-2xl">Kami memiliki proses kerja yang terstruktur dan berorientasi pada kebutuhan dan preferensi Anda sebagai pelanggan. Berikut adalah gambaran umum tentang bagaimana kami bekerja:</p>
                <div class="flex gap-4 lg:gap-8">
                    <div class="flex flex-col gap-4 items-start mt-8 p-0 h-fit w-full">
                        <div class="flex flex-col mt-4 gap-2 items-start p-0 w-full">
                            <div class="h-px bg-brand bg-opacity-25 w-full"></div>
                            <p class="font-philosopher text-base font-bold text-brand">Konsultasi:</p>
                            <p class="font-philosopher text-base text-left">Kami memulai dengan konsultasi mendalam untuk memahami gaya, preferensi, dan kebutuhan Anda.</p>
                        </div>
                        <div class="flex flex-col mt-4 gap-2 items-start p-0 w-full">
                            <div class="h-px bg-brand bg-opacity-25 w-full"></div>
                            <p class="font-philosopher text-base font-bold text-brand">Desain & Garment</p>
                            <p class="font-philosopher text-base text-left">Berdasarkan konsultasi awal, kami akan mengembangkan desain yang sesuai dengan preferensi Anda.</p>
                        </div>
                        <div class="flex flex-col mt-4 gap-2 items-start p-0 w-full">
                            <div class="h-px bg-brand bg-opacity-25 w-full"></div>
                            <p class="font-philosopher text-base font-bold text-brand">Penyesuaian</p>
                            <p class="font-philosopher text-base text-left">kami akan melakukan penyesuaian terakhir untuk memastikan pakaian tersebut pas dengan sempurna pada tubuh Anda.</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-4 items-start mt-8 p-0 h-fit w-full">
                        <div class="flex flex-col mt-4 gap-2 items-start p-0 w-full">
                            <div class="h-px bg-brand bg-opacity-25 w-full"></div>
                            <p class="font-philosopher text-base font-bold text-brand">Pengukuran</p>
                            <p class="font-philosopher text-base text-left">Kami akan mengambil pengukuran yang akurat untuk memastikan pakaian yang kami buat pas dengan tubuh Anda secara sempurna.</p>
                        </div>
                        <div class="flex flex-col mt-4 gap-2 items-start p-0 w-full">
                            <div class="h-px bg-brand bg-opacity-25 w-full"></div>
                            <p class="font-philosopher text-base font-bold text-brand">Pembuatan & Penjahitan</p>
                            <p class="font-philosopher text-base text-left">Kami akan melakukan penyesuaian terakhir untuk memastikan pakaian tersebut pas dengan sempurna pada tubuh Anda.</p>
                        </div>
                        <div class="flex flex-col mt-4 gap-2 items-start p-0 w-full">
                            <div class="h-px bg-brand bg-opacity-25 w-full"></div>
                            <p class="font-philosopher text-base font-bold text-brand">Pengiriman & Purna Jual</p>
                            <p class="font-philosopher text-base text-left">Kami akan mengatur pengiriman atau penjemputan di toko kami.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'AboutHowWeWork'
}
</script>