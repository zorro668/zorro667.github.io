 Vue.component('layer-up', {
 	props: ['title', 'message'],
 	template: '\
 	    <div class="modal">\
 	        <div class="modal_dialog">\
 	            <div class="modal_content">\
 	                <h3 class="modal_title">{{title}}</h3>\
 	                <div class="pop_text">{{message}}</div>\
 	                <a href="javascript:void(0)" class="modal_close" @click="app.hidePop()">X</a>\
 	            </div>\
 	        </div>\
 	    </div>'
 });

 Vue.component('layer-rank', {
 	props: ['title', 'datafrom'],
 	template: '\
 	    <div class="modal">\
 	        <div class="modal_dialog">\
 	            <div class="modal_content">\
 	               <h3 class="modal_title">{{title.msg}}</h3>\
 	                <table class="rank_list">\
                         	<thead>\
                         		<tr>\
                         			<th>{{title.rank}}</th>\
                         			<th>{{title.achievement}}</th>\
                         			<th>{{title.id}}</th>\
                         		</tr>\
                         	</thead>\
                         	<tbody>\
                         		<tr v-for="(value,index) in datafrom">\
                         			<td>{{value.n}}</td>\
                         			<td>{{value.m | numFilter}} ETH</td>\
                         			<td>{{value.u}}</td>\
                         		</tr>\
                         	</tbody>\
                         </table>\
						<a href="javascript:void(0)" class="modal_close" @click="app.hidePop()">X</a>\
 	            </div>\
 	        </div>\
 	    </div>'
 });

 Vue.filter("numFilter", function(value) {
 	if(isNaN(value)){
 		return "--"
 	}
 	let realVal = parseFloat(value).toFixed(4);
 	return realVal
 });

Vue.filter("formatTimeStamp", function(t, fmt) {
  if (t == 0 || t == null || t == "") {
    return "无";
  } else {
    var date = new Date(t * 1000);
    fmt = fmt || 'yyyy-MM-dd';
    var o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  }
})

var compare = function (obj1, obj2) {
    var val1 = obj1.id;
    var val2 = obj2.id;
    if (val1 < val2) {
        return 1;
    } else if (val1 > val2) {
        return -1;
    } else {
        return 0;
    }            
};