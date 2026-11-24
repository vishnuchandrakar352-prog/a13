(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
var W=[['Water resistant','splash / 3 bar',.15,[1,0,0,0,0,0],'Rain and hand washing only. Remove before showering.'],['30','metres / 3 bar',.25,[1,1,0,0,0,0],'Everyday splashes. Not suitable for swimming.'],['50','metres / 5 bar',.4,[1,1,1,0,0,0],'Light, calm swimming is fine. Avoid diving in.'],['100','metres / 10 bar',.6,[1,1,1,1,0,0],'Swimming and snorkelling. A solid all-round rating.'],['200','metres / 20 bar',.8,[1,1,1,1,1,0],'Recreational scuba diving, ideally with a screw-down crown.'],['300+','metres / 30 bar',.95,[1,1,1,1,1,1],'Serious diving. Check for a certified diver’s watch standard.']];
var A=['Rain &amp; hand washing','Splashes &amp; dishes','Swimming in a pool','Snorkelling','Scuba diving','Deep or professional diving'];
function wr(v){var w=W[v];$('wr-n').textContent=w[0];$('wr-n').style.fontSize=v===0?'2.6rem':'';$('wr-u').textContent=w[1];$('wr-arc').style.strokeDashoffset=817*(1-w[2]);$('wr-wave').style.setProperty('--h',(w[2]*80)+'%');
 $('wr-l').innerHTML=A.map(function(a,i){var y=w[3][i];return '<li class="'+(y?'y':'n')+'" style="animation-delay:'+i*.05+'s"><b>'+(y?'✓':'✕')+'</b>'+a+'</li>';}).join('');$('wr-n2').textContent=w[4]+' Avoid hot showers and saunas at any rating.';}
if($('wr-r')){var rb=[].slice.call(document.querySelectorAll('#wr-r button'));rb.forEach(function(b){b.setAttribute('aria-pressed',b.classList.contains('on'));b.addEventListener('click',function(){rb.forEach(function(o){o.classList.toggle('on',o===b);o.setAttribute('aria-pressed',o===b);});wr(+b.dataset.v);});});wr(3);}
var SYN=29.530588853,REF=Date.UTC(2000,0,6,18,14);function iso(d){return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2);}
function lit(age){var p=age/SYN,ph=p*2*Math.PI,k=Math.cos(ph),r=50,c=60;var wax=p<.5;var rx=Math.abs(k)*r;var sweep1=wax?1:0;var s='M60 10A50 50 0 0 '+sweep1+' 60 110';s+='A'+rx.toFixed(2)+' 50 0 0 '+((k>0)===wax?0:1)+' 60 10Z';return s;}
function mn(){var v=$('mn-d').value;if(!v)return;var p=v.split('-'),t=Date.UTC(+p[0],p[1]-1,+p[2],12),age=((t-REF)/864e5)%SYN;if(age<0)age+=SYN;var f=(1-Math.cos(age/SYN*2*Math.PI))/2;
 var N=['New moon','Waxing crescent','First quarter','Waxing gibbous','Full moon','Waning gibbous','Last quarter','Waning crescent'],i=Math.floor((age/SYN)*8+.5)%8;$('mn-ph').textContent=N[i];$('mn-ag').textContent=age.toFixed(1)+' d';$('mn-il').textContent=Math.round(f*100)+'%';
 $('mn-disc').style.transform='rotate('+((age/SYN)*180-90)+'deg)';$('mn-lit').setAttribute('d',lit(age));var ty=+$('mn-ty').value,err=Math.abs(SYN-ty),days=SYN/(err*365.25);$('mn-dr').textContent='This module drifts about one day every '+(days<10?days.toFixed(1):Math.round(days))+' years, so set it from a new or full moon and it will stay close.';}
if($('mn-d')){$('mn-d').value=iso(new Date());$('mn-d').addEventListener('change',mn);$('mn-ty').addEventListener('change',mn);function sh(n){var p=$('mn-d').value.split('-'),d=new Date(+p[0],p[1]-1,+p[2]+n);$('mn-d').value=iso(d);mn();}$('mn-p').addEventListener('click',function(){sh(-1);});$('mn-n').addEventListener('click',function(){sh(1);});$('mn-t').addEventListener('click',function(){$('mn-d').value=iso(new Date());mn();});mn();}
})();
