#pragma strict

private var Karten_Pool:Card_Manager;
public var deck_groesse=60;
public var deck:int[];


function Start () {
	deck=new int[deck_groesse];
	Karten_Pool  = transform.Find("Karte").transform.Find("Card_Front").GetComponent(Card_Manager);
	loadDeck();
	shuffelDeck();
	
	yield WaitForSeconds(0.5);
	for (var i=0;i<7;i++) {
		KarteZiehen();
	}
}

function Update () {
	if (deck.Length>0) {
		Karten_Pool.karten_id=deck[0];
	} else {
		Karten_Pool.karten_id=-1;
	}
}

function shuffelDeck() {
	var tmp:int;
	var r:int;
	for (var i = 0;i<deck_groesse;i++) {
		r=Random.Range(0,deck_groesse);
		tmp=deck[r];
		deck[r]=deck[i];
		deck[i]=tmp;
	}
}

function loadDeck() {
	var tmp_karten_zahl:int;
	tmp_karten_zahl=Karten_Pool.karten_texture.length;
	
	for (var i = 0;i<deck_groesse;i++) {
		deck[i]=i % tmp_karten_zahl;
	}
}

function KarteZiehen() {
	//arr.RemoveAt(1)
	var refHand:Hand_Manager;
	//Debug.Log(transform.parent.transform.parent.Find("Reihe_4_Hand").transform.Find("Hand").name);
	refHand=transform.parent.transform.parent.Find("Reihe_4_Hand").transform.Find("Hand").GetComponent(Hand_Manager);
	refHand.KarteHinzufuegen(deck[0]);
	var neuesdeck=new int[(deck_groesse-1)];
	for (var i = 0;i<(deck_groesse-1);i++) {
		neuesdeck[i]=deck[i+1];
	}
	deck=neuesdeck;
	deck_groesse=deck.Length;
}
