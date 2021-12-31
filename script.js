var forma = document.forms["form1"];
// formiranje baze podataka.
function Objekat(cena,tekuce,glavniMotori,pomocniMotori,stopa_amortizacije,koef_rezije,koef_neto_bruto){
  this.cena = cena;
  this.tekuce = tekuce;
  this.glavniMotori = glavniMotori;
  this.pomocniMotori = pomocniMotori;
  this.stopa_amortizacije = stopa_amortizacije;
  this.koef_rezije = koef_rezije;
  this.koef_neto_bruto = koef_neto_bruto;
}
const Salajka = new Objekat(1500000, 4000, 89, 6, 0.040, 1.4, 1.44);
const Detelinara = new Objekat(1300000, 3000, 80, 4, 0.035, 1.4, 1.44);
const Zrenjanin = new Objekat(900000, 1000, 70, 2, 0.033, 1.4, 1.44);
//nizovi koji omogucavaju pretvaranje string Objekta u objekat sa svojstvima
var niz = [Salajka, Detelinara, Zrenjanin];
var niz1 = ['Salajka', 'Detelinara', 'Zrenjanin'];
//kad se stampa da se tasteri ne vide i obrnuto
function nevidljivost(){
  document.getElementById("stampa1").style.visibility = "hidden";
  document.getElementById("sacuvaj").style.visibility = "hidden";
  document.getElementById("pretraga").style.visibility = "hidden";
  document.getElementById("sve").style.visibility = "hidden";
  document.getElementById("brisanje").style.visibility = "hidden";
  document.getElementById("indeksnaPretraga").style.visibility = "hidden";
  document.getElementById("dodaj_robu").style.visibility = "hidden";
  };
function vidljivost(){
  document.getElementById("stampa1").style.visibility = "visible";
  document.getElementById("sacuvaj").style.visibility = "visible";
  document.getElementById("pretraga").style.visibility = "visible";
  document.getElementById("sve").style.visibility = "visible";
  document.getElementById("brisanje").style.visibility = "visible";
  document.getElementById("indeksnaPretraga").style.visibility = "visible";
  document.getElementById("dodaj_robu").style.visibility = "visible";
  };
  //provera unetih kilometara reke Dunav; dodato u HTML kao rukovaoc dogadjaja
  function proveraKMIno(val, select){
    if(val>2500 || (val>860 && val<1422)){
      select.select();
      alert("Unos mora biti manji od 2500 i van opsega 860-1422km!");
    }
  };
  /*moguca je plovidba i Savom, Tisom i td pa zato samo ovako. Kilometraza se
  racuna od usca reke. Dodato u HTML kao rukovaoc dogadjaja*/
  function proveraKMSrb(val, select){
    if(val>1422){
      select.select();
      alert("Unos mora biti manji od 1422!");
    }
  };
  //dodato u HTML kao rukovaoc dogadjaja
  function proveraUsputnaZad(val, select){
    if(val>240){
      select.select();
      alert("Zadrzavanje je duze od deset dana!");
    }
  };
  //provera nizvodne brzine; dodato u HTML kao rukovaoc dogadjaja
  function proveraNizBrzine(val, select){
    if(val>20){
      select.select();
      alert("Nizvodna brzina je veca od 20km/h ili manja od 7km/h!");
    }
  };
  //dodato u HTML kao rukovaoc dogadjaja
  function proveraUtovarIstovar(val, select){
    if(val>240){
      select.select();
      alert("Utovar ili istovar je duze od deste dana!");
    }
  };
  //dodato u HTML kao rukovaoc dogadjaja
  function proveraUzBrzine(val, select){
    if(val>12){
      select.select();
      alert("Uzvodna brzina je veca od 12km/h!");
    }
  };
  //dodato u HTML kao rukovaoc dogadjaja
  function proveraBrPosade(val, select){
    if(val>6){
      select.select();
      alert("Clanova posade je vise od 6!");
    }
  };
  //dodato u HTML kao rukovaoc dogadjaja
  function proveraNetoPlate(val, select){
    if(val>60000){
      select.select();
      alert("Neto plata je veca od 60000 rsd!");
    }
  };
  //dodato u HTML kao rukovaoc dogadjaja
  function proveraCeneGoriva(val, select){
    if(val>300){
      select.select();
      alert("Cena goriva je veca od 300 rsd/lit!");
    }
  };
  //dodato u HTML kao rukovaoc dogadjaja
  function proveraBrojInoKrmara(val, select){
    if(val>3){
      select.select();
      alert("Broj ino krmara je veca 3!");
    }
  };
  //dodato u HTML kao rukovaoc dogadjaja
  function proveraKursaEvra(val, select){
    if(val>200){
      select.select();
      alert("Kurs evra je veci od 200 rsd!");
    }
  };
  //dodato u HTML kao rukovaoc dogadjaja
  function proveraInoDnevnica(val, select){
    if(val>20){
      select.select();
      alert("Ino dnevnice posade su vise od 20 eur/dan!");
    }
  };
  //dodato u HTML kao rukovaoc dogadjaja
  function proveraInoDnevKrmara(val, select){
    if(val>40){
      select.select();
      alert("Ino dnevnice krmara su vise od 40 eur/dan!");
    }
  };
  //ne dozvoljava unos broja
  var relacija = document.getElementById("relacija");
  relacija.addEventListener("keypress", function(event){
    if(/\d/.test(event.key)){event.preventDefault()};
  });
