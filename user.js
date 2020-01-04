// SETTING: Disable User Timing API, which stores high-resolution (milliseconds to microseconds) timestamps
// https://trac.torproject.org/projects/tor/ticket/16336
// https://www.w3.org/TR/2013/REC-user-timing-20131212/#privacy-security
user_pref("dom.enable_user_timing",	false);
