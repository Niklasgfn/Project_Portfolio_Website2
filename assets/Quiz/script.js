var fragen = new Array();
var punkte = 0;
var runden = 0;
var gesperrt = true;
var richtigeAntwort;

definiereDieFragen();

function tippeButton(gewaehlterButton) {
    if (gesperrt == true) { return }
    gesperrt = true;
    gewaehlterButton.style.boxShadow = "10px 10px 20px grey inset";
    if (gewaehlterButton.getAttribute("id") == richtigeAntwort) {
        gewaehlterButton.style.background = "rgb(131, 211, 12)";
        punkte++;
    }
    else {
        gewaehlterButton.style.background = "#FF0000";
    }
}

function starteNeueRunde() {
    document.getElementById("1").style.boxShadow = "15px 15px 15px grey";
    document.getElementById("1").style.background = "white";
    document.getElementById("2").style.boxShadow = "15px 15px 15px grey";
    document.getElementById("2").style.background = "white";
    document.getElementById("3").style.boxShadow = "15px 15px 15px grey";
    document.getElementById("3").style.background = "white";

    if (runden < 5) {
        gesperrt = false;
        runden++;

        dieFrage = fragen.shift();
        var frageAufbereitet = dieFrage.split("#");
        document.getElementById("Frage").innerHTML = frageAufbereitet[0];
        document.getElementById("Antworten").innerHTML = frageAufbereitet[1];
        document.getElementById("hint").innerHTML = "Um zur nächsten Frage zu gehen, klicke auf 'Next'"
        richtigeAntwort = frageAufbereitet[2];
    }
    else {
        document.getElementById("Frage").innerHTML = " ";
        document.getElementById("Antworten").innerHTML = "Das Spiel ist zu Ende. Du hast " + punkte + " von 5 Punkten geholt";
        document.getElementById("hint").innerHTML = " ";
    }
}

function definiereDieFragen() {
    fragen[0] = "Was bewirkt das Schlüsselwort 'static' in Java?#1) Methode gehört zur Klasse 2) Methode gehört zum Objekt 3) Methode wird kopiert#1";
    fragen[1] = "Wie heißt die Methode, die beim Programmstart ausgeführt wird?#1) main() 2) start() 3) run()#1";
    fragen[2] = "Welche Dateiendung hat eine Java-Quellcodedatei?#1) .class 2) .java 3) .exe#2";
    fragen[3] = "Welches Schlüsselwort wird benutzt, um ein neues Objekt zu erstellen?#1) new 2) create 3) build#1";
    fragen[4] = "Was beschreibt der Datentyp 'int' in Java?#1) Ein Text 2) Eine ganze Zahl 3) Ein Zeichen#2";
    fragen[5] = "Welche Methode muss jede Java-Anwendung enthalten?#1) main() 2) start() 3) init()#1";
    fragen[6] = "Wie werden Fehler in Java behandelt?#1) mit try-catch 2) mit if-else 3) mit einer while-Schleife#1";
    fragen[7] = "Welches ist kein gültiger primitiver Datentyp in Java?#1) int 2) float 3) character#3";
    fragen[8] = "Welches Schlüsselwort wird verwendet, um Vererbung in Java zu ermöglichen?#1) extend 2) extends 3) inherits#2";
    fragen[9] = "Wie deklariert man eine unveränderbare Konstante in Java?#1) final 2) const 3) static#1";

    for (var i = 0; i < 9; i++) {
        fragen.sort(function (a, b) { return Math.random() - 0.5 });
    }
}