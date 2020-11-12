export async function fetchEditorContent(params = {}) {
  return `
  <h1><span style="color:#777">Hello <strong>World!</strong></span></h1>
  <hr />
  <p>你好<span style="text-emphasis:circle;text-emphasis-position:under;-webkit-text-emphasis:circle;-webkit-text-emphasis-position:under">世界</span>！</p>
  <hr />
  <p>按下 <span data-foo="Hello World!" class="keyboard">Command</span> + <span data-foo="Hello World!" class="keyboard">D</span> 来收藏此页面</p>
  <hr />
  `;
}

export async function saveEditorContent(params = {}) {
  return params;
}
