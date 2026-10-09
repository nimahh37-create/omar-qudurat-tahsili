// مبادرة الأستاذ عمر هرشان — منطق المنصة
const LS_USER='omar_user', LS_USERS='omar_users', LS_RESULTS='omar_results';
const OWNER_CODE='1234';

const QUIZZES={
quant:{title:'محاكي القدرات الكمي',time:15*60,qs:[
{q:'إذا كان 15% من عدد = 45 فما العدد؟',o:['200','250','300','350'],a:2},
{q:'متوسط الأعداد: 12، 18، 30 هو؟',o:['18','20','22','24'],a:1},
{q:'سيارة تسير 240 كم في 3 ساعات، سرعتها؟',o:['70 كم/س','80 كم/س','90 كم/س','100 كم/س'],a:1},
{q:'قارن: القيمة الأولى 3/8 والقيمة الثانية 2/5',o:['الأولى أكبر','الثانية أكبر','متساويتان','لا يمكن التحديد'],a:1},
{q:'مثلث قائم ضلعاه 6 و 8، طول الوتر؟',o:['9','10','12','14'],a:1},
{q:'إذا كان س+ص=12 وس−ص=4 فإن س =؟',o:['6','7','8','9'],a:2},
{q:'احتمال ظهور عدد فردي عند رمي حجر نرد؟',o:['1/6','1/3','1/2','2/3'],a:2},
{q:'مربع طول ضلعه 5، مساحته ومحيطه؟',o:['25 و 20','20 و 25','10 و 25','25 و 25'],a:0},
{q:'متتابعة: 3، 7، 11، 15... الحد التالي؟',o:['18','19','20','21'],a:1},
{q:'اشترى تاجر بضاعة بـ 200 وباعها بـ 250، نسبة الربح؟',o:['20%','25%','30%','15%'],a:1}]},
verbal:{title:'محاكي القدرات اللفظي',time:15*60,qs:[
{q:'التناظر: قلم : كتابة — فما المشابه؟',o:['سكين : تقطيع','كتاب : قراءة فقط','ماء : شرب فقط','باب : خشب'],a:0},
{q:'التناظر: مدرسة : تعليم — فما المشابه؟',o:['مستشفى : علاج','شارع : سيارة','بيت : نوم فقط','سوق : مال فقط'],a:0},
{q:'أكمل الجملة: من ___ على دراسته ___ ثمار التفوق.',o:['تكاسل / جنى','واظب / حصد','أهمل / نال','نام / حصد'],a:1},
{q:'أكمل الجملة: النجاح يحتاج إلى ___ و ___ .',o:['الكسل والتسويف','المثابرة والاجتهاد','النوم والراحة','التردد والخوف'],a:1},
{q:'حدد الخطأ السياقي: كان الجو جميلاً ومنعشاً وخانقاً',o:['جميلاً','منعشاً','خانقاً','كان'],a:2},
{q:'المفردة الشاذة: سيف - رمح - درع - قوس',o:['سيف','رمح','درع','قوس'],a:2},
{q:'المفردة الشاذة: تفاح - برتقال - موز - جزر',o:['تفاح','برتقال','موز','جزر'],a:3},
{q:'التناظر: عين : إبصار — فما المشابه؟',o:['أذن : سمع','يد : ذهب','رجل : جلس','فم : صمت'],a:0},
{q:'أكمل: القراءة ___ للعقل توسّع ___ .',o:['غذاء / المدارك','سم / العقول','تعب / الجسد','نوم / الفكر'],a:0},
{q:'استيعاب: الكلمة التي تعني الثبات والاستمرار؟',o:['التذبذب','الاستدامة','التراجع','الانقطاع'],a:1}]},
tahsili:{title:'محاكي التحصيلي العلمي الشامل',time:20*60,qs:[
{q:'مشتقة الدالة س³ + 2س هي؟',o:['3س²+2','3س+2','س²+2','2س²+3'],a:0},
{q:'لو2 + لو5 يساوي؟',o:['لو7','لو10=1','2','5'],a:1},
{q:'قوة تؤثر على جسم كتلته 5 كجم فأكسبته تسارع 4 م/ث²، القوة؟',o:['9 نيوتن','20 نيوتن','1.25 نيوتن','40 نيوتن'],a:1},
{q:'مقاومتان 6 و 3 أوم على التوازي، المكافئة؟',o:['9 أوم','2 أوم','4.5 أوم','3 أوم'],a:1},
{q:'عدد مولات 36 جم من الماء (الكتلة المولية 18)؟',o:['1 مول','2 مول','3 مول','18 مول'],a:1},
{q:'محلول pH=3 يعتبر؟',o:['قاعدي','متعادل','حمضي','ملح'],a:2},
{q:'الرابطة في NaCl؟',o:['تساهمية','أيونية','فلزية','هيدروجينية'],a:1},
{q:'تزاوج Aa × Aa يعطي نسبة السائد إلى المتنحي؟',o:['1:1','2:1','3:1','4:0'],a:2},
{q:'عضية إنتاج الطاقة في الخلية؟',o:['النواة','الريبوسوم','الميتوكندريا','الجدار الخلوي'],a:2},
{q:'فصيلة الدم المعطي العام؟',o:['AB','A','B','O'],a:3},
{q:'جا²θ + جتا²θ يساوي؟',o:['0','1','2','θ'],a:1},
{q:'وحدة قياس القدرة الكهربائية؟',o:['الفولت','الأمبير','الواط','الأوم'],a:2}]},
quant2:{title:'محاكي القدرات الكمي (2) متقدم',time:15*60,qs:[
{q:'إذا كان 2س + 5 = 17 فإن س =؟',o:['5','6','7','8'],a:1},
{q:'قارن: س² حيث س = -3 مقابل 9',o:['الأول أكبر','الثاني أكبر','متساويان','لا يمكن'],a:2},
{q:'عدد يقبل القسمة على 2 و 3 و 5 معاً؟',o:['25','30','35','45'],a:1},
{q:'قطار طوله 200م يعبر نفقاً طوله 400م بسرعة 20م/ث، الزمن؟',o:['20ث','30ث','40ث','15ث'],a:1},
{q:'إذا كان عمر الأب 3 أضعاف الابن ومجموعهما 48 فعمر الابن؟',o:['10','12','14','16'],a:1},
{q:'مساحة دائرة نصف قطرها 7 (π≈22/7)؟',o:['144','154','164','174'],a:1},
{q:'الوسيط للأعداد 5، 2، 9، 1، 7 هو؟',o:['5','7','2','9'],a:0},
{q:'إذا زاد سعر سلعة من 80 إلى 100 فنسبة الزيادة؟',o:['20%','25%','30%','15%'],a:1},
{q:'ناتج (س+3)(س−3)؟',o:['س²+9','س²−9','س²+6','س²−6'],a:1},
{q:'متتابعة: 2، 6، 12، 20... الحد التالي؟',o:['28','30','32','26'],a:1}]},
verbal2:{title:'محاكي القدرات اللفظي (2) متقدم',time:15*60,qs:[
{q:'التناظر: سفينة : ربان — فما المشابه؟',o:['طائرة : قائد','سيارة : طريق','بحر : موج','ميناء : رصيف'],a:0},
{q:'التناظر: شجرة : غابة — فما المشابه؟',o:['نجم : مجرة','ورقة : غصن','جذر : تربة','زهرة : عطر'],a:0},
{q:'أكمل: ___ العلم نور يبدد ظلام ___ .',o:['إن / الجهل','ليت / النور','هل / العلم','قد / النور'],a:0},
{q:'أكمل: من ___ الوقت احترم ___ .',o:['أضاع / نفسه','قدّر / ذاته','نام / يومه','لعب / أهله'],a:1},
{q:'الخطأ السياقي: تميز الطالب بذكائه واجتهاده وإهماله',o:['ذكائه','اجتهاده','إهماله','تميز'],a:2},
{q:'الشاذة: قمح - شعير - أرز - قطن',o:['قمح','شعير','أرز','قطن'],a:3},
{q:'قطعة: ورد في النص أن الأمن السيبراني يحمي البيانات. ما الفكرة الرئيسة؟',o:['الطبخ','حماية المعلومات','الرياضة','السفر'],a:1},
{q:'قطعة: يشير الكاتب إلى أن القراءة توسع المدارك. نستنتج أن:',o:['القراءة مضيعة للوقت','القراءة تنمي الفكر','النوم أفضل','اللعب أفضل'],a:1},
{q:'معنى كلمة (التأني)؟',o:['العجلة','التروي والتمهل','الإهمال','السرعة'],a:1},
{q:'التناظر: طبيب : مستشفى — فما المشابه؟',o:['معلم : مدرسة','طالب : قلم','دواء : صيدلية فقط','مريض : شفاء'],a:0}]},
tahsili2:{title:'محاكي التحصيلي (2) التجميعات المركزة',time:20*60,qs:[
{q:'نهاية (س²−1)/(س−1) عندما س→1؟',o:['0','1','2','لا توجد'],a:2},
{q:'إذا كان جا30 = ½ فإن جتا60 =؟',o:['0','½','1','√3/2'],a:1},
{q:'سيارة قطعت 100م في 5ث، سرعتها؟',o:['15م/ث','20م/ث','25م/ث','500م/ث'],a:1},
{q:'الشغل المبذول بقوة 10 نيوتن لمسافة 5م؟',o:['2 جول','15 جول','50 جول','5 جول'],a:2},
{q:'العدد الذري يساوي عدد؟',o:['النيوترونات','البروتونات','الكتلة','المدارات'],a:1},
{q:'المجموعة الوظيفية للكحولات؟',o:['COOH-','OH-','NH2-','CHO-'],a:1},
{q:'نسبة الطرز المظهرية في الجيل الثاني لمندل (أحادي الهجين)؟',o:['1:1','9:3:3:1','3:1','1:2:1'],a:2},
{q:'الهرمون الذي يخفض سكر الدم؟',o:['الثيروكسين','الأنسولين','الأدرينالين','النمو'],a:1},
{q:'5! (مضروب الخمسة) يساوي؟',o:['25','60','120','720'],a:2},
{q:'أي مما يلي مركب أيوني؟',o:['H2','NaCl','O2','CH4'],a:1},
{q:'مقاومة 4 و 4 على التوالي تساوي؟',o:['2 أوم','4 أوم','8 أوم','16 أوم'],a:2},
{q:'أين يحدث التلقيح في الجهاز التناسلي الأنثوي؟',o:['الرحم','المبيض','قناة فالوب','المهبل'],a:2}]}
};

