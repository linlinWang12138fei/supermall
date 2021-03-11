import Toast from "./Toast";
const obj = {}
obj.install = Vue => {
  //创建一个组件构造器
  const toastContrustor = Vue.extend(Toast);
  //2.new的方式，根据组件构造器，创建一个组件对象
  const toast = new toastContrustor()
  //3.将组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))
  //4.把挂载的元素放入body里面
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj
