function parseFeatureFlags(raw) {
  if (!raw) return {};
  try {
    // Try JSON first
    const json = JSON.parse(raw);
    if (json && typeof json === 'object') return json;
  } catch (_e) {
    // Fallback to comma-separated list: "flag1,flag2,!flag3"
    const obj = {};
    const items = String(raw)
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    items.forEach((item) => {
      if (item.startsWith('!')) {
        obj[item.slice(1)] = false;
      } else {
        obj[item] = true;
      }
    });
    return obj;
  }
  return {};
}

// PUBLIC_INTERFACE
export const config = {
  /** Node environment (from REACT_APP_NODE_ENV or NODE_ENV) */
  nodeEnv: process.env.REACT_APP_NODE_ENV || process.env.NODE_ENV,
  /** Log level (default 'info') */
  logLevel: process.env.REACT_APP_LOG_LEVEL || 'info',
  /** Feature flags (JSON string or comma-separated list) */
  featureFlags: parseFeatureFlags(process.env.REACT_APP_FEATURE_FLAGS),
};