function getUser(){try{return JSON.parse(localStorage.getItem(LS_USER))}catch{return null}}
function getUsers(){try{return JSON.parse(localStorage.getItem(LS_USERS))||[]}catch{return[]}}
function getResults(){try{return JSON.parse(localStorage.getItem(LS_RESULTS))||[]}catch{return[]}}
function saveUsers(u){localStorage.setItem(LS_USERS,JSON.stringify(u))}
function saveResults(r){localStorage.setItem(LS_RESULTS,JSON.stringify(r))}

// تنقل
function go(id){document.querySelectorAll('.nav button').forEach(b=>b.classList.toggle('active',b.dataset.sec===id));document.querySelectorAll('.panel').forEach(p=>p.classList.remove('show'));document.getElementById('sec-'+id).classList.add('show');window.scrollTo({top:0,behavior:'smooth'});if(id==='exams')renderMyResults();if(id==='home')renderStats();if(id==='courses')renderCourses();if(id==='videos')renderVideos();if(id==='mustaqbal'){applyStoreLinks();renderMustaqbalList();}}
document.querySelectorAll('.nav button').forEach(b=>b.onclick=()=>go(b.dataset.sec));
function switchTab(id,btn){btn.parentElement.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));btn.classList.add('active');btn.parentElement.parentElement.querySelectorAll('.tabpanel').forEach(p=>p.classList.remove('show'));document.getElementById('tab-'+id).classList.add('show');}

