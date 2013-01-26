using UnityEngine;
using System.Collections;

public class CameraMotion : MonoBehaviour {

	// Use this for initialization
	
	public GameObject cubaA = null;
	public GameObject cubaB = null;
	public GameObject cubaC = null;
	
	public float fieldFactor = 34.0f;
	public float MAX_FIELD = 60f;
	public float MIN_FIELD = 15f;
	float targetField = 0;
	
	void Start () 
	{
		
	}
	
	// Update is called once per frame
	void Update () 
	{
		Vector3 middle = (cubaA.transform.position + cubaB.transform.position + cubaC.transform.position) / 3;
		
		float dist = 0;
		
		dist = Mathf.Max(dist, Vector3.Distance(cubaA.transform.position, middle));
		dist = Mathf.Max(dist, Vector3.Distance(cubaB.transform.position, middle));
		dist = Mathf.Max(dist, Vector3.Distance(cubaC.transform.position, middle));
				
		camera.transform.LookAt (middle);
		targetField = dist*fieldFactor;
		if (targetField>MAX_FIELD) targetField = MAX_FIELD;
		if (targetField<MIN_FIELD) targetField = MIN_FIELD;
		camera.fieldOfView -= (camera.fieldOfView-targetField)/2;
	}
}
