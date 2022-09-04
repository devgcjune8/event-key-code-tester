const insertDiv = document.querySelector('.insert');





window.addEventListener('keydown', (k) => {
  insertDiv.innerHTML = `
        <div class="key">
        ${k.key === ' ' ? 'Space' : k.key}
        <small>
            event.key
        </small>
        </div>
        <div class="key">
        ${k.keyCode}
        <small>event.keyCode</small>
        </div>
        <div class="key">
        ${k.code}
        <small>event.code</small>
        </div>`
})