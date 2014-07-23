#pragma strict

public var Reihe_Art:int; // 0=Deck; 1=Krieger; 2=Land; 

function Start () {
	var tmp_feld:Feld_Manager;
	for (var child : Transform in transform) {
		tmp_feld=child.GetComponent(Feld_Manager);
		tmp_feld.Feld_Art=Reihe_Art;
	}
}