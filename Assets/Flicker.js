#pragma strict


var rate = 0.5;
private var nextFire = 0.0;

function Update () {
    if (Time.time > nextFire) {
        nextFire = Time.time + rate;
        
        this.renderer.enabled = !this.renderer.enabled;
    }
}
