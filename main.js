let urls = ['92511547', '87768382', '87275560', '87771926', '28132358', '91283844'];
for(let i = 0; i<urls.length; i++) {
	if(window.location.href.includes(urls[i])) {
		let node = document.getElementsByClassName('flag-lgtb')[0].parentElement;
		node.style.display = 'none';
	}
}
