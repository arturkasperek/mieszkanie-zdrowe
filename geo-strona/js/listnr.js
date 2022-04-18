(() => {
  const ns = 'listnr';
  const pageViews = +localStorage.getItem(`${ns}.pageViews`) || 1;
  const lastSeen = +localStorage.getItem(`${ns}.lastSeen`) || Date.now();
  const msInMonth = 2592000000;
  const now = new Date();
  const minutes = now.getMinutes();
  if (
    document.documentElement.lang.slice(0, 2) !== 'es' && ( // Skip on 'es' locales,
    pageViews === 2 || pageViews === 4 ||                   // and show initially on 2nd and 4th page view.
    lastSeen + msInMonth < Date.now()) && (                 // After that show once a month
    minutes === 2 || minutes === 32)) {                     // Only if the minute is 2 or 32 of the hour.
    const helpApi = window.help.service.Lazy.create(0, {
      apiKey: 'AIzaSyBViStXofOiMek9rKg48B-2DU-srn_I944',
      locale: 'en'
    });

    helpApi.requestSurvey({
      triggerId: 'qojksAyWm0iYa16RBpb0Qa8imk8N',
      enableTestingMode: document.location.search.indexOf('testSurvey=true') > 0,
      callback: function(requestSurveyCallbackParam) {
        if (!requestSurveyCallbackParam.surveyData) {
          return;
        }
        helpApi.presentSurvey({
          surveyData: requestSurveyCallbackParam.surveyData,
          colorScheme: 1, // light
          customZIndex: 10000,
        });
        localStorage.setItem(`${ns}.lastSeen`, Date.now());
      }
    });
  }
  localStorage.setItem(`${ns}.pageViews`, pageViews + 1);
})();
