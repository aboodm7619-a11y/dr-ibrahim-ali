(function(){
var B='https://pkwvvvzbtnlstkxemgyq.supabase.co',K='sb_publishable_5WJprXBOQzE9c_xjb1JL1g_a9kON6KI';
function rpc(n,d){try{return fetch(B+'/rest/v1/rpc/'+n,{method:'POST',keepalive:true,headers:{'apikey':K,'Content-Type':'application/json'},body:JSON.stringify(d)})}catch(e){}}
try{var d={p_path:location.pathname,p_ref:document.referrer||'',p_ua:navigator.userAgent||'',p_tz:'',p_lang:navigator.language||'',p_screen:screen.width+'x'+screen.height};try{d.p_tz=Intl.DateTimeFormat().resolvedOptions().timeZone||''}catch(e){}
rpc('log_visit',d)}catch(e){}
function ev(t){rpc('log_event',{p_type:t,p_path:location.pathname,p_ref:document.referrer||'',p_ua:navigator.userAgent||''})}
document.addEventListener('click',function(e){var a=e.target&&e.target.closest&&e.target.closest('a');if(!a)return;var h=a.getAttribute('href')||'';
if(h.indexOf('wa.me')>-1||h.indexOf('whatsapp')>-1)ev('whatsapp');else if(h.indexOf('t.me')>-1)ev('telegram');else if(h.indexOf('tel:')===0)ev('call');else if(h.indexOf('instagram.com')>-1)ev('instagram');else if(h==='#booking')ev('form_open')},true);
var f=document.getElementById('bookForm');
if(f)f.addEventListener('submit',function(){try{var n=(f.elements['name']&&f.elements['name'].value||'').trim(),p=(f.elements['phone']&&f.elements['phone'].value||'').trim(),h=f.elements['_honey']&&f.elements['_honey'].value;
if(h||!n||p.replace(/[^0-9]/g,'').length<9)return;
fetch(B+'/functions/v1/lead',{method:'POST',keepalive:true,headers:{'Content-Type':'application/json'},body:JSON.stringify({name:n,phone:p,ref:document.referrer||'',ua:navigator.userAgent||''})})}catch(e){}},true);
})();
