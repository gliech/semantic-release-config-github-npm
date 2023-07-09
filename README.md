# [@gliech/semantic-release-config-github-npm][1]

> **Disclaimer:** This configuration does not do much by itself and was mainly
> created so that I won't have to replace configurations in all of my
> repositories if I decide to change the way I do semantic versioning.

A shareable semantic-release config for npm packages with code hosted on github.

This shareable configuration uses [@gliech/semantic-release-config-base][2],
which serves as the source for most changes to the default options for plugins
included here.

## Usage

As this module and [@gliech/semantic-release-config-base][2] contain all
neccessary modules as dependencies, all you need to do to use semantic-release
is add just this module to your package.json

```json
{
  ...
  "devDependencies": {
    "@gliech/semantic-release-config-github-npm": "^1.2.0"
  },
  "release": {
    "extends": ["./index.js"]
  }
}
```

In addition this repository provides a reusable GitHub Actions workflow that you
can use in your `.github/workflows`.

```yaml
---
on:
  push:
name: main
jobs:
  release:
    name: semantic release
    uses: gliech/semantic-release-config-github-npm/.github/workflows/release.yml@v1
    secrets:
      NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## License

This project is licensed under the terms of the [BSD 4-Clause License](LICENSE)

[1]: https://www.npmjs.com/package/@gliech/semantic-release-config-github-npm
[2]: https://www.npmjs.com/package/@gliech/semantic-release-config-base
