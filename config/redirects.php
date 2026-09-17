<?php

/*
|--------------------------------------------------------------------------
| Legacy WordPress URL redirects
|--------------------------------------------------------------------------
|
| humanhealthproject.org ran on WordPress before the Next.js site went live.
| Google Search Console still requests the old addresses, and the new site
| has no page at them, so they return 404. Each redirect below is a
| permanent (301) redirect, so the old page's search ranking and backlinks
| carry over to the new page.
|
| Blog articles do not need to be listed here: bootstrap/app.php redirects
| /{category}/{slug}/ and /{slug}/ to /blog/{slug} automatically whenever
| that blog post exists in the build.
|
| Keys are paths without leading/trailing slashes, lowercase.
| Junk URLs (feeds, test pages, plugin leftovers) are deliberately NOT
| listed: they should keep returning 404.
|
*/

return [

    'pages' => [
        // Old WordPress pages with an equivalent on the new site
        'home' => '/',
        'hhp-blog' => '/blog',
        'meet-team-technology' => '/who-we-are/meet-the-team',
        'donate-and-challenge' => '/donate',
        'write-for-us' => '/how-to-help/volunteer-with-us',
        'understanding-the-healthcare-system-in-ni' => '/what-we-do/patient-advocacy/northern-ireland',

        // Real World Data / Shared Patient Information programme
        'hhp-real-world-data-program' => '/what-we-do/shared-patient-information',
        'real-world-data-survey' => '/what-we-do/shared-patient-information',
        'migraine_healthcareproviders' => '/shared-patient-information/migraine',
        'migraine_naturalalternative' => '/shared-patient-information/migraine',
    ],

    'patterns' => [
        // The old migraine report pages linked to "hhp-real-world-data-program"
        // without a leading slash, so browsers resolved it relative to the
        // page, e.g. /migraine-otc-efficacy/hhp-real-world-data-program
        '#^migraine-[a-z0-9-]+/hhp-real-world-data-program$#' => '/shared-patient-information/migraine',
    ],

];
