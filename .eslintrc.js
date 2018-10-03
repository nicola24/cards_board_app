module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true, // prevent eslint from 'fetch is not defined'
  },
  rules: {
    "no-underscore-dangle": ["error", { "allow": ["_id"] }],
  },
};
