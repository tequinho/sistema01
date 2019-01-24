$(function(){
    $(".carousel").carousel({
        interval:1000
    }); 
});

var nomeCanal = 'ibcbarra';
var upload_id;
$(document).ready(function(){

	$.get("https://www.googleapis.com/youtube/v3/channels",{
		part: 'contentDetails',
		forUsername: nomeCanal,
		key: 'AIzaSyBLwwJMvpbbX0A4byY3t-IstfLMwF-uiaA'},
	function(data){
		upload_id = data.items[0].contentDetails.relatedPlaylists.uploads;
		pegarVideos(upload_id);
	}
	)
	function pegarVideos(id){
		  $.get("https://www.googleapis.com/youtube/v3/playlistItems",{
			  part:'snippet',
			  maxResults: 6,
			  playlistId: id,
			  key: 'AIzaSyBLwwJMvpbbX0A4byY3t-IstfLMwF-uiaA'},
			function(data) {
			  var imagem;
			  var arquivo;
			  $.each(data.items, function(i, item){
				  imagem = item.snippet.thumbnails.medium.url;
				  titulo = item.snippet.title;
				  videoId= item.snippet.resourceId.videoId;
				  publicado= formatarData(item.snippet.publishedAt);
				  arquivo = '<li class="principal"><a data-fancybox href="https://www.youtube.com/watch?v=' + videoId + '><div class="foto"><img  src="' + imagem + '"/><div class="legenda" ><h5>' + titulo +'</p></div></div></a></li>'; 
				  $('div#janela ul').append(arquivo);
			  });
		  	}
		  )
	}
	function formatarData(data){
		return data.substr(8,2) + '/' + data.substr(5,2) + '/' + data.substr(0,4);
	}
});