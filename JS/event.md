#### vue事件机制

说来惭愧，老Vue开发者了，却对Vue实现原理一知半解，今天对Vue事件机制源码做了一番研究.
感慨源码原来这么简单。总结就是\$on事件注册，\$emit事件调用。学习代码如下

```
function Vue() {
  initEvents(this)
}

function initEvents(vm) {
  vm._events = Object.create(null)
  console.log(vm._events);
}

Vue.prototype.$on = function(event, fn) {
  var vm = this
  console.log(vm);
  (vm._events[event]||(vm._events[event] = [])).push(fn)
  return vm
}

Vue.prototype.$emit = function(event) {
  var vm = this
  var cbs = vm._events[event]
  if(cbs) {
    var args = Array.from(arguments).slice(1)
    for(var i=0, l=cbs.length; i < l; i++) {
      try {
        cbs[i].apply(vm, args)
      } catch (error) {
        console.log(error);
      }
    }
    
  }
  return vm
}


var app = new Vue()
app.$on('love', function(data) {
  console.log('i love ' + data)
})

app.$on('love', function(data) {
  console.log('this is second submit ' + data)
})

app.$emit('love', 'rose')
```



