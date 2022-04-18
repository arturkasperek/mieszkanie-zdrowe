// Transfer the bootstrap stuff into the window scope.
window.gf = window.gf || {};
window.registerApiReadyCallback = window.registerApiReadyCallback || undefined;
window.registerGFReadyCallback = window.registerGFReadyCallback || undefined;
window.globalScope = window.globalScope || {};
window.globalScope.gfApi = {
  'gf': gf,
  'registerApiReadyCallback': registerApiReadyCallback,
  'registerGFReadyCallback': registerGFReadyCallback,
};
