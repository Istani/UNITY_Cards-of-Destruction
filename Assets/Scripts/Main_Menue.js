#pragma strict

function OnGUI () {
	var faktor_hohe=10;
	var faktor_abstand=0;
	var faktor_start=faktor_hohe/2-1;
	if (GUI.Button(UnityEngine.	Rect(Screen.width/3,Screen.height/faktor_hohe*faktor_start+faktor_abstand,Screen.width/3,Screen.height/faktor_hohe),"START")) {
		
	}
	faktor_start=faktor_start+1;
	faktor_abstand=faktor_abstand+(Screen.height/faktor_hohe/2);
	if (GUI.Button(Rect(Screen.width/3,Screen.height/faktor_hohe*faktor_start+faktor_abstand,Screen.width/3,Screen.height/faktor_hohe),"SERVER")) {
		
	}
	faktor_start=faktor_start+1;
	faktor_abstand=faktor_abstand+(Screen.height/faktor_hohe/2);
	faktor_start=faktor_start+1;
	faktor_abstand=faktor_abstand+(Screen.height/faktor_hohe/2);
	if (GUI.Button(Rect(Screen.width/3,Screen.height/faktor_hohe*faktor_start+faktor_abstand,Screen.width/3,Screen.height/faktor_hohe),"EXIT")) {
		Application.Quit();
	}
}
