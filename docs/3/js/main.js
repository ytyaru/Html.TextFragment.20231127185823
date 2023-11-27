window.addEventListener('DOMContentLoaded', async(event) => {
    console.log('DOMContentLoaded!!');
    function makeTextfragmentUrl() {
        const result = generateFragment(window.getSelection());
        if (0 !== result.status === 0) { console.warn('テキストフラグメントが使用できません。') }
        let url = `${location.origin}${location.pathname}${location.search}`;
        const fragment = result.fragment;
        console.log(fragment)
        const prefix = fragment.prefix ? `${encodeURIComponent(fragment.prefix)}-,` : '';
        const suffix = fragment.suffix ? `,-${encodeURIComponent(fragment.suffix)}` : '';
        const start = encodeURIComponent(fragment.textStart);
        const end = fragment.textEnd ? `,${encodeURIComponent(fragment.textEnd)}` : '';
        url += `#:~:text=${prefix}${start}${end}${suffix}`;
        return url
    }
    for (let button of document.querySelectorAll('button.make')) {
        button.addEventListener("click", async(e) => {
    //    document.addEventListener("selectionchange", async(e) => {
    //    document.addEventListener("selectstart", async(e) => {
            console.log('select !!')
            const url = makeTextfragmentUrl()
            document.querySelector('#result-text').textContent = window.getSelection().toString()
            document.querySelector('#result-url').textContent = url
            document.querySelector('#result-link').href = url
            document.querySelector('#result-link').title = window.getSelection().toString()
            document.querySelector('#result-link').textContent = '🔗'
        });
    }
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

