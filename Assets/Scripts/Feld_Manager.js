#pragma strict

public var Feld_Art:int;
private var Old_Art:int;

public var Feld_Tap_Status:int;
private var Karte:Card_Manager;
function Start () {
	//Karte  = transform.Find("Karte").transform.Find("Card_Front").GetComponent(Card_Manager);
}

function Update () {
	if (Feld_Art==0)	{
		renderer.material.color = Color.white;
	}
	if (Feld_Art==1)	{
		renderer.material.color = Color.red;
	}
	if (Feld_Art==2)	{
		renderer.material.color = Color.blue;
	}
	if (Feld_Art==3)	{
		renderer.material.color = Color.grey;
	}
	if (Feld_Art==4)	{
		renderer.material.color = Color.yellow;
	}
	
	if (Feld_Art==-1)	{
		renderer.material.color = Color.green;
	}
}

/*
function OnMouseUp() {
	if (Karte.Karte_Status_Tap==0) {
		transform.Find("Karte").transform.Rotate(0, 0, 270);
		Karte.Karte_Status_Tap=1;
	} else {
		transform.Find("Karte").transform.Rotate(0, 0, 90);
		Karte.Karte_Status_Tap=0;
	}
}
*/