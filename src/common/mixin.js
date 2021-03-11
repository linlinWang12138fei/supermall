import {debounce} from "./util";

export const itemListenerMixin = {
  data() {
    return {
      itemImageListener: null,
      refresh: null
    }
  },
  mounted() {
    //图片加载完成的事件监听
    //防抖
    this.refresh = debounce(this.$refs.scroll.refresh, 500)
    //监听事件总线
    this.itemImageListener = () => {
      // this.$refs.scroll.refresh();
      this.refresh()
    }
    this.$bus.$on('itemImageLoad', this.itemImageListener)
  }
}


import BackTop from "components/content/backTop/BackTop";
export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    backTopClick() {
      //scrollTo(x,y,毫秒);
      this.$refs.scroll.scrollTo(0,0);
      this.$refs.scroll.refresh();
    }
  }
}
