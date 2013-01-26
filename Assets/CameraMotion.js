
var	cubaA : GameObject;
var	cubaB : GameObject;
var	cubaC : GameObject;
	
var	fieldFactor = 34.0f;
var	MAX_FIELD = 60f;
var	MIN_FIELD = 15f;
var	targetField = 0f;
	
	function Update () 
	{
		var middle = (cubaA.transform.position + cubaB.transform.position + cubaC.transform.position) / 3;
		
		var dist = 0f;
		
		dist = Mathf.Max(dist, Vector3.Distance(cubaA.transform.position, middle));
		dist = Mathf.Max(dist, Vector3.Distance(cubaB.transform.position, middle));
		dist = Mathf.Max(dist, Vector3.Distance(cubaC.transform.position, middle));
				
		camera.transform.LookAt (middle);
		targetField = dist*fieldFactor;
		if (targetField>MAX_FIELD) targetField = MAX_FIELD;
		if (targetField<MIN_FIELD) targetField = MIN_FIELD;
		camera.fieldOfView -= (camera.fieldOfView-targetField)/2;
	}

