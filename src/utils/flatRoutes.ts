function flatRoutes(routes: any[], result: any[] = []) {
  for (let i = 0; i < routes.length; i++) {
    if (routes[i].path) {
      result.push(routes[i]);
    }

    if (routes[i].routes) {
      flatRoutes(routes[i].routes, result);
    }
  }
  return result;
}

export default flatRoutes;
