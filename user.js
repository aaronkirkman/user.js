// SETTING: Disable User Timing API, which stores high-resolution (milliseconds to microseconds) timestamps
// https://trac.torproject.org/projects/tor/ticket/16336
// https://www.w3.org/TR/2013/REC-user-timing-20131212/#privacy-security
user_pref("dom.enable_user_timing",	false);


// SETTING: When set to false, this setting prevents invalid URLs entered into the address bar from being submitted to the default search engine.
// http://kb.mozillazine.org/Keyword.enabled
user_pref("keyword.enabled", true);
