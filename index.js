module.exports = {
  ...require("@gliech/semantic-release-config-base"),
  ...{
    "plugins": [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
      "@semantic-release/changelog",
      "semantic-release-replace-plugin",
      "@semantic-release/git",
      "@semantic-release/github",
      "@semantic-release/npm",
      [
        "semantic-release-major-tag",
        {
          "customTags": ["v${major}", "v${major}.${minor}"]
        }
      ]
    ]
  },
  "replacements": []
}
