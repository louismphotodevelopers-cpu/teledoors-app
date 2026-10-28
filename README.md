# TELE-DOORS App

Independent responsive browser app for TELE-DOORS. No connection to the SA Quiz Master project, database or authentication.

## Pages

Home, Windows, Doors, Garage Doors and How To. All five navigation links remain visible on every page. Home and the header logo always return to the home screen. Hash routes support browser Back/Forward, refresh and direct linking. Unknown routes return Home.

The supplied recreated transparent TELE-DOORS PNG is the Home background artwork. Product sections provide general planning prompts; no product catalogue, prices or contact details have been invented. How To explains the app navigation.

## Android safe area

The viewport uses `viewport-fit=cover`. Bottom navigation uses `env(safe-area-inset-bottom)` with at least 16 px of lower padding. Left/right/top insets are also respected, and content reserves space above the fixed navigation. Touch links are at least 48 px tall. Standard browser Android system navigation is outside the browser viewport. Native WebView wrappers must forward system window insets or avoid edge-to-edge overlap.

## Run and deploy

No install or build step is needed. Run `npm start` and open http://localhost:3000. Run `npm run check` for the JavaScript syntax check. Deploy the repository root as a static site on Vercel with framework **Other**, no build command and output directory `.`. `vercel.json` includes configuration and security headers. No APK, app installation prompt, login, database or external services are required.

Brand artwork supplied by the owner. Keep this project in its own `Teledoors-App` repository.
