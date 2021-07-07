
export const PUBLIC_ROUTES = [
  { route: '/info', methods: ['GET'] },
  { route: '/product', methods: ['GET'] }
];

export const PRIVATE_ROUTES = [
  { route: '/product', method: ['POST', 'PATCH', 'DELETE'] },
];
