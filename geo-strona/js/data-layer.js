var dataLayer = [{
  'gtm.blacklist': ['customPixels', 'customScripts', 'nonGooglePixels', 'nonGoogleScripts'],
  'region': document.currentScript.dataset.region,
  'pageType': document.currentScript.dataset.pageType,
  'signedIn': localStorage.getItem('GFIBER_IS_LOGGED_IN_USER'),
  'internalUser': localStorage.getItem('GFIBER_IS_INTERNAL_USER')
}];
dataLayer.setProperty = function(obj, key, value) {
  obj[key] = value;
};
