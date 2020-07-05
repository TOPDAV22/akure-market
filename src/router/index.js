import Vue from 'vue'
import Router from 'vue-router'
import products from '@/components/products'
import MeasurementsPage from "@/components/measurement/MeasurementsPage"
import productVariant from "@/components/productVariant"
import categoriesPage from "@/components/category/categoriesPage"
import cart from "@/components/cart"
import variant from '@/components/variant'
import Measurement from '@/components/Measurement'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/products',
      name: 'products',
      component: products
    },
    {
      path: '/',
      name: 'Measurements',
      component: MeasurementsPage
    },
    {
      path: '/productVariant',
      name: 'productVariant',
      component: productVariant
    },
    {
      path: '/categoriesPage',
      name: 'categoriesPage',
      component: categoriesPage
    },
    {
      path: '/categories/:Dvalue/products',
      name: 'category-products',
      component: products
    },
    {
      path: '/products/:myId/productVariant',
      name: 'product-productVariant',
      component: productVariant
    },
    {
      path: "/cart",
      name: 'cart',
      component: cart
    },
    {
      path: '/variant',
      name: "variant",
      component: variant,
    },
{
    path: "/Measurement",
    name: "Measurement",
    component:Measurement

}
  ]
})
