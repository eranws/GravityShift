#pragma strict


var target = Vector3.zero;//Quaternion.identity;
var degLeft = 0f;
var smooth = 400.0;

var rotationDeltaTime = 12; //sec loop length
var lastRotationTime = 0;
var directions = [Vector3.forward, Vector3.back, Vector3.left, Vector3.right];
var zero : int = 0;
var length :int = 3;

function Update (){

if (Time.timeSinceLevelLoad > lastRotationTime + rotationDeltaTime) {
lastRotationTime += rotationDeltaTime;

var rand : int = Random.Range(zero, length);
Debug.Log(rand);
target = directions[rand];
degLeft = 90;
}
	if (degLeft > 0f)
	{
		var delta = Mathf.Min(degLeft, Time.deltaTime * smooth);
		degLeft -= delta;
		transform.Rotate(target, delta, Space.World);
	}
	else
	{
		degLeft = 0f;
	}
}


// Detects keys pressed and prints their keycode
function OnGUI() {
/*
	var e : Event = Event.current;
	if (e.isKey && e.type == EventType.keyDown) {
		Debug.Log("Detected key code: " + e.keyCode + e.type);

				
		if (e.keyCode == KeyCode.UpArrow){
			target = Vector3.forward;
			degLeft = 90;
		}

}
*/

}