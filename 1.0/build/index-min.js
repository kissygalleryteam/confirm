/*!build time : 2013-11-28 3:38:04 PM*/
KISSY.add("gallery/confirm/1.0/index",function(a,b,c){"use strict";function d(a){var b=this;d.superclass.constructor.call(b,a),b.init(a)}var e=b.all;return a.extend(d,c,{init:function(){this.buildDom().bindEvent()},getDomStr:function(){var a=this,b=a.get("type"),c=a.get("tip"),d=a.get("wrap").replace(".",""),e=['<div class="ks-w-confirm '+d+'" style="visibility: hidden;">','<div class="mask"></div>','<div class="box">','<div class="content">'+c+"</div>",'<div class="action">'+("confirm"===b?' <em class="cancel">'+a.get("cancelText")+"</em>":"")+'<em class="confirm">'+a.get("confirmText")+"</em></div>","</div>","</div>"];return e.join("")},buildDom:function(){var a=this.getDomStr(),b=this.confirmBox=e(a);return e("body").append(b),this.maskZoom().calcPos(),this},calcPos:function(){var a=this.confirmBox.one(".box"),b=a.height(),c=document.body.scrollTop,d=window.innerHeight;return a.css("margin-top",c+(d-b)/2+"px"),this.confirmBox.css("visibility","visible"),this},maskZoom:function(){var a=window.innerHeight,b=document.body.offsetHeight,c=this.confirmBox.one(".mask");return a>=b?c.css("height",a+"px"):c.css("height",b+"px"),this},bindEvent:function(){var a=this,b=this.confirmBox;b.delegate("click",".cancel",function(){a.get("onCancel")(),a.fire("cancel"),a.destroy()}).delegate("click",".confirm",function(){a.get("onConfirm")(),a.fire("confirm"),a.destroy()}).delegate("touchstart","em",function(a){e(a.currentTarget).addClass("press")}).delegate("touchend","em",function(a){e(a.currentTarget).removeClass("press")})},destroy:function(){var a=this;a.confirmBox.remove(),a=null}},{ATTRS:{wrap:{value:"#ks-w-confirm"},type:{value:"confirm"},tip:{value:"\u5f39\u7a97"},onConfirm:{value:function(){}},onCancel:{value:function(){}},confirmText:{value:"\u786e\u5b9a"},cancelText:{value:"\u53d6\u6d88"}}}),d},{requires:["node","base"]});