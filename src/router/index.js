import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/tabbar/Home.vue'
import Member from '../components/tabbar/Member.vue'
import Shopcar from '../components/tabbar/Shopcar.vue'
import Search from '../components/tabbar/Search.vue'
import NewsList from '../components/news/NewsList.vue'
import NewsInfo from '../components/news/NewsInfo.vue'
import PhotoList from '../components/photos/PhotoList.vue'
import PhotoInfo from '../components/photos/PhotoInfo.vue'
import GoodsList from '../components/goods/GoodsList.vue'
import GoodsInfo from '../components/goods/GoodsInfo.vue'
import GoodsDesc from '../components/goods/GoodsDesc.vue'
import GoodsComment from '../components/goods/GoodsComment.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/member',
      name: 'Member',
      component: Member
    },
    {
      path: '/shopcar',
      name: 'Shopcar',
      component: Shopcar
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/home/newslist',
      name: 'NewsList',
      component: NewsList
    },
    {
      path: '/home/newsinfo/:id',
      name: 'NewsInfo',
      component: NewsInfo
    },
    {
      path: '/home/photolist',
      name: 'PhotoList',
      component: PhotoList
    },
    {
      path: '/home/photoinfo/:id',
      name: 'PhotoInfo',
      component: PhotoInfo
    },
    {
      path: '/home/goodslist',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/home/GoodsInfo/:id',
      name: 'GoodsInfo',
      component: GoodsInfo
    },
    {
      path: '/home/goodsdesc/:id',
      name: 'GoodsDesc',
      component: GoodsDesc
    },
    {
      path: '/home/goodscomment/:id',
      name: 'GoodsComment',
      component: GoodsComment
    },
  ],
  linkActiveClass: 'mui-active'
})