// دخول
document.getElementById('inRole').addEventListener('change',e=>{document.getElementById('ownerPassWrap').style.display=e.target.value==='صاحب المبادرة'?'block':'none';});
function login(){
 const school=document.getElementById('inSchool').value.trim();
 const name=document.getElementById('inName').value.trim();
 const role=document.getElementById('inRole').value;
 if(!school||!name){alert('فضلاً أدخل اسم المدرسة والاسم الكامل');return;}
 if(role==='صاحب المبادرة'&&document.getElementById('inPass').value!==OWNER_CODE){alert('رمز صاحب المبادرة غير صحيح (للتجربة: 1234)');return;}
 const user={school,name,role,date:new Date().toLocaleDateString('ar-SA')};
 localStorage.setItem(LS_USER,JSON.stringify(user));
 const users=getUsers();
 if(!users.find(u=>u.name===name&&u.school===school)) {users.push(user);saveUsers(users);}
 renderUser();renderStats();
 alert('أهلاً '+name+' ('+role+') في مبادرة الأستاذ عمر هرشان');
 if(role==='ولي أمر')go('parent');else if(role==='صاحب المبادرة')go('dashboard');else go('exams');
}
function logout(){localStorage.removeItem(LS_USER);renderUser();}
function renderUser(){
 const u=getUser();const box=document.getElementById('userbox');
 box.innerHTML=u?('👤 '+u.name+' • '+u.role+' • '+u.school+' <button onclick="logout()">خروج</button>'):('زائر — سجّل الدخول للاختبار وحفظ نتيجتك');
}
function renderStats(){
 const users=getUsers(),res=getResults();
 document.getElementById('stStudents').textContent=users.filter(u=>u.role==='طالب').length||users.length;
 document.getElementById('stTests').textContent=res.length;
 document.getElementById('stAvg').textContent=(res.length?Math.round(res.reduce((s,r)=>s+r.score,0)/res.length):0)+'%';
}

