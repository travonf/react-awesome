import codegen from 'babel-plugin-codegen/macro';

const fn = codegen`
const { IconsManifest } = require('react-icons/lib/cjs');

const codes = []
codes.push("(function (id) { switch (id) {")
codes.concat(IconsManifest.map(icon => 'case "' + icon.id + '": return import("react-icons/' + icon.id + '/index")'))
cdoes.push("}})")

module.exports = codes.join()
`;

function getIcons(iconsId: string) {
  return fn(iconsId);
}

export default getIcons;
