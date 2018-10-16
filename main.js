
const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    // body.style.backgroundColor = 'red';
    document.body.classList.toggle('bg');

})

const btnBaru = document.createElement('button');
const teksBtn = document.createTextNode('Ubah Warna Random');
btnBaru.appendChild(teksBtn);
btnBaru.setAttribute('type', 'button');
btnBaru.setAttribute('id', 'btnBaru');
btn.after(btnBaru);

btnBaru.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb(' + r +',' + g + ',' + b + ')';


});

// element input semuanya dapat di ambil valuenya

const Sm = document.querySelector('input[name=Smerah]');
const Sh = document.querySelector('input[name=Shijau]');
const Sb = document.querySelector('input[name=Sbiru]');


Sm.addEventListener('input', function(){  
    const r = Sm.value;
    document.body.style.backgroundColor = 'rgb('+ r +',100,100)';
});

Sh.addEventListener('input', function () {
    const r = Sm.value;
    const g = Sh.value;
    document.body.style.backgroundColor = 'rgb(' + r +',' + g + ',100 )';
})

Sb.addEventListener('input', function(){  
    const r = Sm.value;
    const g = Sh.value;
    const b = Sb.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +',' + b + ')';

});