// اختبارات
let timerInt=null,currentExam=null,answers=[];
function startExam(id){
 const u=getUser();
 if(!u){alert('سجّل الدخول أولاً (اسم المدرسة + اسمك + صفتك)');go('home');return;}
 currentExam=id;const ex=QUIZZES[id];answers=new Array(ex.qs.length).fill(null);
 let html='<div class="timer" id="timer"></div><h3>'+ex.title+'</h3>';
 ex.qs.forEach((q,i)=>{html+='<div class="q"><h4>'+(i+1)+') '+q.q+'</h4>'+q.o.map((op,j)=>'<label><input type="radio" name="q'+i+'" value="'+j+'" onchange="answers['+i+']='+j+'"> '+op+'</label>').join('')+'</div>';});
 html+='<button class="btn primary" onclick="submitExam()">تسليم الاختبار واعتماد الدرجة</button>';
 document.getElementById('examArea').innerHTML=html;document.getElementById('certArea').innerHTML='';
 window.scrollTo({top:document.getElementById('examArea').offsetTop-80,behavior:'smooth'});
 let t=ex.time;clearInterval(timerInt);
 const tick=()=>{const m=Math.floor(t/60),s=t%60;document.getElementById('timer').textContent='⏱ المتبقي: '+m+':'+String(s).padStart(2,'0');if(t<=0){clearInterval(timerInt);submitExam(true);}t--;};
 tick();timerInt=setInterval(tick,1000);
}
function submitExam(auto){
 clearInterval(timerInt);
 const ex=QUIZZES[currentExam];let correct=0;
 ex.qs.forEach((q,i)=>{if(answers[i]===q.a)correct++;});
 const score=Math.round(correct/ex.qs.length*100);
 const u=getUser();
 const rec={student:u.name,school:u.school,role:u.role,exam:ex.title,examId:currentExam,score,correct,total:ex.qs.length,date:new Date().toLocaleString('ar-SA')};
 const res=getResults();res.push(rec);saveResults(res);
 let html='<div class="result"><h3>'+(score>=60?'🎉 أحسنت '+u.name+'!':'📝 نتيجتك يا '+u.name)+'</h3><p style="font-size:40px;margin:6px"><b>'+score+'%</b></p><p>الإجابات الصحيحة: '+correct+' من '+ex.qs.length+(auto?' (انتهى الوقت وتم التسليم تلقائياً)':'')+'</p>';
 if(score>=60){html+='<button class="btn primary" onclick=\'showCert('+JSON.stringify(score)+','+JSON.stringify(ex.title)+')\'>🎓 إصدار شهادة الشكر</button>';}
 else{html+='<p class="muted">تحتاج 60% للحصول على الشهادة — راجع الإثراءات وحاول مجدداً.</p>';}
 // مراجعة الإجابات
 html+='<div style="text-align:right;margin-top:12px"><h4>مراجعة الإجابات:</h4>';
 ex.qs.forEach((q,i)=>{const ok=answers[i]===q.a;html+='<div class="q" style="border-color:'+(ok?'green':'red')+'">'+(ok?'✅':'❌')+' '+(i+1)+') '+q.q+'<br><small>إجابتك: '+(answers[i]==null?'لم تجب':q.o[answers[i]])+' | الصحيحة: '+q.o[q.a]+'</small></div>';});
 html+='</div></div>';
 document.getElementById('examArea').innerHTML=html;renderMyResults();renderStats();
}
function showCert(score,title){
 const u=getUser();
 document.getElementById('certArea').innerHTML='<div class="cert" id="certPrint"><div class="seal">🏅</div><p>مبادرة الأستاذ عمر هرشان للقدرات والتحصيلي</p><h2>شهادة شكر وتقدير</h2><p>تشهد المبادرة بأن</p><div class="cname">'+u.name+'</div><p>من مدرسة: <b>'+u.school+'</b></p><p>قد أتمّ مهمة <b>'+title+'</b> بتفوق وحصل على درجة <b>'+score+'%</b></p><p class="muted">بتاريخ '+new Date().toLocaleDateString('ar-SA')+'</p><div style="display:flex;justify-content:space-between;margin-top:20px"><span>صاحب المبادرة<br><b>الأستاذ عمر هرشان</b></span><span>التوقيع<br>________</span></div><br><button class="btn primary" onclick="window.print()">🖨️ طباعة الشهادة</button></div>';
 window.scrollTo({top:document.getElementById('certArea').offsetTop-80,behavior:'smooth'});
}
function renderMyResults(){
 const u=getUser();if(!u){document.getElementById('myResults').innerHTML='<p class="muted">سجّل الدخول لعرض نتائجك.</p>';return;}
 const mine=getResults().filter(r=>r.student===u.name);
 document.getElementById('myResults').innerHTML=mine.length?('<table><tr><th>الاختبار</th><th>الدرجة</th><th>صح/كلي</th><th>التاريخ</th><th>شهادة</th></tr>'+mine.map(m=>'<tr><td>'+m.exam+'</td><td><b>'+m.score+'%</b></td><td>'+m.correct+'/'+m.total+'</td><td>'+m.date+'</td><td>'+(m.score>=60?'🎓 مستحقة':'—')+'</td></tr>').join('')+'</table>'):'<p class="muted">لا توجد نتائج بعد — ابدأ أول اختبار محاكٍ.</p>';
}

