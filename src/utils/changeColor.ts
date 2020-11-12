async function changeColor(color: string) {
  return (window as any).less.modifyVars({
    '@primary-color': color,
  });
}

export default changeColor;
