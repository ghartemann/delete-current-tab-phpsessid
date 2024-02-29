const button = document.getElementById('button');
const ok = document.getElementById('ok');

button.onclick = deleteCookies;
ok.style.display = 'none';

function deleteCookies() {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        const promise = chrome.cookies.getAll({name: 'PHPSESSID'}, function(cookies) {
            for (let cookie of cookies) {
                chrome.cookies.remove({"url": tabs[0].url;, "name": cookie.name});
            }
        });

        Promise.resolve(promise).then(() => {
            ok.style.display = 'block';
        });
    });
}