// ولي الأمر
function parentFollow(all){
 const u=getUser();
 const key=(document.getElementById('parentSearch').value||'').trim();
 const res=getResults();let list=res;
 if(!all){
  if(!key){alert('أدخل اسم الطالب للمتابعة');return;}
  list=res.filter(r=>r.student.includes(key));
 }else if(u){list=res.filter(r=>r.school===u.school);}
 if(!list.length){document.getElementById('parentResult').innerHTML='<div class="card">لا توجد نتائج مطابقة — تأكد من الاسم كما سجّل به الطالب.</div>';return;}
 const bySt={};list.forEach(r=>{(bySt[r.student]=bySt[r.student]||[]).push(r);});
 let html='';
 Object.keys(bySt).forEach(st=>{
  const arr=bySt[st];const avg=Math.round(arr.reduce((s,r)=>s+r.score,0)/arr.length);
  const certs=arr.filter(r=>r.score>=60).length;
  html+='<div class="card"><h3>📌 '+st+' <small class="muted">'+arr[0].school+'</small></h3><p>عدد الاختبارات: <b>'+arr.length+'</b> • المتوسط: <b>'+avg+'%</b> • الشهادات المستحقة: <b>'+certs+'</b> • الحالة: '+(avg>=80?'🌟 ممتاز':avg>=60?'✅ جيد':'⚠️ يحتاج دعم')+'</p><table><tr><th>الاختبار</th><th>الدرجة</th><th>المصدر</th><th>التاريخ</th></tr>'+arr.map(r=>'<tr><td>'+r.exam+'</td><td>'+r.score+'%</td><td>'+(r.source||'المنصة')+'</td><td>'+r.date+'</td></tr>').join('')+'</table></div>';
 });
 document.getElementById('parentResult').innerHTML=html;
}

