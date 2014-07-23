#pragma strict

public var speed=100;

function Update () {
	this.gameObject.transform.Rotate(Vector3.up * (Time.deltaTime*speed), Space.World);
}