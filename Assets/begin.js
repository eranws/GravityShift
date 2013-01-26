#pragma strict

var spotlight : GameObject;

function Update () {

if (Input.GetKeyDown (KeyCode.Space))
 {
 spotlight.SetActive(true);
 Camera.mainCamera.GetComponent(CameraMotion).enabled = (true);
  Destroy(this.gameObject);
 }
 
 
}