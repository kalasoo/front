//36Kr Next
qwest.get('http://node-read.avosapps.com/next').then(function(res){
  next.lists = JSON.parse(res);
})
var next = new Vue({
  el: '#next',
  data: {
    lists: [{
      title: 'loading...'
    }]
  }
})

//Hacker News
qwest.get('http://node-read.avosapps.com/hackernews').then(function(res){
  hackernews.lists = JSON.parse(res);
})
var hackernews = new Vue({
  el: '#hackernews',
  data: {
    lists: [{
      title: 'loading...'
    }]
  }
})

//V2EX
qwest.get('http://node-read.avosapps.com/v2ex').then(function(res){
  v2ex.lists = JSON.parse(res);
})
var v2ex = new Vue({
  el: '#v2ex',
  data: {
    lists: [{
      title: 'loading...'
    }]
  }
})

//toutiao
qwest.get('http://node-read.avosapps.com/toutiao').then(function(res){
  toutiao.lists = JSON.parse(res);
})
var toutiao = new Vue({
  el: '#toutiao',
  data: {
    lists: [{
      title: 'loading...'
    }]
  }
})