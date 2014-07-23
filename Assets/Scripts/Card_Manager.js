#pragma strict

// Jede Menge Vars!
public class KartenStruct extends System.ValueType
{
	var kosten_farblos:int;
    var kosten_weiss:int;
    var kosten_schwarz:int;
    var kosten_rot:int;
    var kosten_blau:int;
    var kosten_gruen:int;

	var bild:Texture;
    var name:String;
    var art:int; // 0=Kämpfer;1=Land;
    var land_farbe:int; //0=farblos; 1=weiss; 2=schwarz; 3=rot; 4=rot; 5=blau; 6=gruen; 7=Mehrfrabig;
    var angriff:int;
    var defens:int;
}
public var karten_id:int;
public var karten_texture:Texture[];
public var karten:KartenStruct[];

public var Karte_Status_Tap:int;
private var Karte_Anzeigen=false;
private var tmp_feld:Feld_Manager;
private var deck:Deck_Manager;

function OnMouseUp() {
	if (karten_id>=0) {
		tmp_feld=transform.parent.transform.parent.GetComponent(Feld_Manager);
		if (tmp_feld.Feld_Art==0) {
			deck.KarteZiehen();
		} else {
			Karte_Anzeigen=true;
		}
	}
}


function OnGUI() {
	if (Karte_Anzeigen) {
		GUI.Box(Rect(0,0,Screen.width, Screen.height),karten[karten_id].name);
		GUI.DrawTexture(Rect(0,30,Screen.width/2,Screen.height/4*3),karten[karten_id].bild);
		if (GUI.Button(Rect(Screen.width/2+20,40,Screen.width/4,20),"Close")) {
			Debug.LogError("Sollte schließen");
			Karte_Anzeigen=false;
			return;
		}
		// Und dann kommt es drauf an was gemacht werden kann
		
	}
}

function Start () {
	// ----------------------------- Länder -----------------------------
	karten=new KartenStruct[karten_texture.length];
	for (var i=0;i<karten_texture.length;i++) {
		karten[i].bild=karten_texture[i];
		// Initialisierung
		karten[i].kosten_farblos=0;
		karten[i].kosten_weiss=0;
		karten[i].kosten_schwarz=0;
		karten[i].kosten_rot=0;
		karten[i].kosten_blau=0;
		karten[i].kosten_gruen=0;
		
		karten[i].land_farbe=0; //0=farblos; 1=weiss; 2=schwarz; 3=rot; 4=rot; 5=blau; 6=gruen; 7=Mehrfrabig;
		karten[i].art=0; // 0=Kämpfer;1=Land;
		karten[i].name="";
		karten[i].angriff=0;
		karten[i].defens=0;
	}
	
	karten[0].name="Sky";
	karten[0].art=1;
	karten[0].land_farbe=1;
	
	karten[1].name="Storm";
	karten[1].art=1;
	karten[1].land_farbe=3;
	
	karten[2].name="Rain";
	karten[2].art=1;
	karten[2].land_farbe=5;
	
	karten[3].name="Lightning";
	karten[3].art=1;
	karten[3].land_farbe=6;
	
	karten[4].name="Cloud";
	karten[4].art=1;
	karten[4].land_farbe=2;
	
	// ----------------------------- Kämpfer -----------------------------
	karten[5].name="No-Good Tsuna";
	karten[5].kosten_farblos=1;
    karten[5].kosten_weiss=1;
    karten[5].angriff=1;
    karten[5].defens=2;
    
    karten[6].name="Home Tutor Hitman";
	karten[6].kosten_farblos=3;
    karten[6].kosten_weiss=2;
    karten[6].angriff=6;
    karten[6].defens=1;
    
    karten[7].name="Disciplinary Committee Leader";
    karten[7].kosten_schwarz=2;
    karten[7].angriff=3;
    karten[7].defens=2;
	
	karten[8].name="Mist Guardian";
	karten[8].angriff=1;
    karten[8].defens=5;
    karten[8].kosten_blau=3;
    
	karten[9].name="Octopus Head";
	karten[9].angriff=2;
    karten[9].defens=3;
    karten[9].kosten_rot=1;
    karten[9].kosten_farblos=2;
    
	karten[10].name="Rain Guardian";
	karten[10].angriff=3;
    karten[10].defens=4;
    karten[10].kosten_blau=1;
    karten[10].kosten_weiss=1;
    
	karten[11].name="Boxing Club Leader";
	karten[11].angriff=5;
    karten[11].defens=3;
    karten[11].kosten_weiss=3;
    
	karten[12].name="Crybaby Lambo";
	karten[12].angriff=1;
    karten[12].defens=1;
    karten[12].kosten_gruen=1;
    
	karten[13].name="Kokuyo Gang Member";
	karten[13].angriff=1;
    karten[13].defens=1;
    karten[13].kosten_blau=1;
    
	karten[14].name="Lal Mirch";
	karten[14].angriff=2;
    karten[14].defens=1;
    karten[14].kosten_blau=1;
    karten[14].kosten_schwarz=1;
    
	karten[15].name="Kyoko Sasagawa";
	karten[15].angriff=1;
    karten[15].defens=1;
    karten[15].kosten_farblos=1;
    
	karten[16].name="Haru Miura";
	karten[16].angriff=1;
    karten[16].defens=1;
    karten[16].kosten_farblos=1;
    
	karten[17].name="Poison Scorpion";
	karten[17].angriff=2;
    karten[17].defens=2;
    karten[17].kosten_farblos=1;
    karten[17].kosten_rot=1;
    
    // ----------------------------- x -----------------------------
    
    
    deck=transform.parent.transform.parent.transform.parent.transform.parent.Find("Reihe_0_Deck").transform.Find("Deck").GetComponent(Deck_Manager);
}

function Update () {
	if (karten_id==-1) {
		renderer.enabled=false;
	} else {
		//transform.parent.active=true;
		renderer.enabled=true;
		renderer.materials[0].mainTexture=karten[karten_id].bild;
	}
}