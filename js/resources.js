$(document).ready(function () {
	
/* 	$('#retrieve-resources').click(function () { */
		var displayResources = $('#display-resources');
		
		displayResources.text('Loading data from JSON source...');
		
		$.ajax({
			type: "GET",
			url: "resources.json",
			success: function(result)
			{
				console.log(result);
				var output="<table><thead><tr><th>#</th><th>Name</th><th>Transliteration</th><th>English Meaning</th><th>Tamil Meaning</th></tr></thead><tbody>";
				for (var i in result)
				{
					output+='<tr class="jsearch-row"><td>' + result[i].No + '</td><td><span class="arabname">' + result[i].Name + '</span></td><td class="jsearch-field">' + result[i].Transliteration + '</td><td  class="jsearch-field">' + result[i].EnglishMeaning + '</td><td><span class="tamilname">' + result[i].TamilMeaning + '</span></td></tr>';
				}
				output+="</tbody></table>";
				
				displayResources.html(output);
				$("table").addClass("table");
			}
		});
		
	});
/* }); */





