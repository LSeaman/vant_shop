import Vue from 'vue'
import {
  Button,
  Swipe,
  SwipeItem,
  Row,
  Col,
  NavBar,
  Grid,
  GridItem,
  Tabbar,
  TabbarItem,
  Image,
  Icon,
  Popup,
  SubmitBar,
  Search,
  List,
  Cell,
  Card,
  Tab,
  Tabs,
  ImagePreview,
  Divider
} from 'vant'

Vue.use(Button)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(NavBar)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Image)
Vue.use(Icon)
Vue.use(Popup)
Vue.use(SubmitBar)
Vue.use(Search)
Vue.use(List)
Vue.use(Card)
Vue.use(Cell)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Divider)

// 图片预览
Vue.prototype.$imagePreview = ImagePreview
