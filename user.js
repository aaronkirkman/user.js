// SETTING: Disable warning when opening about:config
user_pref("general.warnOnAboutConfig", false);


/******************************************************************************
 * SECTION: Extensions and plugins                                            *
 ******************************************************************************/
// SETTING: Enable click to play for plugins
// https://wiki.mozilla.org/Firefox/Click_To_Play
// https://blog.mozilla.org/security/2012/10/11/click-to-play-plugins-blocklist-style/
user_pref("plugins.click_to_play", true);


// SETTING: Disable the Flash Player NPAPI plugin
// http://kb.mozillazine.org/Flash_plugin
user_pref("plugin.state.flash", 0);


// SETTING: Disable sending Flash Player crash reports
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);


// SETTING: If Flash Player crash reports are enabled, don't send the URL in the crash report
user_pref("dom.ipc.plugins.reportCrashURL", false);


// SETTING: If Flash is enabled, download and use Mozilla SWF URIs blocklist
// https://bugzilla.mozilla.org/show_bug.cgi?id=1237198
// https://github.com/mozilla-services/shavar-plugin-blocklist
user_pref("browser.safebrowsing.blockedURIs.enabled", true);


// SETTING: Disable Mozilla's Flash renderer, Shumway
// https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Shumway
user_pref("shumway.disabled", true);


// SETTING: Disable Java NPAPI plugin
user_pref("plugin.state.java", 0);

// SETTING: Disable the Gnome Shell Integration NPAPI plugin
user_pref("plugin.state.libgnome-shell-browser-plugin", 0);


// SETTING: Disable User Timing API, which stores high-resolution (milliseconds to microseconds) timestamps
// https://trac.torproject.org/projects/tor/ticket/16336
// https://www.w3.org/TR/2013/REC-user-timing-20131212/#privacy-security
user_pref("dom.enable_user_timing", false);


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
 * SECTION: History and caching                                               *
 ******************************************************************************/
// SETTING: Permanently enable private browsing mode
// https://wiki.mozilla.org/PrivateBrowsing
// https://support.mozilla.org/en-US/kb/Private-Browsing
// NOTE: This will disable the "Containers" functionality
user_pref("browser.privatebrowsing.autostart",			true);


// SETTING: Do not download URLs for the offline cache
// http://kb.mozillazine.org/Browser.cache.offline.enable
user_pref("browser.cache.offline.enable",			false);

// SETTING: Clear history when Firefox closes
// https://support.mozilla.org/en-US/kb/Clear%20Recent%20History#w_how-do-i-make-firefox-clear-my-history-automatically
user_pref("privacy.sanitize.sanitizeOnShutdown",		true);
user_pref("privacy.clearOnShutdown.cache",			true);
user_pref("privacy.clearOnShutdown.cookies",			true);
user_pref("privacy.clearOnShutdown.downloads",			true);
user_pref("privacy.clearOnShutdown.formdata",			true);
user_pref("privacy.clearOnShutdown.history",			true);
user_pref("privacy.clearOnShutdown.offlineApps",		true);
user_pref("privacy.clearOnShutdown.sessions",			true);
user_pref("privacy.clearOnShutdown.openWindows",		true);

// SETTING: Set time range to "Everything" as default in "Clear Recent History"
user_pref("privacy.sanitize.timeSpan", 0);

// SETTING: Clear everything in "Clear Recent History"
user_pref("privacy.cpd.cache", true);
user_pref("privacy.cpd.cookies", true);
user_pref("privacy.cpd.downloads", true);
user_pref("privacy.cpd.formdata", true);
user_pref("privacy.cpd.offlineApps", true);
user_pref("privacy.cpd.history", true);
user_pref("privacy.cpd.sessions", true);
user_pref("privacy.cpd.siteSettings", true);

// SETTING: Don't remember browsing history
user_pref("places.history.enabled", false);


// SETTING: Disable disk cache
// http://kb.mozillazine.org/Browser.cache.disk.enable
user_pref("browser.cache.disk.enable", false);


// SETTING: Disable Caching of SSL Pages
// http://kb.mozillazine.org/Browser.cache.disk_cache_ssl
user_pref("browser.cache.disk_cache_ssl", false);


// SETTING: Disable download history
user_pref("browser.download.manager.retention", 0);


// SETTING: Disable built-in password manager
user_pref("signon.rememberSignons",	false);


// SETTING: Disable form autofill, don't save information entered in web page forms and the Search Bar
user_pref("browser.formfill.enable", false);


