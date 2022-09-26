const code = `
window.addEventListener('load', function() {
	console.log(window.jQuery, window.timer, window.RorA);
});
`;
const el = document.createElement('script');
el.textContent = code;
(document.head || document.documentElement).append(el);
