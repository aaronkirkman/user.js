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





// SETTING: Disallow Necko to do A/B testing
// https://trac.torproject.org/projects/tor/ticket/13170
user_pref("network.allow-experiments", false);


// SETTING: Disable sending Firefox crash reports to Mozilla servers
// https://wiki.mozilla.org/Breakpad
// http://kb.mozillazine.org/Breakpad
// https://dxr.mozilla.org/mozilla-central/source/toolkit/crashreporter
// https://bugzilla.mozilla.org/show_bug.cgi?id=411490
// See about:crashes for a list of submitted crash reports
user_pref("breakpad.reportURL", "");


// SETTING: Disable sending reports of tab crashes to Mozilla (about:tabcrashed) and don't nag user about unsent crash reports
// https://hg.mozilla.org/mozilla-central/file/tip/browser/app/profile/firefox.js
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);


// SETTING: Disable FlyWeb (discovery of LAN/proximity IoT devices that expose a Web interface)
// https://wiki.mozilla.org/FlyWeb
// https://wiki.mozilla.org/FlyWeb/Security_scenarios
// http://www.ghacks.net/2016/07/26/firefox-flyweb
user_pref("dom.flyweb.enabled", false);


// SETTING: Disable the UITour backend
// https://trac.torproject.org/projects/tor/ticket/19047#comment:3
user_pref("browser.uitour.enabled", false);


// SETTING: Disable beacon, which sends additional analytics data
// https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon
user_pref("beacon.enabled", false);




/******************************************************************************
 * SECTION: Firefox features and components                         *
 ******************************************************************************/



// SETTING: Enable tracking protection
// NOTE: Now called "content blocking" or "enhanced tracking protection"
// https://support.mozilla.org/en-US/kb/what-happened-tracking-protection
// https://support.mozilla.org/en-US/kb/content-blocking
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.pbmode.enabled", true);


// SETTING: Enable contextual identity Containers
// NOTE: Containers are not available in Private Browsing mode
// https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers
user_pref("privacy.userContext.enabled", true);



// SETTING: Disable telemetry
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("experiments.supported", false);
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");


// SETTING: Disable recommended extensions
// https://support.mozilla.org/en-US/kb/extension-recommendations
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false)


// SETTING: Disable WebIDE
// https://trac.torproject.org/projects/tor/ticket/16222
// https://developer.mozilla.org/docs/Tools/WebIDE
user_pref("devtools.webide.enabled", false);
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.webide.autoinstallFxdtAdapters", false);
user_pref("devtools.webide.autoConnectRuntime", false);
user_pref("devtools.webide.autoinstallADBExtension", false);


// SETTING: Disable remote debugging
// https://developer.mozilla.org/en-US/docs/Tools/Remote_Debugging/Debugging_Firefox_Desktop
// https://developer.mozilla.org/en-US/docs/Archive/Mozilla/Remote_debugging/Firefox_for_Metro
user_pref("devtools.debugger.remote-enabled", false);
user_pref("devtools.chrome.enabled", false);
user_pref("devtools.debugger.force-local", true);
user_pref("devtools.debugger.prompt-connection", true);


// SETTING: Disable Pocket
// https://support.mozilla.org/en-US/kb/save-web-pages-later-pocket-firefox
user_pref("browser.pocket.enabled",	 false);
user_pref("extensions.pocket.enabled", false);





/******************************************************************************
 * SECTION: Automatic connections                                             *
 ******************************************************************************/
// SETTING: Disable network prefetching
// http://kb.mozillazine.org/Network.prefetch-next
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ#Privacy_implications
user_pref("network.prefetch-next", false);
