function Soru (soruMetni,cevapSecenekleri,dogruCevap)
{
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap)
{
    return cevap === this.dogruCevap;
}

let sorular =
[
    new Soru("1- Hangisi Javascript paket yönetim uygulamasıdır?",{A:"Node.js",B:"Typescript",C:"Npm",D:"Hiçbiri"},"C"),
    new Soru("2- Atatürk'ün doğum yılı nedir?",{A:"1884",B:"1882",C:"1902",D:"1881"},"D"),
    new Soru("3- Cumhuriyetin ilanı hangi şıkta doğru verilmiştir?",{A:"28 Ekim 1923",B:"26 Kasım 1923",C:"29 Ekim 1922",D:"29 Ekim 1923"},"D"),
    new Soru("4- Hangisi Javascript programlama dilini kullanmaz?",{A:"ASP.NET",B:"React",C:"Angular",D:"Vuejs"},"A")
];