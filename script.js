(function(){
  // project filter
  var chips=document.querySelectorAll('.chip'), cards=document.querySelectorAll('.pcard');
  chips.forEach(function(c){
    c.addEventListener('click',function(){
      chips.forEach(function(x){x.setAttribute('aria-pressed','false')});
      c.setAttribute('aria-pressed','true');
      var f=c.dataset.f;
      cards.forEach(function(card){card.hidden=!(f==='all'||card.dataset.c===f)});
    });
  });

  // theme switch
  var root=document.documentElement, btn=document.getElementById('themeBtn');
  btn.addEventListener('click',function(){
    var dark=root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme=dark?'light':'dark';
  });

  // contact form opens the visitor's email app
  var form=document.getElementById('f'), note=document.getElementById('note');
  form.addEventListener('submit',function(ev){
    ev.preventDefault();
    var n=form.n.value.trim(), e=form.e.value.trim(), m=form.m.value.trim();
    if(!n||!e||!m||!/^\S+@\S+\.\S+$/.test(e)){
      note.textContent='Please fill in your name, a valid email and a message.';
      return;
    }
    var who=form.querySelector('input[name=who]:checked').value;
    var body='From: '+n+' ('+e+')\nI am a: '+who+'\n\n'+m;
    var subject='Portfolio enquiry: '+form.t.value;
    note.textContent='Opening your email app…';
    location.href='mailto:your.email@example.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
  });
})();
