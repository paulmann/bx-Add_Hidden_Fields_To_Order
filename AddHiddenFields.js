<script>
if(window.attachEvent) {
    window.attachEvent('onload', AddRoistat);
} else {
    if(window.onload) {
        var curronload = window.onload;
        var newonload = function(evt) {
            curronload(evt);
            AddRoistat(evt);
        };
        window.onload = newonload;
    } else {
        window.onload = AddRoistat;
    }
}
function AddRoistat(){
    if (typeof roistatID !== 'undefined') {
    let arr = [85,86];
    for(let a of arr) {
	var input = document.createElement("input");
	input.setAttribute("type", "hidden");
	input.setAttribute("name", "ORDER_PROP_"+a);
	input.setAttribute("id", "ORDER_PROP_"+a);
	input.setAttribute("value", roistatID);
	document.getElementById("bx-soa-order-form").appendChild(input);
    }
    }
}
AddRoistat();
</script>