// لوحة صاحب المبادرة
function openDashboard(){
 if(document.getElementById('dashPass').value!==OWNER_CODE){alert('الرمز غير صحيح (للتجربة: 1234)');return;}
 document.getElementById('dashGate').style.display='none';document.getElementById('dashBody').style.display='block';renderDashboard();
}
function renderDashboard(){
 const res=getResults(),users=getUsers();
 const q=document.getElementById('dashSearch').value.trim();
 let f=res.filter(r=>!q||r.student.includes(q)||r.school.includes(q));
 const avg=f.length?Math.round(f.reduce((s,r)=>s+r.score,0)/f.length):0;
 const pass=f.filter(r=>r.score>=60).length;
 const students=new Set(f.map(r=>r.student)).size;
 document.getElementById('dashCards').innerHTML=
  '<div class="card"><b style="font-size:26px">'+students+'</b><br><span class="muted">طالب منجز</span></div>'+
  '<div class="card"><b style="font-size:26px">'+f.length+'</b><br><span class="muted">اختبار منجز</span></div>'+
  '<div class="card"><b style="font-size:26px">'+avg+'%</b><br><span class="muted">متوسط عام</span></div>'+
  '<div class="card"><b style="font-size:26px">'+pass+'</b><br><span class="muted">شهادة مستحقة</span></div>';
 const exams=[...new Set(res.map(r=>r.exam))];
 document.getElementById('dashBars').innerHTML=exams.map(e=>{const a=res.filter(r=>r.exam===e);const m=Math.round(a.reduce((s,r)=>s+r.score,0)/a.length);return '<div><b>'+e+' ('+a.length+')</b><div class="bar"><i style="width:'+m+'%"></i><span>'+m+'%</span></div></div>';}).join('')||'<p class="muted">لا بيانات بعد.</p>';
 document.getElementById('dashTable').innerHTML=f.length?('<table><tr><th>الطالب</th><th>المدرسة</th><th>الاختبار</th><th>الدرجة</th><th>المصدر</th><th>التاريخ</th></tr>'+f.slice().reverse().map(r=>'<tr><td>'+r.student+'</td><td>'+r.school+'</td><td>'+r.exam+'</td><td><b>'+r.score+'%</b></td><td>'+(r.source||'المنصة')+'</td><td>'+r.date+'</td></tr>').join('')+'</table>'):'<p class="muted">لا نتائج مطابقة.</p>';
 document.getElementById('dashInsight').innerHTML='<b>📈 تحليل تلقائي:</b> '+(f.length?('المتوسط العام '+avg+'%. '+(avg>=75?'المستوى ممتاز — كرّم المتفوقين ووسّع التجميعات.':avg>=60?'المستوى جيد — ركّز الدعم على الحاصلين تحت 60%.':'المستوى يحتاج تدخل — كثّف حصص التأسيس في الكمي والمفاهيم العلمية.')):'ابدأ بنشر رابط المنصة على المدارس لجمع أول دفعة بيانات.');
}
function clearData(){if(confirm('مسح كل النتائج والمستخدمين؟')){localStorage.removeItem(LS_RESULTS);localStorage.removeItem(LS_USERS);renderDashboard();renderStats();}}

