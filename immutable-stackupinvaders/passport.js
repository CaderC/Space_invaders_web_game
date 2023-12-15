window.passport = new window.immutable.passport.Passport({
    baseConfig: new window.immutable.config.ImmutableConfiguration({
      environment: window.immutable.config.Environment.SANDBOX,
    }),
    clientId: 'bPK9Ph0JcRqe2L7OduQDvyyYTWsTqlP6',
    redirectUri: 'https://tuna-grateful-needlessly.ngrok-free.app',
    logoutRedirectUri: 'https://tuna-grateful-needlessly.ngrok-free.app/logout.html',
    audience: 'platform_api',
    scope: 'openid offline_access email transact'
  });

