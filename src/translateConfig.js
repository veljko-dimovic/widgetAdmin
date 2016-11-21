import translateConfigFile from './app/l10n/widgetAdmin.en.json'

export default translateConfig;

 function translateConfig ($translateProvider) {
   $translateProvider.translations('en', translateConfigFile);

   $translateProvider.preferredLanguage('en');
 };