renderUser();renderStats();renderMyResults();

// ===== مكتبة فيديو يوتيوب =====
const LS_VIDEOS='omar_videos';
function getVideos(){try{return JSON.parse(localStorage.getItem(LS_VIDEOS))||[]}catch{return[]}}
function saveVideos(v){localStorage.setItem(LS_VIDEOS,JSON.stringify(v))}
function ytId(url){
 if(!url)return null;
 const m=url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/|live\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
 if(m)return m[1];
 const m2=url.match(/[?&]v=([A-Za-z0-9_-]{6,})/);
 return m2?m2[1]:null;
}
let vidFilter='all';
function filterVideos(cat,btn){
 vidFilter=cat;
 const tabs=btn.parentElement.querySelectorAll('.tab');tabs.forEach(t=>t.classList.remove('active'));btn.classList.add('active');
 renderVideos();
}
function addVideo(){
 const title=document.getElementById('vidTitle').value.trim();
 const url=document.getElementById('vidUrl').value.trim();
 const cat=document.getElementById('vidCat').value;
 if(!title||!url){alert('أدخل عنوان المقطع ورابط يوتيوب');return;}
 const id=ytId(url);
 if(!id){alert('الرابط غير صالح — الصق رابط يوتيوب صحيح (watch / youtu.be / shorts)');return;}
 const vids=getVideos();vids.unshift({title,url,id,cat,date:new Date().toLocaleDateString('ar-SA')});
 saveVideos(vids);
 document.getElementById('vidTitle').value='';document.getElementById('vidUrl').value='';
 renderVideos();alert('تمت إضافة المقطع بنجاح ✅');
}
function delVideo(i){
 if(!confirm('حذف هذا المقطع؟'))return;
 const vids=getVideos();vids.splice(i,1);saveVideos(vids);renderVideos();
}
function renderVideos(){
 const grid=document.getElementById('videoGrid');if(!grid)return;
 const vids=getVideos();
 const list=vids.filter(v=>vidFilter==='all'||v.cat===vidFilter);
 grid.innerHTML=list.length?list.map((v)=>{
  const idx=vids.indexOf(v);
  return '<div class="card vid"><span class="vcat">'+v.cat+'</span><h3 style="margin:4px 0">'+v.title+'</h3><iframe src="https://www.youtube.com/embed/'+v.id+'" title="'+v.title+'" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe><div class="row"><a class="btn" style="text-decoration:none" target="_blank" rel="noopener" href="'+v.url+'">فتح في يوتيوب</a><button class="btn danger" onclick="delVideo('+idx+')">حذف</button></div></div>';
 }).join(''):'<div class="card"><p class="muted">لا توجد مقاطع مضافة بعد في هذا التصنيف — أضف أول مقطع من الأعلى، أو استخدم روابط البحث الجاهزة.</p></div>';
}
renderVideos();

