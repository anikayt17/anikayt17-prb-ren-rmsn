let urls = ['92511547', '28132358', '91283844', '87771926', '87275560', '87768382', '93557143', '92602975', '85857697'];
for(let i = 0; i<urls.length; i++) {
	if(window.location.href.includes(urls[i])) {
		let node = document.getElementsByClassName('flag-lgtb')[0].parentElement;
		node.style.display = 'none';
	}
}
