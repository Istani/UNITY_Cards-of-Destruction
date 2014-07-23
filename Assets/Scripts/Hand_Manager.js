#pragma strict
public var count_karten:float;
public var Start_Position:float;
public var Seite=1;
public var Prefab_Karte:Transform;

private var handkarte:float;

private var org_position_x:float;
private var org_position_y:float;
private var org_position_z:float;
private var org_rotation_x:float;
private var org_rotation_y:float;
private var org_rotation_z:float;
private var org_scale_x:float;
private var org_scale_y:float;
private var org_scale_z:float;

function Start() {
	for (var child : Transform in transform) {
		Start_Position=child.transform.position.x;
		
		org_position_x=child.transform.position.x;
		org_position_y=child.transform.position.y;
		org_position_z=child.transform.position.z;
		org_scale_x=child.transform.localScale.x;
		org_scale_y=child.transform.localScale.y;
		org_scale_z=child.transform.localScale.z;
		
		org_rotation_x=child.transform.localEulerAngles.x;
		org_rotation_y=child.transform.localEulerAngles.y;
		org_rotation_z=child.transform.localEulerAngles.z;
		
		Destroy(child.gameObject);
	}
}

public function KarteHinzufuegen(Karten_ID) {
	var newCard:Transform;
	var tmp_karten:Card_Manager;
	newCard=Instantiate(Prefab_Karte);
	newCard.transform.parent = transform;
	
	newCard.transform.position.x=org_position_x;
	newCard.transform.position.y=org_position_y;
	newCard.transform.position.z=org_position_z;
	newCard.transform.localScale.x=org_scale_x;
	newCard.transform.localScale.y=org_scale_y;
	newCard.transform.localScale.z=org_scale_z;
	
	newCard.transform.localEulerAngles.x=org_rotation_x;
	newCard.transform.localEulerAngles.y=org_rotation_y;
	newCard.transform.localEulerAngles.z=org_rotation_z;
	
	tmp_karten=newCard.Find("Card_Front").GetComponent(Card_Manager);
	tmp_karten.karten_id=Karten_ID;
	UpdateHand();
}


function UpdateHand() {
	if (Start_Position!=0) {
		count_karten=0;
		for (var child : Transform in transform) {
			count_karten++;
		}
		// Für alle Handkarten
		var x_start=Start_Position; //4.3
		var x_ende=x_start+(17*Seite); //-4.3
		var g_diff:float;
		var e_diff:float;
		var tmp_x_pos:float;
		g_diff=x_start-x_ende;
		e_diff=g_diff/count_karten;
		e_diff=e_diff*Seite;
		handkarte=0;
		for (var child : Transform in transform) {
			tmp_x_pos=x_start-(e_diff*handkarte);
			child.transform.position=Vector3(tmp_x_pos,child.transform.position.y,child.transform.position.z);
			handkarte++;
		}
	}
}