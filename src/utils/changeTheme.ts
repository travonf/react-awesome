import loadScript from './loadScript';

const lessUrl = 'https://gw.alipayobjects.com/os/lib/less/3.10.3/dist/less.js';

async function changeTheme(
  // this: { lessLoaded: boolean },
  lessLoaded: boolean = false,
  theme: { [key: string]: any },
) {
  if (!lessLoaded) {
    window.less = {
      async: true,
      javascriptEnabled: true,
    };
    await loadScript(lessUrl);
    lessLoaded = true;
  }

  await window.less.modifyVars(theme);

  return 'change theme success';
}

export default changeTheme;
