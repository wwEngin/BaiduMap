var items = [];
$("#get").on('click',function () {
	$.ajax({
	    url: "http://192.168.31.176:8080/depts?page_index=0&page_size=20",
	    type: "get",
	    dataType:"json",
	    success:function(response) {
	    	items = response;
			alert('请求成功')
	    },
	    error:function() {
	        alert("请求失败！");
	    }                    
	}); 
})
$("#save").on("click",function () {
	for (var i=0;i<items.length;i++) {
		console.log(items[i].dept_address)
		console.log(items[i].dept_id)
		console.log('经度:' + items[i].dept_longitude)
		console.log('纬度:' + items[i].dept_latitude)
		/*
		$.ajax({
		    url: "http://192.168.31.176:8080/depts/"+items[i].dept_id+"?lng="+,
		    type: "put",
		    dataType:"json",
		    success:function(response) {
		    	items = response;
				alert('请求成功')
		    },
		    error:function() {
		        alert("请求失败！");
		    }                    
		});
		*/
	}
	
	$.ajax({
		    url: "http://192.168.31.176:8080/depts/1?lng=120308277&lat=31926501",
		    type: "put",
		    dataType:"json",
		    success:function(response) {
//		    	items = response;
//				alert('请求成功')
				console.log(response);
		    },
		    error:function() {
		        alert("请求失败！");
		    }                    
		}); 
})