// SETTING: Cookies expires at the end of the session (when the browser closes)
// http://kb.mozillazine.org/Network.cookie.lifetimePolicy#2
user_pref("network.cookie.lifetimePolicy", 2);


/******************************************************************************
 * SECTION: Miscellaneous privacy and fingerprinting settings                 *
 ******************************************************************************/
// SETTING: Opt out of add-on metadata updates
// https://blog.mozilla.org/addons/how-to-opt-out-of-add-on-metadata-updates/
// NOTE: If this setting is enabled, the list of add-ons is sent to Mozilla once a day
user_pref("extensions.getAddons.cache.enabled", false);

// SETTING: Disable theme updates
user_pref("lightweightThemes.update.enabled", false);



/******************************************************************************
 * SECTION: Interface                                                         *
 ******************************************************************************/
// SETTING: Disable favicons in bookmarks
user_pref("browser.shell.shortcutFavicons", false);
user_pref("browser.chrome.site_icons", false);
user_pref("alerts.showFavicons", false);


/******************************************************************************
 * SECTION: Firefox features and components                                   *
 ******************************************************************************/


// SETTING: Enable Firefox's anti-fingerprinting mode ("resist fingerprinting" or RFP) (Tor Uplift project)
// https://wiki.mozilla.org/Security/Fingerprinting
// NOTE: This spoofs the time zone, the locale, and disables numerous other browser features
// NOTE: This supersedes some other spoofing settings, e.g.:
//user_pref("general.useragent.override", "Mozilla/5.0 (Windows NT 6.1; rv:60.0) Gecko/20100101 Firefox/60.0";
//user_pref("general.appname.override",	"Netscape");
//user_pref("general.appversion.override", "5.0 (Windows)");
//user_pref("general.platform.override", "Win32");
//user_pref("general.oscpu.override", "Windows NT 6.1");
user_pref("privacy.resistFingerprinting", true);


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
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);


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


