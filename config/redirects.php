<?php

/*
|--------------------------------------------------------------------------
| Legacy WordPress URL redirects
|--------------------------------------------------------------------------
|
| humanhealthproject.org ran on WordPress before the Next.js site went live.
| Google Search Console and the Semrush audit (July 2026) still request the
| old addresses, and the new site has no page at them, so they returned 404.
| Each entry below is a permanent (301) redirect, in ONE hop, to the page that
| replaced it, so the old page's ranking and backlinks carry over.
|
| How bootstrap/app.php uses this file, in order:
|   1. 'pages'     exact old path => new path
|   2. 'patterns'  regex on the old path => new path
|   3. old blog permalinks /{category}/{slug} and /{slug} => /blog/{slug},
|      automatically, whenever that post exists in the build (no list needed)
|   4. 'fallbacks' regex => new path, for old URLs whose post or page no
|      longer exists (e.g. an article that was not migrated)
|
| Keys and patterns match the path lowercased, without leading/trailing
| slashes and without the query string. Every target must be a real page
| that is listed in src/app/sitemap.js.
|
| Junk URLs (feeds, wp-includes, test pages, plugin leftovers) are
| deliberately NOT listed: they should keep returning 404.
|
*/

// WordPress category archives. The new site has one blog listing at /blog
// (with a category filter), so each archive goes there.
$categories = [
    'alternative-medicine', 'awareness', 'bacterial-diseases', 'cancer',
    'cardiovascular-health', 'child-adolescent-health', 'dental-health',
    'disease', 'eating-disorders', 'emotional-health', 'ent',
    'environmental-health', 'everyday-health', 'fitness',
    'gastrointestinal-health', 'guest-artoce', 'infectious-disease',
    'invisible-illness', 'mens-health', 'mental-health',
    'neurological-health', 'nutrition', 'patient-rights', 'stress-health',
    'uncategorized', 'womens-health',
];
$categoryRegex = implode('|', array_map('preg_quote', $categories));

return [

    'pages' => [
        // Home and blog
        'home' => '/',
        'hhp-blog' => '/blog',
        'human-health-project-news' => '/latest-news',

        // Who we are
        'about-us' => '/who-we-are/about-us',
        'meet-the-team' => '/who-we-are/meet-the-team',
        'meet-team-technology' => '/who-we-are/meet-the-team',
        'meet-team-program-council' => '/about/program-council',
        // The old "Human Health Project Advisory Council" page is now the
        // join-the-advisory-board page (see JoinPatientAdvisoryBoard.jsx).
        'human-health-project-advisory-council' => '/join-patient-advisory-board',
        'who_we_serve' => '/why-hhp/who-we-serve',
        'contact-us' => '/contact',

        // What we do: healthcare access, patient advocacy, learning academy
        'healthcare-access-introduction' => '/what-we-do/healthcare-access/introduction',
        'workshops' => '/what-we-do/healthcare-access/introduction',
        'patient-advocacy-los-angeles' => '/what-we-do/patient-advocacy/los-angeles',
        'patient-advocacy-northern-ireland' => '/what-we-do/patient-advocacy/northern-ireland',
        'understanding-the-healthcare-system-in-ni' => '/what-we-do/patient-advocacy/northern-ireland',
        'learning-academy' => '/what-we-do/learning-academy/english',
        'hhp-learning-academy' => '/what-we-do/learning-academy/english',
        'learning-academy-spanish' => '/what-we-do/learning-academy/spanish',
        'learning-academy-mandarin' => '/what-we-do/learning-academy/mandarin',
        'patient-education-v1-7' => '/what-we-do/learning-academy/videos',
        'online-events' => '/what-we-do/online-events',
        'stop-type-2-diabetes-before-it-starts' => '/what-we-do/stop-type-2-diabetes/introduction',

        // Shared Patient Information (previously Real World Data)
        'shared-patient-information' => '/what-we-do/shared-patient-information',
        'hhp-real-world-data-program' => '/what-we-do/shared-patient-information',
        'real-world-data-survey' => '/what-we-do/shared-patient-information',
        'narratives' => '/shared-patient-information/narratives',
        'migraine_healthcareproviders' => '/shared-patient-information/migraine',
        'migraine_naturalalternative' => '/shared-patient-information/migraine',

        // How to help
        'how_to_help' => '/how-to-help',
        'give' => '/donate',
        'donate-and-challenge' => '/donate',
        'become-an-hhp-partner' => '/how-to-help/become-hhp-partner',
        'intern-for-hhp' => '/how-to-help/intern',
        'matching-donations' => '/how-to-help/matching-donations',
        'write-for-us' => '/how-to-help/volunteer-with-us',

        // Legal (the privacy policy covers cookies)
        'privacy-policy' => '/privacy',
        'cookies-policy' => '/privacy',
        'terms-of-service' => '/terms',

        // Accounts
        'login-2' => '/login',
        'register' => '/signup',
        'register/free-membership' => '/signup',

        // Category archives
        ...array_fill_keys($categories, '/blog'),
    ],

    'patterns' => [
        // The old video library (custom post type "hhp_video"): the archive,
        // its pages, ?language= / ?topic= filters and every single video,
        // English, Spanish and Mandarin, are all on one page now.
        '#^hhp_video(/.*)?$#' => '/what-we-do/learning-academy/videos',

        // Team bios linked to LinkedIn without "https://", so browsers
        // resolved them under the page, e.g.
        // /meet-the-team/www.linkedin.com/in/renemherrera
        '#^meet-the-team/.+$#' => '/who-we-are/meet-the-team',

        // The old migraine report pages linked to "hhp-real-world-data-program"
        // without a leading slash, e.g. /migraine-otc-efficacy/hhp-real-world-data-program
        '#^migraine-[a-z0-9-]+/hhp-real-world-data-program$#' => '/shared-patient-information/migraine',

        // Author, tag and category archives, and paginated listings
        '#^(author|tag|category)/.+$#' => '/blog',
        "#^(blog|{$categoryRegex})/page/\\d+$#" => '/blog',
    ],

    'fallbacks' => [
        // An article under an old category whose post is not on the new
        // site: send it to the blog rather than a dead end.
        "#^({$categoryRegex})/[^/]+$#" => '/blog',
    ],

];
