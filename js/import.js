async function loadHTML(elementId, path) {
    try {
        const element = document.getElementById(elementId);
        if (!element) {
            console.error(`Element with id '${elementId}' not found`);
            return;
        }

        const response = await fetch(path);
        const html = await response.text();
        element.innerHTML = html;
    } catch (error) {
        console.error('HTML 로드 중 에러 발생:', error);
    }
}

// 순차적 로드
async function initLayout() {
    await loadHTML('layout', '/basic/layout.html');
    await loadHTML('header', '/basic/header.html');
    await loadHTML('footer', '/basic/footer.html');
}

document.addEventListener('DOMContentLoaded', initLayout);