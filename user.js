// SETTING: Disable warning when opening about:config
user_pref("general.warnOnAboutConfig", false);


// SETTING: Disable User Timing API, which stores high-resolution (milliseconds to microseconds) timestamps
// https://trac.torproject.org/projects/tor/ticket/16336
// https://www.w3.org/TR/2013/REC-user-timing-20131212/#privacy-security
user_pref("dom.enable_user_timing",	false);


// SETTING: Disable DOM Timing API
// https://wiki.mozilla.org/Security/Reviews/Firefox/NavigationTimingAPI
// https://www.w3.org/TR/navigation-timing/#privacy
user_pref("dom.enable_performance", false);


// SETTING: Disable geolocation, i.e. Location-Aware Browsing
// https://www.mozilla.org/en-US/firefox/geolocation/
user_pref("geo.enabled", false);


// SETTING: When set to false, this setting prevents invalid URLs entered into the address bar from being submitted to the default search engine.
// http://kb.mozillazine.org/Keyword.enabled
user_pref("keyword.enabled", true);


// SETTING: Enable Firefox's anti-fingerprinting mode ("resist fingerprinting" or RFP) (Tor Uplift project)
// https://wiki.mozilla.org/Security/Fingerprinting
// NOTE: This spoofs the time zone, the locale, and disables numerous other browser features
// NOTE: This supersedes some other spoofing settings, e.g.:
//		user_pref("general.useragent.override", "Mozilla/5.0 (Windows NT 6.1; rv:60.0) Gecko/20100101 Firefox/60.0";
//		user_pref("general.appname.override",	"Netscape");
//		user_pref("general.appversion.override", "5.0 (Windows)");
//		user_pref("general.platform.override", "Win32");
//		user_pref("general.oscpu.override", "Windows NT 6.1");
user_pref("privacy.resistFingerprinting", true);
