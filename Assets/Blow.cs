using UnityEngine;
using System.Collections;

public class Blow : MonoBehaviour 
{
	public float size = 0.2f;
	public int amount = 10;
	public Color colorInput = new Color(0,0,0,1f);
	public GameObject cubeTarget = null;
	public float life = 2;
	
	void Start() 
	{
		BlowAll();
	}
	
	public void BlowAll()
	{
		for (int x = 0; x < amount; x++) 
		{
			GameObject cube = GameObject.CreatePrimitive(PrimitiveType.Cube);
			cube.AddComponent<Rigidbody>();
			cube.transform.position = transform.position;
			cube.transform.localScale = new Vector3(size,size,size);
			cube.renderer.material.color = cubeTarget.renderer.material.color;
			Destroy(cube,Random.Range(life,life * 2));
		}
	}
	
}