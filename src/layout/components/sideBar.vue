<template>
  <div class="sidebar-container">
    <a-layout-sider v-model="isCollapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="inline"
        :selected-keys="currentSelectMenu"
        :open-keys="openKeys"
        @click="menuClick"
        @openChange="onOpenChange"
      >
        <template v-for="item in routers">
          <template v-if="!item.hidden">
            <!-- menu -->
            <a-menu-item v-if="hasOneChildren(item.children)" :key="item.redirect" class="menu-title">
              <a-icon
                :type="
                  item.children[0] &&
                    item.children[0].meta &&
                    item.children[0].meta.icon"
              />
              <span class="menu-title">
                <router-link
                  style="display: inline-block"
                  :to="{
                    path:
                      item.path === '/'
                        ? `${item.path}${item.children[0].path}`
                        : `${item.path}/${item.children[0].path}`,
                  }"
                >
                  {{ generateTitle(item.children[0].meta.title) }}
                </router-link>
              </span>
            </a-menu-item>
            <!-- submenu -->
            <sub-menu v-else :key="item.path" class="menu-title" :menu-info="item" :base-route="item.path" />
          </template>
        </template>
      </a-menu>
    </a-layout-sider>
  </div>
</template>

<script>
import { generateTitle } from './breadcrumb/index.js'
import SubMenu from './subMenu'
export default {
  components: {
    SubMenu
  },
  props: {
    collapsed: [Boolean],
    routers: {
      type: Array,
      default: () => []
    },
    parentNodeList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isCollapsed: false,
      onlyOneChild: null,
      openKeys: []
    }
  },
  computed: {
    // 当前选中的菜单项
    currentSelectMenu() {
      return [this.$route.path]
    },
    router() {
      return this.$route.path
    }
  },
  watch: {
    collapsed: {
      handler: function(val) {
        this.isCollapsed = val
      }
    }
  },
  created() {
    const openKeysArr = this.$route.path.split('/')
    openKeysArr.shift()
    openKeysArr[0] = '/' + openKeysArr[0]
    openKeysArr.forEach((item, index) => {
      this.openKeys.unshift(item)
    })
  },
  methods: {
    generateTitle,
    // 点击菜单触发事件
    menuClick({ item, key, keyPath }) {
      // length为1则说明没有子菜单
      keyPath.length === 1 ? (this.openKeys = []) : ''
    },
    // 子菜单展开/关闭的回调
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        (key) => this.openKeys.indexOf(key) === -1
      )
      this.openKeys =
        this.parentNodeList.indexOf(latestOpenKey) === -1
          ? openKeys
          : latestOpenKey
            ? [latestOpenKey]
            : []
    },
    // 单个子节点
    hasOneChildren(item) {
      return item.some((menu) => menu.children) && item.length === 1
    }
  }
}
</script>

<style lang="less" scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.menu-title {
  display: inline-block;
  width: 100%;
  height: 60px;
  margin-top: 10px;
  line-height: 60px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  div.ant-menu-submenu-title {
  margin-top: 20px !important;
  }
}
/deep/ .ant-menu-sub.ant-menu-inline > .ant-menu-item, .ant-menu-sub.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
    height: 60px !important;
    line-height: 60px !important;
}
</style>