// SETTING: Disable Pocket and "Recommended by Pocket"
// https://support.mozilla.org/en-US/kb/save-web-pages-later-pocket-firefox
user_pref("browser.pocket.enabled",	 false);
user_pref("extensions.pocket.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);


// SETTING: Disable collection/sending of the health report (healthreport.sqlite*)
// https://support.mozilla.org/en-US/kb/firefox-health-report-understand-your-browser-perf
// https://gecko.readthedocs.org/en/latest/toolkit/components/telemetry/telemetry/preferences.html
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled",	false);


// SETTING: Disable "Allow Firefox to make personalized extension recommendations"
user_pref("browser.discovery.enabled", false);


// SETTING: Disable Heartbeat  (Mozilla user rating telemetry)
// https://wiki.mozilla.org/Advocacy/heartbeat
// https://trac.torproject.org/projects/tor/ticket/19047
user_pref("browser.selfsupport.url", "");


// SETTING: Disable metrics/data collection for Firefox Hello
// https://groups.google.com/d/topic/mozilla.dev.platform/nyVkCx-_sFw/discussion
user_pref("loop.logDomains", false);


// SETTING: Enable safe browsing/blocking reported web forgeries
// https://wiki.mozilla.org/Security/Safe_Browsing
// http://kb.mozillazine.org/Safe_browsing
user_pref("browser.safebrowsing.enabled", true); // Firefox < 50
user_pref("browser.safebrowsing.phishing.enabled", true); // firefox >= 50


// SETTING: Enable blocking reported attack sites
// http://kb.mozillazine.org/Browser.safebrowsing.malware.enabled
user_pref("browser.safebrowsing.malware.enabled", true);


// SETTING: Disable querying Google Application Reputation database for downloaded binary files
// https://www.mozilla.org/en-US/firefox/39.0/releasenotes/
// https://wiki.mozilla.org/Security/Application_Reputation
user_pref("browser.safebrowsing.downloads.remote.enabled", false);


// SETTING: Disable SHIELD and opt-out of Firefox studies
// https://support.mozilla.org/en-US/kb/shield
// https://bugzilla.mozilla.org/show_bug.cgi?id=1370801
user_pref("extensions.shield-recipe-client.enabled", false);
user_pref("app.shield.optoutstudies.enabled", false);


// SETTING: Disable the built-in PDF viewer
// https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-2743
// https://blog.mozilla.org/security/2015/08/06/firefox-exploit-found-in-the-wild/
// https://www.mozilla.org/en-US/security/advisories/mfsa2015-69/
user_pref("pdfjs.disabled", true);

/******************************************************************************
 * SECTION: Automatic connections                                             *
 ******************************************************************************/
// SETTING: Disable network prefetching
// http://kb.mozillazine.org/Network.prefetch-next
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ#Privacy_implications
user_pref("network.prefetch-next", false);




/******************************************************************************
 * SECTION: Cipher suites                                                     *
 ******************************************************************************/

// SETTING: Disable null ciphers
user_pref("security.ssl3.rsa_null_sha", false);
user_pref("security.ssl3.rsa_null_md5", false);
user_pref("security.ssl3.ecdhe_rsa_null_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_null_sha", false);
user_pref("security.ssl3.ecdh_rsa_null_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_null_sha", false);

// SETTING: Disable SEED cipher
// https://en.wikipedia.org/wiki/SEED
user_pref("security.ssl3.rsa_seed_sha", false);

// SETTING: Disable 40/56/128-bit ciphers
// 40-bit ciphers
user_pref("security.ssl3.rsa_rc4_40_md5", false);
user_pref("security.ssl3.rsa_rc2_40_md5", false);
// 56-bit ciphers
user_pref("security.ssl3.rsa_1024_rc4_56_sha", false);
// 128-bit ciphers
user_pref("security.ssl3.rsa_camellia_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
user_pref("security.ssl3.ecdh_rsa_aes_128_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_camellia_128_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);

// SETTING: Disable RC4
// https://developer.mozilla.org/en-US/Firefox/Releases/38#Security
// https://bugzilla.mozilla.org/show_bug.cgi?id=1138882
// https://rc4.io/
// https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-2566
user_pref("security.ssl3.ecdh_ecdsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdh_rsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_rc4_128_sha", false);
user_pref("security.ssl3.rsa_rc4_128_md5", false);
user_pref("security.ssl3.rsa_rc4_128_sha", false);
user_pref("security.tls.unrestricted_rc4_fallback", false);

// SETTING: Disable 3DES (effective key size is < 128)
// https://en.wikipedia.org/wiki/3des#Security
// http://en.citizendium.org/wiki/Meet-in-the-middle_attack
// http://www-archive.mozilla.org/projects/security/pki/nss/ssl/fips-ssl-ciphersuites.html
user_pref("security.ssl3.dhe_dss_des_ede3_sha", false);
user_pref("security.ssl3.dhe_rsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdh_rsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdhe_rsa_des_ede3_sha", false);
user_pref("security.ssl3.rsa_des_ede3_sha", false);
user_pref("security.ssl3.rsa_fips_des_ede3_sha", false);

// SETTING: Disable ciphers with ECDH (non-ephemeral)
user_pref("security.ssl3.ecdh_rsa_aes_256_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_aes_256_sha", false);

// SETTING: Disable 256 bits ciphers without PFS
user_pref("security.ssl3.rsa_camellia_256_sha", false);

// SETTING: Enable ciphers with ECDHE and key size > 128bits
user_pref("security.ssl3.ecdhe_rsa_aes_256_sha", true); // 0xc014
user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha", true); // 0xc00a

// SETTING: Enable GCM ciphers (TLSv1.2 only)
// https://en.wikipedia.org/wiki/Galois/Counter_Mode
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_gcm_sha256", true); // 0xc02b
user_pref("security.ssl3.ecdhe_rsa_aes_128_gcm_sha256", true); // 0xc02f

// SETTING: Enable ChaCha20 and Poly1305 (Firefox >= 47)
// https://www.mozilla.org/en-US/firefox/47.0/releasenotes/
// https://tools.ietf.org/html/rfc7905
// https://bugzilla.mozilla.org/show_bug.cgi?id=917571
// https://bugzilla.mozilla.org/show_bug.cgi?id=1247860
// https://cr.yp.to/chacha.html
user_pref("security.ssl3.ecdhe_ecdsa_chacha20_poly1305_sha256", true);
user_pref("security.ssl3.ecdhe_rsa_chacha20_poly1305_sha256", true);

// SETTING: Disable ciphers susceptible to the logjam attack
// https://weakdh.org/
user_pref("security.ssl3.dhe_rsa_camellia_256_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);

// SETTING: Disable ciphers with DSA (max 1024 bits)
user_pref("security.ssl3.dhe_dss_aes_128_sha", false);
user_pref("security.ssl3.dhe_dss_aes_256_sha", false);
user_pref("security.ssl3.dhe_dss_camellia_128_sha", false);
user_pref("security.ssl3.dhe_dss_camellia_256_sha", false);

// SETTING: Fallbacks due compatibility reasons
user_pref("security.ssl3.rsa_aes_256_sha", true); // 0x35
user_pref("security.ssl3.rsa_aes_128_sha", true); // 0x2f
