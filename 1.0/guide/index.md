## 综述

confirm是。

* 版本：1.0
* 作者：栋寒
* 标签：
* demo：[http://gallery.kissyui.com/confirm/1.0/demo/index.html](http://gallery.kissyui.com/confirm/1.0/demo/index.html)

## 初始化组件

	KISSY.use('gallery/confirm/1.0/index', function (S, Confirm) {    
		var $ = S.all;
		new Confirm({
			tip : '确认要这样做吗',
			onConfirm : function () {
				alert('我确认');
			},
			onCancel : function () {
				alert('我放弃');
			}
		});
	});
    
## API说明

### 参数配置

* tip : 弹出框中提示内容，可包含html代码，css自定义
* onConfirm : 确认后执行的回调，可缺省
* onCancel : 取消后执行的回调，可缺省
* type : 弹窗类型，confirm | alert ，默认confirm
