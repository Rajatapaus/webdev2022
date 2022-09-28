class Henkilo {
    constructor(etunimet, sukunimi, syntymavuosi) {
        this.etunimet = etunimet;
        this.sukunimi = sukunimi;
        this.syntymavuosi = syntymavuosi;
        this.kutsumanimi = etunimet.split(" ")[0]; //kutsumanimi on henkilön ensimmäinen nimi
    }
}

class Urheilija extends Henkilo {
    constructor(etunimet, sukunimi, syntymavuosi, kuva, paino, laji, saavutukset) {
        super(etunimet, sukunimi, syntymavuosi);
        this.kuva = kuva;
        this.paino = paino;
        this.laji = laji;
        this.saavutukset = saavutukset;
    }
    get Etunimet() {
        return this.etunimet
    }
    set Etunimet(etunimet) {
        this.etunimet = etunimet;
    }

    get Sukunimi() {
        return this.sukunimi
    }
    set Sukunimi(sukunimi) {
        this.sukunimi = sukunimi;
    }

    get Saavutukset() {
        return this.saavutukset
    }
    set Saavutukset(saavutukset) {
        this.saavutukset = saavutukset;
    }
}

var urheilijat = []

urheilijat.push(new Urheilija("Mika", "Häkkinen", 54, "https://fi-seiska-cdn-pro.seiska.fi/files/inline-images/2021/43/Maailmanmestari%20Mika%20H%C3%A4kkinen%201998.jpg",
    74, "Formula 1", "Maailman mestaruus"));

urheilijat.push(new Urheilija("Aku Donald", "Ankka", 30,
    "https://upload.wikimedia.org/wikipedia/fi/d/d4/Don_Rosan_Aku_Ankka.png",
    59, "Räyhääminen", null))

console.log(urheilijat);