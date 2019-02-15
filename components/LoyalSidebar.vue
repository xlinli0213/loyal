<template>
  <div class="sidebar">
    <div v-for="(menu,index) in menuList" :key="index" class="sidebar__menu">
      <h3 class="title">{{ menu.title }}</h3>
      <ul v-for="item in menu.items" :key="item.desc">
        <li class="item">
          <loyal-icon :name="item.icon" />{{ item.desc }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoyalSidebar',
  data() {
    return {
      menuList: [
        {
          title: 'DASHBOARD',
          items: [
            {
              icon: 'dashboard',
              desc: 'Overview'
            }
          ]
        },
        {
          title: 'CATALOG',
          items: [
            {
              icon: 'bookmark',
              desc: 'Categories'
            },
            {
              icon: 'product',
              desc: 'Products'
            },
            {
              icon: 'inventory',
              desc: 'Product stock'
            },
            {
              icon: 'cart',
              desc: 'Orders'
            },
            {
              icon: 'download',
              desc: 'Pyramid orders'
            },
            {
              icon: 'calculator',
              desc: 'Create T-Shop order'
            }
          ]
        }
      ]
    }
  }
}
</script>
