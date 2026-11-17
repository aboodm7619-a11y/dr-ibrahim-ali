var ICON='https://dr-ibrahim-ali.netlify.app/img/orthopulse.png';
self.addEventListener('install',function(e){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('push',function(e){var d={};try{d=e.data.json()}catch(x){d={title:'OrthoPulse',body:e.data?e.data.text():''}}
e.waitUntil(self.registration.showNotification(d.title||'OrthoPulse',{body:d.body||'',icon:ICON,badge:ICON,tag:'op-'+Date.now(),data:{url:d.url||'/stats/'}}))});
self.addEventListener('notificationclick',function(e){e.notification.close();var u=(e.notification.data&&e.notification.data.url)||'/stats/';
e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(function(l){for(var i=0;i<l.length;i++){if(l[i].url.indexOf('/stats')>-1){l[i].navigate(u);return l[i].focus()}}return self.clients.openWindow(u)}))});