function izracunaj(){
  var od_km_nizvodno_Srb = forma.elements["od_km_nizvodno_Srb"].value,
      do_km_nizvodno_Srb = forma.elements["do_km_nizvodno_Srb"].value,
      od_km_nizvodno_Ino = forma.elements["od_km_nizvodno_Ino"].value,
      do_km_nizvodno_Ino = forma.elements["do_km_nizvodno_Ino"].value,
      od_km_uzvodno_Srb = forma.elements["od_km_uzvodno_Srb"].value,
      do_km_uzvodno_Srb = forma.elements["do_km_uzvodno_Srb"].value,
      od_km_uzvodno_Ino = forma.elements["od_km_uzvodno_Ino"].value,
      do_km_uzvodno_Ino = forma.elements["do_km_uzvodno_Ino"].value,
      brzina_nizvodno = forma.elements["brzina_nizvodno"].value,
      brzina_uzvodno = forma.elements["brzina_uzvodno"].value,
      kurs_eura = forma.elements["kurs_eura"].value,
      neto_plata = forma.elements["neto_plata"].value,
      br_posade = forma.elements["br_posade"].value,
      cena_goriva = forma.elements["cena_goriva"].value,
      roba = forma.elements["roba"].value,
      tona = forma.elements["tona"].value;
    if(brzina_uzvodno==0 && ((od_km_uzvodno_Srb-
  do_km_uzvodno_Srb!=0)||(od_km_uzvodno_Ino-
  do_km_uzvodno_Ino!=0)) ||
  brzina_nizvodno==0 && ((od_km_nizvodno_Srb-
  do_km_nizvodno_Srb!=0)||(od_km_nizvodno_Ino-
  do_km_nizvodno_Ino!=0))){
  alert("Proveri brzine!");
    }
    if(brzina_uzvodno>0 && (((od_km_uzvodno_Srb==0 &&
    do_km_uzvodno_Srb>0) || (od_km_uzvodno_Srb>0 && do_km_uzvodno_Srb==0))
    ||((od_km_uzvodno_Ino>0 && do_km_uzvodno_Ino==0) ||
  ((od_km_uzvodno_Ino==0 && do_km_uzvodno_Ino>0))))){
      alert("Proveri uzvodni unos!");
    };
    if(brzina_nizvodno>0 && (((od_km_nizvodno_Srb==0 &&
    do_km_nizvodno_Srb>0) || (od_km_nizvodno_Srb>0 && do_km_nizvodno_Srb==0))
    ||((od_km_nizvodno_Ino>0 && do_km_nizvodno_Ino==0) ||
  ((od_km_nizvodno_Ino==0 && do_km_nizvodno_Ino>0))))){
      alert("Proveri nizvodni unos!");
    };
    if(kurs_eura==0){alert("Proveri kurs evra!")};
    if(neto_plata==0){alert("Proveri neto platu!")};
    if(br_posade==0){alert("Proveri broj posade!")};
    if(cena_goriva==0){alert("Proveri cenu goriva!")};
    if(roba==0){alert("Proveri unos vrste robe!")};
    if(tona==0){alert("Proveri unos kolicine (t)!")}
  //Preuzimanje objekta sa forme.
  (function(){
  return objekat = forma.elements["Objekat"].value
  })();
  var plovidba_u_Srb,
      nizvodna_plov_u_Srb=0,
      uzvodna_plov_u_Srb=0,
      plovidba_u_Ino,
      nizvodna_plov_u_Ino=0,
      uzvodna_plov_u_Ino=0,
      ukupno_u_Srb,
      ukupno_u_Ino;
      // da se izbegne deljenje sa nulom.
      if(brzina_nizvodno>0){nizvodna_plov_u_Srb=
        (od_km_nizvodno_Srb - do_km_nizvodno_Srb)/brzina_nizvodno};
      if(brzina_uzvodno>0){uzvodna_plov_u_Srb=
        (do_km_uzvodno_Srb - od_km_uzvodno_Srb)/brzina_uzvodno};
      plovidba_u_Srb=Math.abs(nizvodna_plov_u_Srb)+Math.abs(uzvodna_plov_u_Srb);
      if(brzina_nizvodno>0){nizvodna_plov_u_Ino=
          (od_km_nizvodno_Ino-do_km_nizvodno_Ino)/brzina_nizvodno};
      if(brzina_uzvodno>0){uzvodna_plov_u_Ino=
        (do_km_uzvodno_Ino - od_km_uzvodno_Ino)/brzina_uzvodno};
      plovidba_u_Ino=Math.abs(nizvodna_plov_u_Ino) + Math.abs(uzvodna_plov_u_Ino);
  return [ukupno_u_Srb=Number(forma.elements["usputna_zadrz_Srb"].value)+
  Number(forma.elements["zadrz_utovar_Srb"].value)+Number(forma.elements["zadrz_istovar_Srb"].value)+
  plovidba_u_Srb,
  ukupno_u_Ino=Number(forma.elements["usputna_zadrz_Ino"].value)+
  Number(forma.elements["zadrz_utovar_Ino"].value)+Number(forma.elements["zadrz_istovar_Ino"].value)+
  plovidba_u_Ino,
  forma.elements["tekuce_i_invest"].value=niz[niz1.indexOf(objekat)].tekuce,
  forma.elements["potrebno_goriva"].value=(niz[niz1.indexOf(objekat)].glavniMotori*
  (plovidba_u_Srb+plovidba_u_Ino)+niz[niz1.indexOf(objekat)].pomocniMotori
  *(ukupno_u_Srb+ukupno_u_Ino)).toFixed(0),
  forma.elements["dana_u_Srb"].value = ukupno_u_Srb/24,
  forma.elements["dana_u_Ino"].value = ukupno_u_Ino/24,
  forma.elements["ukupno_dana"].value = (ukupno_u_Srb+ukupno_u_Ino)/24,
  ukupno_dana = (ukupno_u_Srb+ukupno_u_Ino)/24,
  forma.elements["troskovi_goriva_i_maziva"].value=(forma.elements["potrebno_goriva"].value
  *1.17*forma.elements["cena_goriva"].value
  /forma.elements["kurs_eura"].value).toFixed(2),
  forma.elements["Amortizacija"].value=(niz[niz1.indexOf(objekat)].cena*
  niz[niz1.indexOf(objekat)].stopa_amortizacije*ukupno_dana/365).toFixed(2),
  forma.elements["tekuce_i_invest"].value = (niz[niz1.indexOf(objekat)].tekuce*
  ukupno_dana/365).toFixed(2),
  forma.elements["bruto_plata"].value = (2*Number(forma.elements["br_posade"].value)
  *forma.elements["neto_plata"].value*niz[niz1.indexOf(objekat)].koef_rezije
  *niz[niz1.indexOf(objekat)].koef_neto_bruto/forma.elements["kurs_eura"].value).toFixed(2),
  forma.elements["Ino_dnevnice"].value = ((forma.elements["br_posade"].value*
  forma.elements["ino_dnevnice"].value + forma.elements["br_ino_krmara"].value
  *forma.elements["ino_dnevnice_krmari"].value)*ukupno_u_Ino/24).toFixed(2),
  forma.elements["zakonske_i_ugovorne_obaveze"].value = (niz[niz1.indexOf(objekat)].cena
  /5*ukupno_dana/365).toFixed(2),
  ukupni_troskovi1=Number(forma.elements["troskovi_goriva_i_maziva"].value)
  +Number(forma.elements["Amortizacija"].value)+Number(forma.elements["tekuce_i_invest"].value)
  +Number(forma.elements["bruto_plata"].value)+Number(forma.elements["Ino_dnevnice"].value)
  +Number(forma.elements["zakonske_i_ugovorne_obaveze"].value)
  +Number(forma.elements["lucke_takse"].value),
  forma.elements["ostali_troskovi"].value = (0.1*ukupni_troskovi1).toFixed(2),
  forma.elements["ukupni_troskovi"].value = (ukupni_troskovi1
  +Number(forma.elements["ostali_troskovi"].value)).toFixed(2),
  forma.elements["cena_kostanja_prevoza"].value = (forma.elements["ukupni_troskovi"].value
  /tona).toFixed(2),
  forma.elements["cena_prevozne_usluge"].value = (forma.elements["cena_kostanja_prevoza"].value
  *forma.elements["profit"].value).toFixed(2),
  forma.elements["cena_prevozne_usluge1"].value = (forma.elements["cena_prevozne_usluge"].value
  *forma.elements["kurs_eura"].value).toFixed(2),
  d = new Date(),
  document.getElementById("datum").innerHTML = d.toLocaleDateString(),
  window.print(),
  vidljivost(),
  alert("Izrada nove kalulacije sa tasterom 'F5'")]
  };
  (function(){
    //omogucava automatsko prelazenje iz jednog u drugo polje
    function tabForward(event){
    var event = event || window.event;
    var target = event.target;
    if(target.value.length == target.maxLength){
        var form = target.form;
    for (var i = 0, len = form.elements.length; i < len ; i++) {
      if(form.elements[i] == target){
        if(form.elements[i+1]){
          form.elements[i+1].select();
          }
          return;
        }
      }
    }
   }
      var numberbox1 = document.getElementById("tona"),
          numberbox2 = document.getElementById("od_km_nizvodno_Srb"),
          numberbox3 = document.getElementById("do_km_nizvodno_Srb"),
          numberbox4 = document.getElementById("od_km_uzvodno_Srb"),
          numberbox5 = document.getElementById("do_km_uzvodno_Srb"),
          numberbox6 = document.getElementById("usputna_zadrz_Srb"),
          numberbox7 = document.getElementById("zadrz_utovar_Srb"),
          numberbox8 = document.getElementById("zadrz_istovar_Srb"),
          numberbox9 = document.getElementById("od_km_nizvodno_Ino"),
          numberbox10 = document.getElementById("do_km_nizvodno_Ino"),
          numberbox11 = document.getElementById("od_km_uzvodno_Ino"),
          numberbox12 = document.getElementById("do_km_uzvodno_Ino"),
          numberbox13 = document.getElementById("usputna_zadrz_Ino"),
          numberbox14 = document.getElementById("zadrz_utovar_Ino"),
          numberbox15 = document.getElementById("zadrz_istovar_Ino"),
          numberbox16 = document.getElementById("brzina_nizvodno"),
          numberbox18 = document.getElementById("br_posade"),
          numberbox19 = document.getElementById("neto_plata"),
          numberbox20 = document.getElementById("cena_goriva"),
          numberbox21 = document.getElementById("br_ino_krmara"),
          numberbox22 = document.getElementById("kurs_eura"),
          numberbox23 = document.getElementById("ino_dnevnice");

      numberbox1.addEventListener("keyup", tabForward);
      numberbox2.addEventListener("keyup", tabForward);
      numberbox3.addEventListener("keyup", tabForward);
      numberbox4.addEventListener("keyup", tabForward);
      numberbox5.addEventListener("keyup", tabForward);
      numberbox6.addEventListener("keyup", tabForward);
      numberbox7.addEventListener("keyup", tabForward);
      numberbox8.addEventListener("keyup", tabForward);
      numberbox9.addEventListener("keyup", tabForward);
      numberbox10.addEventListener("keyup", tabForward);
      numberbox11.addEventListener("keyup", tabForward);
      numberbox12.addEventListener("keyup", tabForward);
      numberbox13.addEventListener("keyup", tabForward);
      numberbox14.addEventListener("keyup", tabForward);
      numberbox15.addEventListener("keyup", tabForward);
      numberbox16.addEventListener("keyup", tabForward);
      numberbox18.addEventListener("keyup", tabForward);
      numberbox19.addEventListener("keyup", tabForward);
      numberbox20.addEventListener("keyup", tabForward);
      numberbox21.addEventListener("keyup", tabForward);
      numberbox22.addEventListener("keyup", tabForward);
      numberbox23.addEventListener("keyup", tabForward);
      //omogucava prelazenje iz jednog u drugo polje enterom
      function enterForward(event){
        var event = event || window.event;
        var target = event.target;
        for(var i=0, len=forma.elements.length; i<len; i++){
          if(forma.elements[i]==target){
            if(forma.elements[i+1]){
              forma.elements[i+1].select();
            }
            return
          }
        }
      }
      numberbox1.addEventListener("keypress", enterForward);
      numberbox2.addEventListener("keypress", enterForward);
      numberbox3.addEventListener("keypress", enterForward);
      numberbox4.addEventListener("keypress", enterForward);
      numberbox5.addEventListener("keypress", enterForward);
      numberbox6.addEventListener("keypress", enterForward);
      numberbox7.addEventListener("keypress", enterForward);
      numberbox8.addEventListener("keypress", enterForward);
      numberbox9.addEventListener("keypress", enterForward);
      numberbox10.addEventListener("keypress", enterForward);
      numberbox11.addEventListener("keypress", enterForward);
      numberbox12.addEventListener("keypress", enterForward);
      numberbox13.addEventListener("keypress", enterForward);
      numberbox14.addEventListener("keypress", enterForward);
      numberbox15.addEventListener("keypress", enterForward);
      numberbox16.addEventListener("keypress", enterForward);
      numberbox18.addEventListener("keypress", enterForward);
      numberbox19.addEventListener("keypress", enterForward);
      numberbox20.addEventListener("keypress", enterForward);
      numberbox21.addEventListener("keypress", enterForward);
      numberbox22.addEventListener("keypress", enterForward);
      numberbox23.addEventListener("keypress", enterForward);
  })();
  //podeseno prelazenje iz polja u polje enterom
  var objekat = document.getElementById("Objekat"),
      roba = document.getElementById("roba"),
      numberbox1 = document.getElementById("tona"),
      numberbox17 = document.getElementById("brzina_uzvodno"),
      numberbox18 = document.getElementById("br_posade"),
      numberbox24 = document.getElementById("ino_dnevnice_krmari"),
      numberbox25 = document.getElementById("lucke_takse"),
      numberbox26 = document.getElementById("profit");
    objekat.addEventListener('keypress', function(event){
      if(event.charCode===13){
        event.preventDefault();
        relacija.focus();
      }
    });
    relacija.addEventListener('keypress', function(event){
      if(event.charCode===13){
        event.preventDefault();
        roba.focus();
      }
    });
    roba.addEventListener('keypress', function(event){
      if(event.charCode===13){
        event.preventDefault();
        numberbox1.focus();
      }
    });
    numberbox17.addEventListener('keypress', function(event){
      if(event.charCode===13){numberbox18.select()}
    });
    numberbox24.addEventListener('keypress', function(event){
      if(event.charCode===13){numberbox25.select()}
    })
    numberbox25.addEventListener('keypress', function(event){
      if(event.charCode===13){numberbox26.select()}
    })
  //formiranje indexedDB radi pamcenjna i pregleda kalkulacija
  window.indexedDB = window.indexedDB || window.mozIndexedDB ||
  window.webkitIndexedDB || window.msIndexedDB;
  window.IDBTransaction = window.IDBTransaction ||
  window.webkitIDBTransaction || window.msIDBTransaction;
  window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange ||
  window.msIDBKeyRange;
  if (!window.indexedDB) {
   window.alert("Your browser doesn't support a stable version of IndexedDB.")
  };
  var db;
  var request = window.indexedDB.open("kalkulacije");
      request.onsuccess = function(event){
        db = request.result;
        console.log("success: " + db);
      };
      request.onupgradeneeded = function(event){
        db = event.target.result;
        var objectStore = db.createObjectStore("kalk", {keyPath: "id"});
        objectStore.createIndex("relacija", "relacija", {unique: false});
        var index = objectStore.index("relacija");
      };
      function add(){
        var request = db.transaction(["kalk"], "readwrite")
        .objectStore("kalk")
        .add({id:prompt("00-01, 00-02 ..."),
              objekat:document.getElementById("Objekat").value,
              relacija:document.getElementById("relacija").value,
              roba:document.getElementById("roba").value,
              tona:document.getElementById("tona").value,
              cena_kostanja:document.getElementById("cena_kostanja_prevoza").value,
              profit:document.getElementById("profit").value,
              cena_prevozne_usluge:document.getElementById("cena_prevozne_usluge").value,
              ukupno_dana:(document.getElementById("ukupno_dana").value)})
              request.success = function(event){
                alert("Dodaje se tekuca kalkulacija!")
              }
      };
      function read() {
         var transaction = db.transaction(["kalk"]);
         var objectStore = transaction.objectStore("kalk");
         var request = objectStore.get(prompt("unesi id npr 00-01,00-02 ..."));

         request.onerror = function(event) {
            alert("Nije uspelo!");
         };

         request.onsuccess = function(event) {

            if(request.result) {
               alert("Objekat: " + request.result.objekat + ", Relacija:"
                   + request.result.relacija + ", Roba: " + request.result.roba
                   + ", Kolicina (t): " + request.result.tona +
                    ", Cena kostanja prevoza (eur/t): " + request.result.cena_kostanja)
            } else {
               alert("Nema tog id-a!");
            }
         };
      };
      function readAll() {
      var objectStore = db.transaction("kalk").objectStore("kalk");

      objectStore.openCursor().onsuccess = function(event) {
         var cursor = event.target.result;

         if (cursor) {
            alert("Objekat: " + cursor.value.objekat + ", Relacija:"
                + cursor.value.relacija + ", Roba: " + cursor.value.roba
                + ", Kolicina (t): " + cursor.value.tona
                + ", Ukupno dana: " + cursor.value.ukupno_dana
                + ", Cena kostanja prevoza (eur/t): " + cursor.value.cena_kostanja)
            cursor.continue();
         } else {
            alert("To je sve!");
         }
       };
     };
     function remove() {
        var request = db.transaction(["kalk"], "readwrite")
        .objectStore("kalk")
        .delete(prompt("id kalkulacije za brisanje!"));

        request.onsuccess = function(event) {
           alert("Uspesno brisanje!");
        };
     };
     function indeksna(){
       db = request.result;
       let transaction = db.transaction("kalk");
       let objectStore = transaction.objectStore("kalk");
       let index = objectStore.index("relacija");
       let request1 = index.openCursor(prompt("Unesi relaciju!"));
       request1.onsuccess = function(){
         let cursor = request1.result;
         if(cursor){
           alert("id: " + cursor.value.id +"; Relacija: " + cursor.key
           + ", Ukupno dana: " + cursor.value.ukupno_dana
           + "; Cena kostanja prevoza(eur/t): "+ cursor.value.cena_kostanja);
           cursor.continue();
       }else{
         alert("Gotovo!")
       }
      }
      };
