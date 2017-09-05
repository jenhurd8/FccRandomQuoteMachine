var joke;
var quote;

$(document)
		.ready(
				function() {
					function getNewJoke() {
						author = "";
						$.ajax({
							url : 'https://api.icndb.com/jokes/random',
							data : {
								type : 'success',
								id : 'id',
								value : 'joke'
							},
							success : function(response) {
								joke = response.value.joke;
								$('#author').text('');
								$("#quote").html(joke);
							}
						});
					}

					function getNewQuote() {
						$
								.ajax({
									url : 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en',
									jsonp : 'jsonp',
									dataType : 'jsonp',
									data : {
										quoteAuthor : 'author',
										quoteText : 'quote'
									},
									success : function(response) {
										quote = response.quoteText;
										author = response.quoteAuthor;

										if (author) {
											$('#author').text(' - ' + author);
										} else {
											$('#author').text(' - unknown');
										}
										$("#quote").html(quote);
									}
								});
					}

					getNewJoke();
					getNewQuote();

					$('.get-joke').on('click', function() {
						// document.body.style.background = color;
						//http://res.cloudinary.com/jjenjjenjjen/image/upload/v1504581580/question-mark-background-1909040_1920_fp7agy.png
						$('body').css({'background-image':'url('+ "http://res.cloudinary.com/jjenjjenjjen/image/upload/c_scale,w_1176/v1504581581/cowboy-943445_1920_kwyiuj.jpg"
								 + ')','color':'white'});
						event.preventDefault();// stops page from jumping up/reloading with new joke
						getNewJoke();
					});

					$('.share-joke')
							.on('click',function(event) {
										event.preventDefault();
										window
												.open('https://twitter.com/intent/tweet?text='
														+ encodeURIComponent(joke))
									});

					$('.get-quote').on('click', function() {
						$('body').css({'background-image': 'url('+ "http://res.cloudinary.com/jjenjjenjjen/image/upload/v1504581580/question-mark-background-1909040_1920_fp7agy.png"
 + ')','color':'black'});
						// document.body.style.background = color;
						//http://res.cloudinary.com/jjenjjenjjen/image/upload/v1504581581/cowboy-943445_1920_kwyiuj.jpg
						event.preventDefault();// stops page from jumping up/reloading with new quote
						getNewQuote();
					});

					$('.share-quote')
							.on(
									'click',
									function(event) {
										event.preventDefault();
										window
												.open('https://twitter.com/intent/tweet?text='
														+ encodeURIComponent(quote + ' - ' + author))
									});
				});
