// // Documentation: https://www.metaweather.com/api/
// // New York woeid: 2459115


// var fetchingCityWOEID = function(cityString){
// 	// WOEID is the WHERE ON EARTH IDENTIFIER
// 	// https://en.wikipedia.org/wiki/WOEID

// 	var weather = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR`,
// 			query = `https://cors-anywhere.herokuapp.com/${weather}`;

// 	fetch(query)
// 	.then(function(results){
// 		console.log("Request for " + USD, results); // log unprocessed results
		
// 		return results.json();
// 	})
// 	.then(function(jsonResults){
// 		console.log(jsonResults) // log converted json results

// 		var woeid = jsonResults[0].woeid; // get the woeid
// 		var city = jsonResults[0].title;
// 		console.log("WOEID:", woeid)

// 		// use woeid to get the weather information associated with your city
// 		// fetchingWeatherCORS(woeid);

// 	})
// }


// var fetchingWeatherCORS = function(woeid){
// 	// example uses "cors-anywhere" hack, which allows us to circumvent cors permissions

// 	var weather = `https://www.metaweather.com/api/location/${woeid}`,
// 			query = `https://cors-anywhere.herokuapp.com/${weather}`;

// 	fetch(query)
// 	.then(function(results){
// 		console.log("Request for " + woeid, results); // log unprocessed results
		
// 		return results.json();
// 	})
// 	.then(function(jsonResults){
// 		console.log(jsonResults) // log converted json results


// 	})

// }



// document.addEventListener('DOMContentLoaded', function(event) {
// 	// once the document has loaded: 
// 	fetchingCityWOEID("New York");
// })







