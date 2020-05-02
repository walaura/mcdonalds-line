import './index.css';
let last = Math.floor(Math.random() * 100);

let [$preparing, $collect] = ['.preparing x-n', '.collect x-n'].map((_) =>
	document.querySelector(_)
);

const hexCode = () => {
	return (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 5);
};

const trueSometimes = () => {
	return Math.random() < 0.2;
};

const makeOrder = () => {
	let isHexOrder = trueSometimes();
	let $el = document.createElement('x-order');
	if (isHexOrder) {
		$el.innerText = hexCode();
		return $el;
	}
	last = isNaN(last) ? Math.floor(Math.random() * 100) : last + 1;
	let order = last % 1000;
	$el.innerText = String(order).padStart(3, '0');
	return $el;
};

const popOrder = () => {
	if (Math.random() < 0.33) {
		return;
	}
	let childree = $preparing.children;
	if (childree.length < 1) {
		return;
	}
	let $childe = childree[Math.floor(Math.random() * childree.length) % 5];
	$collect.prepend($childe);
};

const reapOrder = () => {
	if (Math.random() < 0.66) {
		return;
	}
	let childree = $collect.children;
	if (childree.length < 1) {
		return;
	}
	let $childe = childree[Math.floor(Math.random() * childree.length) % 5];
	$childe.remove();
};

const speed = 10;

const popOrderLoop = () => {
	popOrder();
	let nextOne = (750 + Math.random() * 300) * speed;
	setTimeout(popOrderLoop, nextOne);
};

const pushOrderLoop = () => {
	$preparing.prepend(makeOrder());
	let nextOne = (500 + Math.random() * 1000) * speed;
	setTimeout(pushOrderLoop, nextOne);
};

const reapOrderLoop = () => {
	reapOrder();
	let nextOne = (500 + Math.random() * 200) * speed;
	setTimeout(reapOrderLoop, nextOne);
};

popOrderLoop();
pushOrderLoop();
reapOrderLoop();

let delta = window.innerWidth / 2000;

document.querySelector('.bg').style.transform = `scale(${delta})`;

window.onYouTubeIframeAPIReady = () => {
	new YT.Player('music', {
		videoId: 'kGKkUN50R0c', // YouTube Video ID
		width: 560, // Player width (in px)
		height: 316, // Player height (in px)
		playerVars: {
			autoplay: 1, // Auto-play the video on load
			controls: 1, // Show pause/play buttons in player
			showinfo: 0, // Hide the video title
			modestbranding: 1, // Hide the Youtube Logo
			loop: 1, // Run the video in a loop
			fs: 0, // Hide the full screen button
			cc_load_policy: 0, // Hide closed captions
			iv_load_policy: 3, // Hide the Video Annotations
			autohide: 0, // Hide video controls when playing
		},
		events: {
			onReady: function (e) {
				e.target.setVolume(30);
			},
		},
	});
	new YT.Player('ambiance', {
		videoId: 'xY0GEpbWreY', // YouTube Video ID
		width: 560, // Player width (in px)
		height: 316, // Player height (in px)
		playerVars: {
			autoplay: 1, // Auto-play the video on load
			controls: 1, // Show pause/play buttons in player
			showinfo: 0, // Hide the video title
			modestbranding: 1, // Hide the Youtube Logo
			loop: 1, // Run the video in a loop
			fs: 0, // Hide the full screen button
			cc_load_policy: 0, // Hide closed captions
			iv_load_policy: 3, // Hide the Video Annotations
			autohide: 0, // Hide video controls when playing
		},
		events: {
			onReady: function (e) {},
		},
	});
};
