$(document).ready(function(){

	search();

	function search(){
		$('#search-box').submit(function(event){
			event.preventDefault();
			var searchTerm = $("#query").val();
			$("#search-box")[0].reset();
			getRequest(searchTerm);
		});
	}

	function getRequest(searchTerm) {
	    $.ajax({
	    	type: "GET",
	        url: "https://www.googleapis.com/youtube/v3/search",
	        data: 	{part: 'snippet',
			        key: 'AIzaSyAd7Ze8H0WfcSFX5YfY-DKoUz63_JIXgi4',
			        q: searchTerm
	    			},
	        success:function(data){
	        	console.log(data.items)
	        	showResults(data.items)
	        }	    	
	    })
	}

	function showResults(results){
	
		$.each(results, function(i, data){
			var videoID = data.id.videoId;
			var thumbnail = data.snippet.thumbnails.medium.url;
			$('.search-results').append("<a href='https://www.youtube.com/watch?v=" + videoID + "'><img src='" + thumbnail + "'><a/><br>");
			console.log(videoID);
			console.log(thumbnail);
		});

	}


/*
$(function(){
  $('#search-form').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});

function getRequest(searchTerm){
  $.getJSON('http://www.omdbapi.com/?s=' + searchTerm + '&r=json', function(data){
    showResults(data.Search);
  });
}

function showResults(results){
  var html = "";
  $.each(results, function(index,value){
    html += '<p>' + value.Title + '</p>';
    console.log(value.Title);
  });
  $('#search-results').html(html);
}
*/
});