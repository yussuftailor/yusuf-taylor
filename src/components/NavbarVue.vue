<!-- eslint-disable vue/no-unused-components -->
<template>
    <nav class="bg-white sticky top-0 shadow-md">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <button @click="showMenu = !showMenu" type="button"
                        class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        aria-controls="mobile-menu" aria-expanded="false">
                        <!-- <span class="sr-only">Open main menu</span> -->
                    <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
                                          -->
                        <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
                                          -->
                        <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div
                    class="flex flex-1 items-center sm:items-stretch sm:justify-between xl:max-w-7xl lg:max-w-screen-lg md:max-w-screen-md px-4 mx-auto">
                    <router-link to="/" @click="showMenu = !showMenu" class="flex flex-shrink-0 items-center">
                        <img class="block h-8 w-auto lg:hidden" src="../assets/logo.png" alt="Your Company">
                        <img class="hidden h-8 w-auto lg:block" src="../assets/logo.png" alt="Your Company">
                    </router-link>
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="sm:ml-6 sm:block">
                            <div class="flex space-x-4 font-philosopher">
                                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700" -->
                                <router-link to="/shop" href="#"
                                    class="text-brand hover:bg-gray-700 rounded-md px-3 py-2 text-md font-bold">Shop</router-link>
                                <router-link to="/about" href="#"
                                    class="text-brand hover:bg-gray-700 rounded-md px-3 py-2 text-md font-bold">About</router-link>
                                <router-link to="/contact" href="#"
                                    class="text-brand hover:bg-gray-700 rounded-md px-3 py-2 text-md font-bold">Contact</router-link>
                                <a href="/contact"
                                    class="font-philosopher w-fit rounded-md bg-brand px-3.5 py-2.5 text-sm font-semibold"
                                    style="color:#FFFFFF;">Contact</a>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"> -->
                </div>

            </div>


        </div>

        <!-- </div> -->

        <!-- Mobile menu, show/hide based on menu state. -->
        <!-- <div class="sm:hidden" id="mobile-menu"> -->
        <div :class="showMenu ? 'flex' : 'hidden'" class="sm:hidden" id="mobile-menu">
            <div class="text-left flex font-philosopher flex-col gap-4 space-y-1 px-2 pb-3 pt-2">
                <router-link @click="showMenu = !showMenu" to="/shop" href="#"
                    class="px-4 text-brand  hover:bg-gray-700 block rounded-md py-2 text-base font-bold"
                    aria-current="page">Shop</router-link>
                <router-link @click="showMenu = !showMenu" to="/about" href="#"
                    class="px-4 text-brand  hover:bg-gray-700 block rounded-md py-2 text-base font-bold">About</router-link>
                <!-- <router-link @click="showMenu = !showMenu" to="/" href="#" class="px-4 text-brand  hover:bg-gray-700 block rounded-md py-2 text-base font-bold">Home</router-link> -->
                <router-link @click="showMenu = !showMenu" to="/contact" href="#"
                    class="px-4 text-brand  hover:bg-gray-700 block rounded-md py-2 text-base font-bold">Contact</router-link>
                <a href="/contact" class="mx-4 font-philosopher w-fit rounded-md bg-brand px-3.5 py-2.5 text-sm font-semibold"
                    style="color:#FFFFFF;">Contact</a>
            </div>
        </div>
    </nav>
</template>

<script>
import router from '@/router';

export default {
    name: "NavbarVue",

    // eslint-disable-next-line vue/no-unused-components
    components: { router },
    data() {
        return {
            showMenu: false,
        }
    }
}
</script>

<style></style>