import Vue from 'vue'
import 'ant-design-vue/dist/antd.less'

import {
    Base,
    version,
    // install,
    message,
    // notification,
    Affix,
    // Anchor,
    AutoComplete,
    // Alert,
    Avatar,
    BackTop,
    Badge,
    Breadcrumb,
    Button,
    Calendar,
    Card,
    Collapse,
    // Carousel,
    // Cascader,
    Checkbox,
    Col,
    DatePicker,
    Divider,
    Dropdown,
    Form,
    FormModel,
    Icon,
    Input,
    InputNumber,
    Layout,
    List,
    // LocaleProvider,
    Menu,
    // Mentions,
    Modal,
    Pagination,
    // Popconfirm,
    Popover,
    Progress,
    Radio,
    // Rate,
    Row,
    Select,
    // Slider,
    Spin,
    Statistic,
    Steps,
    Switch,
    Table,
    // Transfer,
    Tree,
    TreeSelect,
    Tabs,
    Tag,
    TimePicker,
    // Timeline,
    Tooltip,
    Upload,
    // Drawer,
    // Skeleton,
    // Comment,
    // ColorPicker,
    ConfigProvider,
    // Empty,
    Result,
    Descriptions,
    PageHeader,
    // Space,
} from 'ant-design-vue'

Vue.use(Base)
Vue.use(version)
Vue.use(message)
Vue.use(Affix)
Vue.use(AutoComplete)
Vue.use(Avatar)
Vue.use(BackTop)
Vue.use(Badge)
Vue.use(Breadcrumb)
Vue.use(Button)
Vue.use(Calendar)
Vue.use(Card)
Vue.use(Collapse)
Vue.use(Checkbox)
Vue.use(Col)
Vue.use(DatePicker)
Vue.use(Divider)
Vue.use(Dropdown)
Vue.use(Form)
Vue.use(FormModel)
Vue.use(Icon)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Modal)
Vue.use(Pagination)
Vue.use(Popover)
Vue.use(Progress)
Vue.use(Radio)
Vue.use(Row)
Vue.use(Select)
Vue.use(Spin)
Vue.use(Statistic)
Vue.use(Steps)
Vue.use(Switch)
Vue.use(Table)
Vue.use(Tree)
Vue.use(TreeSelect)
Vue.use(Tabs)
Vue.use(Tag)
Vue.use(TimePicker)
Vue.use(Tooltip)
Vue.use(Upload)
Vue.use(ConfigProvider)
Vue.use(List)
Vue.use(Result)
Vue.use(Descriptions)
Vue.use(PageHeader)

Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$message = message
message.config({
    duration: 1.5,// 持续时间
    top:`100px`, // 到页面顶部距离
    maxCount: 1, // 最大显示数, 超过限制时，最早的消息会被自动关闭
})