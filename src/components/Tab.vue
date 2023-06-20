<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <h2 class="font-bold text-blue-900 text-1xl">Vue Js Simple Tabs</h2>
        <div class="container mx-auto">
            <ul class="flex justify-center space-x-2 text-white">
                <li>
                    <button @click="activeTabOne" class="inline-block px-4 py-2 bg-purple-500">
                        Men's Wear
                    </button>
                </li>
                <li>
                    <button @click="activeTabTwo" class="inline-block px-4 py-2 bg-purple-500">
                        Women's Wear
                    </button>
                </li>
                <!-- <li>
                    <button @click="activeTabThree" class="inline-block px-4 py-2 bg-purple-500">
                        Tab 3
                    </button>
                </li> -->
            </ul>
            <div class="p-3 mt-6 bg-white border">
                <div v-show="tab === 1">
                    Tab 1 Content show Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.
                </div>
                <div v-show="tab === 2">
                    Tab 2 Content show Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit.
                </div>
                <!-- <div v-show="tab === 3">
                    Tab 3 Content show Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Amet,
                </div> -->
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            tab: 1,
        };
    },
    methods: {
        activeTabOne() {
            this.tab = 1;
        },
        activeTabTwo() {
            this.tab = 2;
        },
        // activeTabThree() {
        //     this.tab = 3;
        // },
    },
};
</script>