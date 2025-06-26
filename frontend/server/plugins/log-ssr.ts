import { defineNitroPlugin } from 'nitropack';

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('request', (event) => {
    const url = event.path;
    const headers = event.node?.req?.headers || {};
    let cookies = headers.cookie || '';
    // Log basic request info
    console.log('[SSR LOG] Incoming request:', {
      url,
      headers,
      cookies,
    });
  });
});