var fetchcrypto = function(){
	
	var query = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,BCH,ETH,BSV,LTC,REP,ETC,EOS,LINK,DASH&tsyms=USD";
	var apikey = "6c05b46a0fb1190a29c2793ce0f5b97a99b1c663c69dbf62ed5436831a009a35";
	query = query + "&api_key=" + apikey;

	fetch(query)
	.then(function(results){
		// console.log("results ", results); // log unprocessed results
		
		return results.json();
	})
	.then(function(jsonResults){
		console.log(jsonResults)

		var btcPrice = jsonResults.RAW.BTC.USD.PRICE;
		var btcChange = jsonResults.RAW.BCH.USD.CHANGEPCT24HOUR;

		var bchPrice = jsonResults.RAW.BCH.USD.PRICE;
		var bchPrice10 = bchPrice * 10;
		var bchChange = jsonResults.RAW.BCH.USD.CHANGEPCT24HOUR;

		var ethPrice = jsonResults.RAW.ETH.USD.PRICE;
		var ethPrice10 = ethPrice * 10;
		var ethChange = jsonResults.RAW.ETH.USD.CHANGEPCT24HOUR;

		var bsvPrice = jsonResults.RAW.BSV.USD.PRICE;
		var bsvPrice10 = bsvPrice * 10;
		var bsvChange = jsonResults.RAW.BSV.USD.CHANGEPCT24HOUR;		

		var ltcPrice = jsonResults.RAW.LTC.USD.PRICE;
		var ltcPrice10 = ltcPrice * 10;
		var ltcChange = jsonResults.RAW.LTC.USD.CHANGEPCT24HOUR;

		var repPrice = jsonResults.RAW.REP.USD.PRICE;
		var repPrice10 = repPrice * 10;
		var repChange = jsonResults.RAW.REP.USD.CHANGEPCT24HOUR;

		var etcPrice = jsonResults.RAW.ETC.USD.PRICE;
		var etcPrice10 = etcPrice * 10;
		var etcChange = jsonResults.RAW.ETC.USD.CHANGEPCT24HOUR;

		var eosPrice = jsonResults.RAW.EOS.USD.PRICE;
		var eosPrice10 = eosPrice * 10;
		var eosChange = jsonResults.RAW.EOS.USD.CHANGEPCT24HOUR;

		var linkPrice = jsonResults.RAW.LINK.USD.PRICE;
		var linkPrice10 = linkPrice * 10;
		var linkChange = jsonResults.RAW.LINK.USD.CHANGEPCT24HOUR;

		var dashPrice = jsonResults.RAW.DASH.USD.PRICE;
		var dashPrice10 = dashPrice * 10;
		var dashChange = jsonResults.RAW.DASH.USD.CHANGEPCT24HOUR;


		var btcDirection = 360;
		if(btcChange < 0){ btcDirection = -360 };
		var btcSpeed = Math.abs(btcChange);

		var bchDirection = 360;
		if(bchChange < 0){ bchDirection = -360 };
		var bchSpeed = Math.abs(bchChange);

		var ethDirection = 360;
		if(ethChange < 0){ ethDirection = -360 };
		var ethSpeed = Math.abs(ethChange);

		var bsvDirection = 360;
		if(bsvChange < 0){ bsvDirection = -360 };
		var bsvSpeed = Math.abs(bsvChange);

		var ltcDirection = 360;
		if(ltcChange < 0){ ltcDirection = -360 };
		var ltcSpeed = Math.abs(ltcChange);

		var repDirection = 360;
		if(repChange < 0){ repDirection = -360 };
		var repSpeed = Math.abs(repChange);

		var etcDirection = 360;
		if(etcChange < 0){ etcDirection = -360 };
		var etcSpeed = Math.abs(etcChange);

		var eosDirection = 360;
		if(eosChange < 0){ eosDirection = -360 };
		var eosSpeed = Math.abs(eosChange);

		var linkDirection = 360;
		if(linkChange < 0){ linkDirection = -360 };
		var linkSpeed = Math.abs(linkChange);		

		var dashDirection = 360;
		if(dashChange < 0){ bchDirection = -360 };
		var dashSpeed = Math.abs(dashChange);




		TweenMax.to("#crypto_BTC", btcSpeed, {rotation: `${btcDirection}`, repeat:-1, ease: Power0.easeNone,})
		TweenMax.to("#crypto_BTC", 4, {height:`${btcPrice}px`, ease: Elastic.easeOut.config(1, 0.3),})
		TweenMax.to("#crypto_BTC_circle", 4, {height:`${btcPrice}px`,width:`${btcPrice}px`, ease: Elastic.easeOut.config(1, 0.3),})

		TweenMax.to("#crypto_BCH", bchSpeed, {rotation: `${bchDirection}`, repeat:-1, ease: Power0.easeNone})
		TweenMax.to("#crypto_BCH", 4, {height:`${bchPrice10}px`, ease: Elastic.easeOut.config(1, 0.3),})
		TweenMax.to("#crypto_BTC_circle", 4, {height:`${bchPrice10}px`,width:`${bchPrice10}px`, ease: Elastic.easeOut.config(1, 0.3),})

		TweenMax.to("#crypto_ETH", 3, {rotation: `${ethDirection}`, repeat:-1, ease: Power0.easeNone})
		TweenMax.to("#crypto_ETH", 4, {height:`${ethPrice10}px`, ease: Elastic.easeOut.config(1, 0.3),})
		TweenMax.to("#crypto_ETH_circle", 4, {height:`${ethPrice10}px`,width:`${ethPrice10}px`, ease: Elastic.easeOut.config(1, 0.3),})

		TweenMax.to("#crypto_BSV", 4, {rotation: `${bsvDirection}`, repeat:-1, ease: Power0.easeNone})
		TweenMax.to("#crypto_BSV", 4, {height:`${bsvPrice10}px`, ease: Elastic.easeOut.config(1, 0.3),})
		TweenMax.to("#crypto_BSV_circle", 4, {height:`${bsvPrice10}px`,width:`${bsvPrice10}px`, ease: Elastic.easeOut.config(1, 0.3),})

		TweenMax.to("#crypto_LTC", 5, {rotation: `${ltcDirection}`, repeat:-1, ease: Power0.easeNone})
		TweenMax.to("#crypto_LTC", 4, {height:`${ltcPrice10}px`, ease: Elastic.easeOut.config(1, 0.3),})
		TweenMax.to("#crypto_LTC_circle", 4, {height:`${ltcPrice10}px`,width:`${ltcPrice10}px`, ease: Elastic.easeOut.config(1, 0.3),})

		TweenMax.to("#crypto_REP", 6, {rotation: `${repDirection}`, repeat:-1, ease: Power0.easeNone})
		TweenMax.to("#crypto_REP", 4, {height:`${repPrice10}px`, ease: Elastic.easeOut.config(1, 0.3),})
		TweenMax.to("#crypto_REP_circle", 4, {height:`${repPrice10}px`,width:`${repPrice10}px`, ease: Elastic.easeOut.config(1, 0.3),})

		TweenMax.to("#crypto_ETC", 7, {rotation: `${etcDirection}`, repeat:-1, ease: Power0.easeNone})
		TweenMax.to("#crypto_ETC", 4, {height:`${etcPrice10}px`, ease: Elastic.easeOut.config(1, 0.3),})
		TweenMax.to("#crypto_ETC_circle", 4, {height:`${etcPrice10}px`,width:`${etcPrice10}px`, ease: Elastic.easeOut.config(1, 0.3),})

		TweenMax.to("#crypto_EOS", 8, {rotation: `${eosDirection}`, repeat:-1, ease: Power0.easeNone})
		TweenMax.to("#crypto_EOS", 4, {height:`${eosPrice10}px`, ease: Elastic.easeOut.config(1, 0.3),})
		TweenMax.to("#crypto_EOS_circle", 4, {height:`${eosPrice10}px`,width:`${eosPrice10}px`, ease: Elastic.easeOut.config(1, 0.3),})

		TweenMax.to("#crypto_LINK", 9, {rotation: `${linkDirection}`, repeat:-1, ease: Power0.easeNone})
		TweenMax.to("#crypto_LINK", 4, {height:`${linkPrice10}x`, ease: Elastic.easeOut.config(1, 0.3),})
		TweenMax.to("#crypto_LINK_circle", 4, {height:`${linkPrice10}px`,width:`${linkPrice10}px`, ease: Elastic.easeOut.config(1, 0.3),})

		TweenMax.to("#crypto_DASH", 10, {rotation: `${dashDirection}`, repeat:-1,ease: Power0.easeNone})
		TweenMax.to("#crypto_DASH", 4, {height:`${dashPrice10}px`, ease: Elastic.easeOut.config(1, 0.3),})
		TweenMax.to("#crypto_DASH_circle", 4, {height:`${dashPrice10}px`,width:`${dashPrice10}px`, ease: Elastic.easeOut.config(1, 0.3),})


	})


}


document.addEventListener('DOMContentLoaded', function(event) {
	// once the document has loaded: 
	// fetchingCityWOEID("New York");

	fetchcrypto()



})





