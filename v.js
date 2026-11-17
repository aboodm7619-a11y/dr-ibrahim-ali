(function(){
var B='https://pkwvvvzbtnlstkxemgyq.supabase.co',K='sb_publishable_5WJprXBOQzE9c_xjb1JL1g_a9kON6KI';
function lsg(k){try{return localStorage.getItem(k)||''}catch(e){return ''}}
function lss(k,v){try{localStorage.setItem(k,v)}catch(e){}}
var vid=lsg('op_vid');if(!vid){vid=Date.now().toString(36)+Math.random().toString(36).slice(2,10);lss('op_vid',vid)}
var src='';try{src=(new URLSearchParams(location.search).get('s')||'').toLowerCase().replace(/[^a-z0-9_-]/g,'').slice(0,40)}catch(e){}
if(src){lss('op_src',src)}else{src=lsg('op_src')}
if(src&&history.replaceState){try{var u=new URL(location.href);u.searchParams.delete('s');history.replaceState(null,'',u.pathname+u.search+u.hash)}catch(e){}}
function rpc(n,d){try{return fetch(B+'/rest/v1/rpc/'+n,{method:'POST',keepalive:true,headers:{'apikey':K,'Content-Type':'application/json'},body:JSON.stringify(d)})}catch(e){}}
var tz='';try{tz=Intl.DateTimeFormat().resolvedOptions().timeZone||''}catch(e){}
rpc('log_visit2',{p_path:location.pathname,p_ref:document.referrer||'',p_ua:navigator.userAgent||'',p_tz:tz,p_lang:navigator.language||'',p_screen:screen.width+'x'+screen.height,p_vid:vid,p_src:src});
function ev(t){rpc('log_event2',{p_type:t,p_path:location.pathname,p_ref:document.referrer||'',p_ua:navigator.userAgent||'',p_vid:vid,p_src:src})}
document.addEventListener('click',function(e){var a=e.target&&e.target.closest&&e.target.closest('a');if(!a)return;var h=a.getAttribute('href')||'';
if(h.indexOf('wa.me')>-1||h.indexOf('whatsapp')>-1)ev('whatsapp');else if(h.indexOf('t.me')>-1)ev('telegram');else if(h.indexOf('tel:')===0)ev('call');else if(h.indexOf('instagram.com')>-1)ev('instagram');else if(h==='#booking')ev('form_open')},true);

/* ---------- country code picker ---------- */
var D='AC247,AD376,AE971,AF93,AG1,AI1,AL355,AM374,AO244,AR54,AS1,AT43,AU61,AW297,AX358,AZ994,BA387,BB1,BD880,BE32,BF226,BG359,BH973,BI257,BJ229,BL590,BM1,BN673,BO591,BQ599,BR55,BS1,BT975,BW267,BY375,BZ501,CA1,CC61,CD243,CF236,CG242,CH41,CI225,CK682,CL56,CM237,CN86,CO57,CR506,CU53,CV238,CW599,CX61,CY357,CZ420,DE49,DJ253,DK45,DM1,DO1,DZ213,EC593,EE372,EG20,EH212,ER291,ES34,ET251,FI358,FJ679,FK500,FM691,FO298,FR33,GA241,GB44,GD1,GE995,GF594,GG44,GH233,GI350,GL299,GM220,GN224,GP590,GQ240,GR30,GT502,GU1,GW245,GY592,HK852,HN504,HR385,HT509,HU36,ID62,IE353,IL972,IM44,IN91,IO246,IQ964,IR98,IS354,IT39,JE44,JM1,JO962,JP81,KE254,KG996,KH855,KI686,KM269,KN1,KP850,KR82,KW965,KY1,KZ7,LA856,LB961,LC1,LI423,LK94,LR231,LS266,LT370,LU352,LV371,LY218,MA212,MC377,MD373,ME382,MF590,MG261,MH692,MK389,ML223,MM95,MN976,MO853,MP1,MQ596,MR222,MS1,MT356,MU230,MV960,MW265,MX52,MY60,MZ258,NA264,NC687,NE227,NF672,NG234,NI505,NL31,NO47,NP977,NR674,NU683,NZ64,OM968,PA507,PE51,PF689,PG675,PH63,PK92,PL48,PM508,PR1,PS970,PT351,PW680,PY595,QA974,RE262,RO40,RS381,RU7,RW250,SA966,SB677,SC248,SD249,SE46,SG65,SH290,SI386,SJ47,SK421,SL232,SM378,SN221,SO252,SR597,SS211,ST239,SV503,SX1,SY963,SZ268,TA290,TC1,TD235,TG228,TH66,TJ992,TK690,TL670,TM993,TN216,TO676,TR90,TT1,TV688,TW886,TZ255,UA380,UG256,US1,UY598,UZ998,VA39,VC1,VE58,VG1,VI1,VN84,VU678,WF681,WS685,XK383,YE967,YT262,ZA27,ZM260,ZW263'.split(','),CL=[];var dn=null;try{dn=new Intl.DisplayNames(['uk'],{type:'region'})}catch(e){}
function fl(c){try{return String.fromCodePoint.apply(null,[].map.call(c,function(x){return 127397+x.charCodeAt(0)}))}catch(e){return ''}}
D.forEach(function(s){var c=s.slice(0,2),n=s.slice(2),nm=c;try{nm=dn?dn.of(c):c}catch(e){}CL.push({c:c,d:n,n:nm})});
CL.sort(function(a,b){if(a.c==='UA')return -1;if(b.c==='UA')return 1;return a.n.localeCompare(b.n,'uk')});
function picker(ph,id){
  var row=document.createElement('div');row.style.cssText='display:flex;gap:8px;align-items:stretch';
  var box=document.createElement('div');box.style.cssText='position:relative;flex:0 0 auto';
  var face=document.createElement('div');face.style.cssText='display:flex;align-items:center;gap:6px;height:100%;min-height:48px;padding:0 12px;border:1.5px solid #D5E0F3;border-radius:14px;background:#F7F9FE;color:#16203A;font-size:15px;font-weight:600;white-space:nowrap;direction:ltr';
  var sel=document.createElement('select');sel.id=id;sel.setAttribute('aria-label','Код країни');sel.style.cssText='position:absolute;inset:0;width:100%;height:100%;opacity:0;cursor:pointer;min-height:0;padding:0';
  CL.forEach(function(x){var o=document.createElement('option');o.value=x.d;o.dataset.c=x.c;o.textContent=fl(x.c)+' '+x.n+' +'+x.d;if(x.c==='UA')o.selected=true;sel.appendChild(o)});
  function upd(){var o=sel.options[sel.selectedIndex];face.textContent=fl(o.dataset.c)+' +'+o.value+' ▾'}
  sel.addEventListener('change',function(){upd();ph.focus()});upd();
  box.appendChild(face);box.appendChild(sel);ph.parentNode.insertBefore(row,ph);row.appendChild(box);row.appendChild(ph);ph.style.flex='1';ph.style.minWidth='0';ph.placeholder='50 123 4567';
  return function(){var v=(ph.value||'').trim();if(!v||v.charAt(0)==='+')return v;if(v.indexOf('00')===0)return '+'+v.slice(2).replace(/[^0-9]/g,'');var dg=v.replace(/[^0-9]/g,'').replace(/^0+/,'');return dg?'+'+sel.value+' '+dg:v};
}

/* ---------- main booking form ---------- */
var f=document.getElementById('bookForm'),ph=document.getElementById('phone');
if(f&&ph&&!document.getElementById('ccSel')){
  var fullPhone=picker(ph,'ccSel');
  document.addEventListener('submit',function(e){if(!e.target||e.target.id!=='bookForm')return;ph.value=fullPhone()},true);
  f.addEventListener('submit',function(){try{var n=(f.elements['name']&&f.elements['name'].value||'').trim(),p=(ph.value||'').trim(),h=f.elements['_honey']&&f.elements['_honey'].value;
    if(h||!n||p.replace(/[^0-9]/g,'').length<9)return;
    fetch(B+'/functions/v1/lead',{method:'POST',keepalive:true,headers:{'Content-Type':'application/json'},body:JSON.stringify({name:n,phone:p,vid:vid,src:src,ref:document.referrer||'',ua:navigator.userAgent||''})})}catch(e){}},true);
}

/* ---------- photo consultation ---------- */
var bk=document.getElementById('booking');
if(bk&&!document.getElementById('opPhotoCard')){
  var st=document.createElement('style');
  st.textContent='#opPhotoCard{margin-top:26px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.18);border-radius:22px;padding:20px;color:#fff}#opPhotoCard b{display:block;font-size:18px;margin-bottom:6px}#opPhotoCard p{margin:0 0 14px;color:#D3DFF6;font-size:15px}'+
  '#opM{position:fixed;inset:0;z-index:100;background:rgba(6,21,56,.72);display:flex;align-items:flex-end;justify-content:center;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}#opM[hidden]{display:none}'+
  '#opM .sh{background:#fff;color:#16203A;width:100%;max-width:520px;max-height:92vh;overflow:auto;border-radius:24px 24px 0 0;padding:22px 20px calc(22px + env(safe-area-inset-bottom))}'+
  '@media(min-width:700px){#opM{align-items:center}#opM .sh{border-radius:24px}}'+
  '#opM h3{margin:0 0 4px;color:#0E348C;font-size:22px}#opM .sub{margin:0 0 16px;color:#55607A;font-size:14.5px}#opM label{display:block;font-weight:700;font-size:14px;margin:12px 0 6px}'+
  '#opM .x{float:right;border:0;background:#E9F0FB;color:#0E348C;width:36px;height:36px;border-radius:50%;font-size:20px;cursor:pointer}'+
  '#opM .tips{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:6px 0 10px}#opM .tips div{background:#F4F7FD;border-radius:12px;padding:8px;font-size:12px;text-align:center;color:#55607A;font-weight:600}#opM .tips span{display:block;font-size:22px}'+
  '#opM .pick{display:flex;align-items:center;justify-content:center;gap:8px;border:2px dashed #8FA6D6;border-radius:16px;padding:16px;background:#F7F9FE;color:#0E348C;font-weight:700;cursor:pointer}'+
  '#opM .th{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}#opM .th div{position:relative;width:74px;height:74px;border-radius:12px;overflow:hidden;background:#E9F0FB}#opM .th img{width:100%;height:100%;object-fit:cover}#opM .th button{position:absolute;top:3px;right:3px;width:22px;height:22px;border-radius:50%;border:0;background:rgba(0,0,0,.6);color:#fff;font-size:13px;line-height:1;cursor:pointer}'+
  '#opM .ok{display:flex;gap:8px;align-items:flex-start;font-size:13px;color:#55607A;font-weight:500;margin-top:12px}#opM .ok input{width:auto;min-height:0;margin-top:3px}'+
  '#opM .go{width:100%;margin-top:16px;justify-content:center}#opM .er{color:#C0392B;font-weight:700;font-size:14px;margin-top:10px;min-height:18px}#opM .done{text-align:center;padding:20px 0}#opM .done span{font-size:54px;display:block}';
  document.head.appendChild(st);
  var card=document.createElement('div');card.id='opPhotoCard';
  card.innerHTML='<b>📷 Онлайн-оцінка за фото</b><p>Надішліть 2–3 фото зубів — лікар подивиться, чи потрібні брекети чи елайнери, і напише вам особисто.</p><button type="button" class="btn btn-light" id="opOpen">Надіслати фото</button>';
  var col=bk.querySelector('.book-grid > div');if(col)col.appendChild(card);else bk.querySelector('.wrap').appendChild(card);
  var m=document.createElement('div');m.id='opM';m.hidden=true;m.setAttribute('role','dialog');m.setAttribute('aria-modal','true');
  m.innerHTML='<div class="sh"><div id="opForm"><button type="button" class="x" id="opX" aria-label="Закрити">×</button><h3>Оцінка за фото</h3><p class="sub">Безкоштовно. Лікар перегляне фото і напише вам у WhatsApp.</p>'+
   '<label for="opName">Імʼя</label><input id="opName" autocomplete="name">'+
   '<label for="opPhone">Телефон (WhatsApp)</label><input id="opPhone" type="tel" autocomplete="tel">'+
   '<label>Фото зубів (до 4)</label><div class="tips"><div><span>😁</span>Усмішка спереду</div><div><span>🦷</span>Зуби зімкнуті</div><div><span>👄</span>Верх і низ відкрито</div></div>'+
   '<label class="pick" for="opFiles">＋ Додати фото</label><input id="opFiles" type="file" accept="image/*" multiple hidden><div class="th" id="opTh"></div>'+
   '<label for="opCom">Коментар (необовʼязково)</label><textarea id="opCom" rows="2" placeholder="Що вас турбує?"></textarea>'+
   '<label class="ok"><input type="checkbox" id="opOk"> Погоджуюсь, що лікар перегляне мої фото лише для консультації.</label>'+
   '<button type="button" class="btn btn-primary go" id="opSend">Надіслати лікарю</button><div class="er" id="opEr"></div></div>'+
   '<div class="done" id="opDone" hidden><span>✅</span><h3>Дякуємо!</h3><p class="sub">Лікар перегляне фото і напише вам найближчим часом.</p><button type="button" class="btn btn-primary" id="opClose">Готово</button></div></div>';
  document.body.appendChild(m);
  var q=function(i){return document.getElementById(i)},files=[];
  var opFull=picker(q('opPhone'),'opCC');
  function open(){q('opForm').hidden=false;q('opDone').hidden=true;m.hidden=false;document.body.style.overflow='hidden';ev('photo_open')}
  function close(){m.hidden=true;document.body.style.overflow=''}
  q('opOpen').onclick=open;q('opX').onclick=close;q('opClose').onclick=close;m.addEventListener('click',function(e){if(e.target===m)close()});
  function thumbs(){var t=q('opTh');t.innerHTML='';files.forEach(function(fi,i){var d=document.createElement('div'),im=document.createElement('img'),x=document.createElement('button');im.src=URL.createObjectURL(fi);x.type='button';x.textContent='×';x.onclick=function(){files.splice(i,1);thumbs()};d.appendChild(im);d.appendChild(x);t.appendChild(d)})}
  q('opFiles').addEventListener('change',function(){[].forEach.call(this.files,function(fi){if(files.length<4&&/^image/.test(fi.type))files.push(fi)});this.value='';thumbs()});
  function shrink(fi){return new Promise(function(res){var img=new Image();img.onload=function(){var s=Math.min(1,1600/Math.max(img.width,img.height)),c=document.createElement('canvas');c.width=Math.round(img.width*s);c.height=Math.round(img.height*s);c.getContext('2d').drawImage(img,0,0,c.width,c.height);c.toBlob(function(b){res(b||fi)},'image/jpeg',0.82)};img.onerror=function(){res(fi)};img.src=URL.createObjectURL(fi)})}
  q('opSend').onclick=async function(){
    var er=q('opEr'),n=q('opName').value.trim(),p=opFull();er.textContent='';
    if(!n){er.textContent='Вкажіть імʼя';return}if(p.replace(/[^0-9]/g,'').length<9){er.textContent='Перевірте номер телефону';return}
    if(!files.length){er.textContent='Додайте хоча б одне фото';return}if(!q('opOk').checked){er.textContent='Поставте позначку згоди';return}
    var b=this;b.disabled=true;b.textContent='Надсилаємо…';
    try{var fd=new FormData();fd.append('name',n);fd.append('phone',p);fd.append('comment',q('opCom').value.trim());fd.append('vid',vid);fd.append('src',src);fd.append('ref',document.referrer||'');fd.append('ua',navigator.userAgent||'');
      for(var i=0;i<files.length;i++){var bl=await shrink(files[i]);fd.append('photo',new File([bl],'p'+(i+1)+'.jpg',{type:'image/jpeg'}))}
      var r=await fetch(B+'/functions/v1/lead',{method:'POST',body:fd});if(!r.ok)throw 0;
      q('opForm').hidden=true;q('opDone').hidden=false;files=[];thumbs();
    }catch(e){er.textContent='Не вдалося надіслати. Спробуйте ще раз або напишіть у WhatsApp.'}
    b.disabled=false;b.textContent='Надіслати лікарю';
  };
}
})();
