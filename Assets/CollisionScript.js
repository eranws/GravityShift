#pragma strict

var score = 0;

function cube_opposite(half_cube_size : float, pos : float) {
	return (pos + half_cube_size > half_cube_size) ? (pos - half_cube_size) : (pos + half_cube_size);
}

function OnCollisionEnter(collision : Collision) {
	
	if (collision.collider.CompareTag("Player"))
	{ 
		var diff = collision.collider.transform.position - transform.position;
		if (diff.y > Vector2(diff.x, diff.z).magnitude) 
		{
		
		score--;
		collision.collider.GetComponent(CollisionScript).score++;
		
			Debug.Log("Bang");

			var size = 0.2f;
			var amount = 10;
			var life = 2;

			for (var x = 0; x < amount; x++) 
			{
				var cube = GameObject.CreatePrimitive(PrimitiveType.Cube);
				cube.AddComponent(Rigidbody);
				cube.transform.position = transform.position + new Vector3(Random.Range(-1f,1f), Random.Range(-1f,1f), Random.Range(-1f,1f));
				cube.transform.localScale = new Vector3(size,size,size);
				cube.renderer.material.color = renderer.material.color;
				Destroy(cube,Random.Range(life,life * 2));
			}

						
			transform.position = Vector3(
				cube_opposite(4, transform.position.x),
				cube_opposite(4, transform.position.y),
				cube_opposite(4, transform.position.z));
			
			
			
			
			
			


	        //bang.Play();
	    }
	}

	
    // Play a sound if the coliding objects had a big impact.        
//    if (collision.relativeVelocity.magnitude > 2)
 //       audio.Play();
}



