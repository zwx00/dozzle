<template>
  <main>
    <splitpanes>
      <pane>
        <side-menu></side-menu>
      </pane>
      <pane>
        <router-view></router-view>
      </pane>
    </splitpanes>
  </main>
</template>

<script>
import Pane from "splitpanes/src/components/splitpanes/pane.vue";
import Splitpanes from "splitpanes/src/components/splitpanes/splitpanes.vue";

import LogViewerWithSource from "./components/LogViewerWithSource.vue";
import ScrollableView from "./components/ScrollableView.vue";
import SideMenu from "./components/SideMenu.vue";
import MobileMenu from "./components/MobileMenu.vue";
import Search from "./components/Search.vue";
import ContainerTitle from "./components/ContainerTitle.vue";
import Icon from "./components/Icon.vue";

export default {
  name: "App",
  components: {
    Icon,
    LogViewerWithSource,
    SideMenu,
    MobileMenu,
    ScrollableView,
    Search,
    ContainerTitle,
    Pane,
    Splitpanes,
  },
  data() {
    return {
      title: "",
      collapseNav: false,
    };
  },
  metaInfo() {
    return {
      title: this.title,
      titleTemplate: "%s - Dozzle",
    };
  },
  async created() {
    // await this.fetchContainerList();
    // this.title = `${this.visibleContainers.length} containers`;
  },
  mounted() {
    // if (this.hasSmallerScrollbars) {
    //   document.documentElement.classList.add("has-custom-scrollbars");
    // }
    // if (this.hasLightTheme) {
    //   document.documentElement.setAttribute("data-theme", "light");
    // }
    // this.menuWidth = this.settings.menuWidth;
  },
  watch: {
    // hasSmallerScrollbars(newValue, oldValue) {
    //   if (newValue) {
    //     document.documentElement.classList.add("has-custom-scrollbars");
    //   } else {
    //     document.documentElement.classList.remove("has-custom-scrollbars");
    //   }
    // },
    // hasLightTheme(newValue, oldValue) {
    //   if (newValue) {
    //     document.documentElement.setAttribute("data-theme", "light");
    //   } else {
    //     document.documentElement.removeAttribute("data-theme");
    //   }
    // },
  },
  computed: {
    // ...mapState(["activeContainers", "isMobile", "settings"]),
    // ...mapGetters(["visibleContainers"]),
    // hasSmallerScrollbars() {
    //   return this.settings.smallerScrollbars;
    // },
    // hasLightTheme() {
    //   return this.settings.lightTheme;
    // },
  },
  methods: {
    // ...mapActions({
    //   fetchContainerList: "FETCH_CONTAINERS",
    //   removeActiveContainer: "REMOVE_ACTIVE_CONTAINER",
    //   updateSetting: "UPDATE_SETTING",
    // }),
    onResized(e) {
      if (e.length == 2) {
        const menuWidth = e[0].size;
        this.updateSetting({ menuWidth });
      }
    },
  },
};
</script>

<style scoped lang="scss">
::v-deep .splitpanes--vertical > .splitpanes__splitter {
  min-width: 3px;
  background: var(--border-color);
  &:hover {
    background: var(--border-hover-color);
  }
}

@media screen and (max-width: 768px) {
  .router-view {
    padding-top: 75px;
  }
}

.button.has-no-border {
  border-color: transparent !important;
}

.has-min-height {
  min-height: 100vh;
}

#hide-nav {
  position: fixed;
  left: 10px;
  bottom: 10px;
  &.collapsed {
    left: -40px;
    width: 60px;
    padding-left: 40px;
    background: rgba(0, 0, 0, 0.95);

    &:hover {
      left: -25px;
    }
  }
}
</style>
