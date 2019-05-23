module.exports = function main(x) {
	var len1 = new String("._. ... ._. ._. ... ._. ._. ._. ._. ._.").split(" ");
	var len2 = new String("|.| ..| ._| ._| |_| |_. |_. ..| |_| |_|").split(" ");
	var len3 = new String("|_| ..| |_. ._| ..| ._| |_| ..| |_| ..|").split(" ");
	var len = [len1, len2, len3];
	var result = "";
	var ret = x.split("");
	for(var i = 0; i<3; i++){
		var num = 0;
		var tmp = "";
		for(var j =0; j<x.length; j++){
			num = ret[j].valueOf();
			tmp+=len[i][num]+" ";
		}
		tmp= tmp.substring(0,x.length*4 -1)+"\n";
		result+=tmp;
	}
	return result;
};