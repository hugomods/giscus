# Hugo Giscus Comments Engine Module

This module add [Giscus](https://giscus.app/) comments engine support for Hugo.

## Features

- Flexible and Configurable.
- JS APIs: change theme on the fly, it's usually used in the case of color(dark/light) changed.

## Installation

> Requires extended Hugo and Go.

Append the `github.com/razonyang/hugo-mod-giscus` to the theme.

```toml
theme = [
    "github.com/razonyang/hugo-mod-giscus"
]
```

## Site Parameters

> The `repoId` and `categoryId` can be fetched on https://giscus.app/.

| Name | Type | Requried | Default | Description
|---|:-:|:-:|:-:|---
| `giscus` | Object | | |
| `giscus.endpoint` | String | Y | `https://giscus.app/` | The client script endpoint.
| `giscus.repo` | String | Y | - | The GitHub repository, `user/repo`.
| `giscus.repoId` | String | N | - | The GitHub repository ID.
| `giscus.category` | String | Y | `General` | Discussion category.
| `giscus.categoryId` | String | Y | - | Discussion category ID.
| `giscus.mapping` | String | N | `pathname` | The mapping between the embedding page and the embedded discussion.
| `giscus.strictMatching` | String | N | `true` | Use strict title matching.
| `giscus.theme` | String | N | `preferred_color_scheme` |
| `giscus.inputPosition` | String | N | `top` | The input position. Available options: `top` or `bottom`.
| `giscus.reactions` | String | N | `true` | Enable reactions for the main post.
| `giscus.lazyLoading` | String | N | `true` | Load the comments lazily.
| `giscus.languagesMapping` | Object | N | - | The languages mapping from site language to Giscus language.

> See the [configuration](config.yml) for details.

## Usage

> See the [example site](https://projects.razonyang.com/hugo-mod-giscus/) and it's [source code](exampleSite).

### Configuration

Firstly, we'll need to tweak the [site parameters](#site-parameters) listed above.

### Import Script

Then place the following partial to your template where you want the comments to appear.

```html
{{ partial "giscus/script" . }}
```

## JS APIs

You may want to change the Giscus theme on the fly, a common example is changing the Giscus to the corresponding theme when the user switches colors(dark/light).

```js
import Giscus from 'giscus/js';

const giscus = new Giscus('your Giscus endpoint');
giscus.setTheme('dark');
```

You can find the real example on the [example site](exampleSite).
