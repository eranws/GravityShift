#pragma strict

var jumpFactor = 20.0f;
var moveFactor = 20.0f;

var player = 0;


var jump = KeyCode.S;
var forward = KeyCode.W;
var left = KeyCode.A;
var back = KeyCode.X;
var right = KeyCode.D;

function Awake()
{
if (player == 0)
{
 jump = KeyCode.S;
 forward = KeyCode.W;
 left = KeyCode.A;
 back = KeyCode.X;
 right = KeyCode.D;
}
else if (player == 1)
{
 jump = KeyCode.G;
 forward = KeyCode.T;
 left = KeyCode.F;
 back = KeyCode.B;
 right = KeyCode.H;
}
else if (player == 2)
{
 jump = KeyCode.K;
 forward = KeyCode.I;
 left = KeyCode.J;
 back = KeyCode.M;
 right = KeyCode.L;
}


}

function Update () {


  var x1 : Vector3 = Camera.main.ViewportToWorldPoint (Vector3 (0,0, Camera.main.nearClipPlane));
  var x2 : Vector3 = Camera.main.ViewportToWorldPoint (Vector3 (1,0, Camera.main.nearClipPlane));
  
  var x = (x2 - x1).normalized;
  
  var y1 : Vector3 = Camera.main.ViewportToWorldPoint (Vector3 (0,0, Camera.main.nearClipPlane));
  var y2 : Vector3 = Camera.main.ViewportToWorldPoint (Vector3 (0,1, Camera.main.nearClipPlane));
  
  var y = (y2 - y1).normalized;
  
  
   if (transform.position.y < -4)
   {
   
 if (Input.GetKeyDown (jump))
 {
  rigidbody.AddForce(jumpFactor * Vector3.up, ForceMode.Impulse);
 }
 
 if (Input.GetKeyDown (left))
 {
  rigidbody.AddForce(moveFactor * (-x), ForceMode.Impulse);
 }

 if (Input.GetKeyDown (right))
 {
  rigidbody.AddForce(moveFactor * x, ForceMode.Impulse);
 }

 if (Input.GetKeyDown (back))
 {
  rigidbody.AddForce(moveFactor * (-y), ForceMode.Impulse);
 }

 if (Input.GetKeyDown (forward))
 {
  rigidbody.AddForce(moveFactor * y, ForceMode.Impulse);
 }
 
  }
 
}