// ===== دليل الدورات =====
const LS_COURSES='omar_courses';
let courseFilter='all';
function getCourses(){try{return JSON.parse(localStorage.getItem(LS_COURSES))||[]}catch{return[]}}
function saveCourses(c){localStorage.setItem(LS_COURSES,JSON.stringify(c))}
function filterCourses(t,btn){courseFilter=t;btn.parentElement.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));btn.classList.add('active');renderCourses();}
function addCourse(){
 const name=document.getElementById('cName').value.trim();
 const type=document.getElementById('cType').value;
 const url=document.getElementById('cUrl').value.trim();
 const note=document.getElementById('cNote').value.trim();
 if(!name||!url){alert('أدخل اسم الدورة ورابط الاشتراك');return;}
 if(!/^https?:\/\//i.test(url)){alert('الرابط يجب أن يبدأ بـ http');return;}
 const c=getCourses();c.unshift({name,type,url,note,date:new Date().toLocaleDateString('ar-SA')});saveCourses(c);
 document.getElementById('cName').value='';document.getElementById('cUrl').value='';document.getElementById('cNote').value='';
 renderCourses();alert('تمت إضافة الدورة ✅');
}
function delCourse(i){if(!confirm('حذف هذه الدورة؟'))return;const c=getCourses();c.splice(i,1);saveCourses(c);renderCourses();}
function renderCourses(){
 const g=document.getElementById('courseGrid');if(!g)return;
 const all=getCourses();
 const list=all.filter(c=>courseFilter==='all'||c.type.includes(courseFilter));
 g.innerHTML=list.length?list.map((c)=>{
  const idx=all.indexOf(c);
  return '<div class="card"><span class="vcat">'+c.type+'</span><h3 style="margin:6px 0">'+c.name+'</h3>'+(c.note?'<p class="muted">'+c.note+'</p>':'')+'<div class="row"><a class="btn primary" style="text-decoration:none" target="_blank" rel="noopener" href="'+c.url+'">🔗 اشترك الآن</a><button class="btn danger" onclick="delCourse('+idx+')">حذف</button></div></div>';
 }).join(''):'<div class="card"><p class="muted">لا توجد دورات مضافة بعد — أضف أول دورة معتمدة من الأعلى.</p></div>';
}
renderCourses();

// ===== تطبيق مستقبلهم =====
function saveStoreLinks(){
 const a=document.getElementById('setAndroid').value.trim();
 const i=document.getElementById('setIos').value.trim();
 if(a)localStorage.setItem('omar_android',a);
 if(i)localStorage.setItem('omar_ios',i);
 applyStoreLinks();alert('تم حفظ روابط التحميل ✅');
}
function applyStoreLinks(){
 const a=localStorage.getItem('omar_android'),i=localStorage.getItem('omar_ios');
 if(a)document.getElementById('dlAndroid').href=a;
 if(i)document.getElementById('dlIos').href=i;
}
function uploadMustaqbal(){
 const st=document.getElementById('mStudent').value.trim();
 const sc=document.getElementById('mSchool').value.trim();
 const ex=document.getElementById('mExam').value;
 const score=parseInt(document.getElementById('mScore').value,10);
 if(!st||!sc||isNaN(score)||score<0||score>100){alert('أكمل البيانات والدرجة من 0 إلى 100');return;}
 const res=getResults();
 res.push({student:st,school:sc,role:'طالب',exam:ex+' (عبر مستقبلهم)',examId:'external',score,correct:'—',total:'—',date:new Date().toLocaleString('ar-SA'),source:'تطبيق مستقبلهم'});
 saveResults(res);renderStats();renderMustaqbalList();
 document.getElementById('mustaqbalMsg').innerHTML='<div class="notice">✅ تم رفع تقدم <b>'+st+'</b> ('+score+'%) — يظهر الآن في لوحة ولي الأمر وصاحب المبادرة.</div>';
}
function renderMustaqbalList(){
 const el=document.getElementById('mustaqbalList');if(!el)return;
 const ext=getResults().filter(r=>r.source==='تطبيق مستقبلهم').slice().reverse().slice(0,10);
 el.innerHTML=ext.length?('<table><tr><th>الطالب</th><th>المدرسة</th><th>الاختبار</th><th>الدرجة</th><th>التاريخ</th></tr>'+ext.map(r=>'<tr><td>'+r.student+'</td><td>'+r.school+'</td><td>'+r.exam+'</td><td><b>'+r.score+'%</b></td><td>'+r.date+'</td></tr>').join('')+'</table>'):'<p class="muted">لا يوجد تقدم مرفوع بعد عبر التطبيق.</p>';
}
applyStoreLinks();renderMustaqbalList();
