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
(function(){var ph=document.getElementById('phone');if(!ph||document.getElementById('ccSel'))return;
var D='AC247,AD376,AE971,AF93,AG1,AI1,AL355,AM374,AO244,AR54,AS1,AT43,AU61,AW297,AX358,AZ994,BA387,BB1,BD880,BE32,BF226,BG359,BH973,BI257,BJ229,BL590,BM1,BN673,BO591,BQ599,BR55,BS1,BT975,BW267,BY375,BZ501,CA1,CC61,CD243,CF236,CG242,CH41,CI225,CK682,CL56,CM237,CN86,CO57,CR506,CU53,CV238,CW599,CX61,CY357,CZ420,DE49,DJ253,DK45,DM1,DO1,DZ213,EC593,EE372,EG20,EH212,ER291,ES34,ET251,FI358,FJ679,FK500,FM691,FO298,FR33,GA241,GB44,GD1,GE995,GF594,GG44,GH233,GI350,GL299,GM220,GN224,GP590,GQ240,GR30,GT502,GU1,GW245,GY592,HK852,HN504,HR385,HT509,HU36,ID62,IE353,IL972,IM44,IN91,IO246,IQ964,IR98,IS354,IT39,JE44,JM1,JO962,JP81,KE254,KG996,KH855,KI686,KM269,KN1,KP850,KR82,KW965,KY1,KZ7,LA856,LB961,LC1,LI423,LK94,LR231,LS266,LT370,LU352,LV371,LY218,MA212,MC377,MD373,ME382,MF590,MG261,MH692,MK389,ML223,MM95,MN976,MO853,MP1,MQ596,MR222,MS1,MT356,MU230,MV960,MW265,MX52,MY60,MZ258,NA264,NC687,NE227,NF672,NG234,NI505,NL31,NO47,NP977,NR674,NU683,NZ64,OM968,PA507,PE51,PF689,PG675,PH63,PK92,PL48,PM508,PR1,PS970,PT351,PW680,PY595,QA974,RE262,RO40,RS381,RU7,RW250,SA966,SB677,SC248,SD249,SE46,SG65,SH290,SI386,SJ47,SK421,SL232,SM378,SN221,SO252,SR597,SS211,ST239,SV503,SX1,SY963,SZ268,TA290,TC1,TD235,TG228,TH66,TJ992,TK690,TL670,TM993,TN216,TO676,TR90,TT1,TV688,TW886,TZ255,UA380,UG256,US1,UY598,UZ998,VA39,VC1,VE58,VG1,VI1,VN84,VU678,WF681,WS685,XK383,YE967,YT262,ZA27,ZM260,ZW263'.split(','),L=[];var dn=null;try{dn=new Intl.DisplayNames(['uk'],{type:'region'})}catch(e){}
function fl(c){try{return String.fromCodePoint.apply(null,[].map.call(c,function(x){return 127397+x.charCodeAt(0)}))}catch(e){return ''}}
D.forEach(function(s){var c=s.slice(0,2),n=s.slice(2),nm=c;try{nm=dn?dn.of(c):c}catch(e){}L.push({c:c,d:n,n:nm})});
L.sort(function(a,b){if(a.c==='UA')return -1;if(b.c==='UA')return 1;return a.n.localeCompare(b.n,'uk')});
var row=document.createElement('div');row.style.cssText='display:flex;gap:8px;align-items:stretch';
var box=document.createElement('div');box.style.cssText='position:relative;flex:0 0 auto';
var face=document.createElement('div');face.style.cssText='display:flex;align-items:center;gap:6px;height:100%;min-height:48px;padding:0 12px;border:1.5px solid #D5E0F3;border-radius:14px;background:#F7F9FE;font-size:15px;font-weight:600;white-space:nowrap;direction:ltr';
var sel=document.createElement('select');sel.id='ccSel';sel.setAttribute('aria-label','Код країни');sel.style.cssText='position:absolute;inset:0;width:100%;height:100%;opacity:0;cursor:pointer;min-height:0;padding:0';
L.forEach(function(x){var o=document.createElement('option');o.value=x.d;o.dataset.c=x.c;o.textContent=fl(x.c)+' '+x.n+' +'+x.d;if(x.c==='UA')o.selected=true;sel.appendChild(o)});
function upd(){var o=sel.options[sel.selectedIndex];face.textContent=fl(o.dataset.c)+' +'+o.value+' ▾'}
sel.addEventListener('change',function(){upd();ph.focus()});upd();
box.appendChild(face);box.appendChild(sel);
ph.parentNode.insertBefore(row,ph);row.appendChild(box);row.appendChild(ph);ph.style.flex='1';ph.style.minWidth='0';ph.placeholder='50 123 4567';
document.addEventListener('submit',function(e){if(!e.target||e.target.id!=='bookForm')return;var v=(ph.value||'').trim();if(!v||v.charAt(0)==='+')return;
if(v.indexOf('00')===0){ph.value='+'+v.slice(2).replace(/[^0-9]/g,'');return}
var dg=v.replace(/[^0-9]/g,'').replace(/^0+/,'');if(dg)ph.value='+'+sel.value+' '+dg},true);
})();
