import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Shop from '../views/Shop.vue'
import NotFound from '../views/NotFound.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Detail from '../views/Detail.vue'
import MensJas from '../views/MensJas.vue'
import MensKemeja from '../views/MensKemeja.vue'
import MensJaket from '../views/MensJaket.vue'
import MensCelana from '../views/MensCelana.vue'
import MensBlazer from '../views/MensBlazer.vue'
import WomensBlazer from '../views/WomensBlazer.vue'
import WomensCelanaDanRok from '../views/WomensCelanaDanRok.vue'


const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/shop',
        component: Shop
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/mens-jas',
        component: MensJas
    },
    {
        path: '/mens-kemeja',
        component: MensKemeja
    },
    {
        path: '/mens-jaket',
        component: MensJaket
    },
    {
        path: '/mens-blazer',
        component: MensBlazer
    },
    {
        path: '/mens-celana',
        component: MensCelana
    },
    {
        path: '/womens-blazer',
        component: WomensBlazer
    },
    {
        path: '/womens-celana-dan-rok',
        component: WomensCelanaDanRok
    },
    {
        path: '/product-detail',
        component: ProductDetail
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router 