# Hugo Giscus Comments Engine Module

This module add [Giscus](https://giscus.app/) comments engine support for Hugo.

## Features

- Flexible and Configurable.
- JS APIs: change theme on the fly, it's usually used in the case of color(dark/light) changed.
- Multiple repos.

## Installation

> Requires extended Hugo and Go.

Append the `github.com/razonyang/hugo-mod-giscus` to the theme.

```toml
theme = [
    "github.com/razonyang/hugo-mod-giscus"
]
```

## Site Parameters

> The `repo_id` and `category_id` can be fetched on https://giscus.app/.

> The `camelCase` parameters are deprecated, will be deleted in the later version.

| Name | Type | Required | Default | Description
|---|:-:|:-:|:-:|---
| `giscus` | Object | | |
| `giscus.endpoint` | String | Y | `https://giscus.app/` | The client script endpoint.
| `giscus.repo` | String | Y | - | The GitHub repository, `user/repo`.
| `giscus.repo_id` | String | N | - | The GitHub repository ID.
| `giscus.category` | String | Y | `General` | Discussion category.
| `giscus.category_id` | String | Y | - | Discussion category ID.
| `giscus.mapping` | String | N | `pathname` | The mapping between the embedding page and the embedded discussion.
| `giscus.strict_matching` | String | N | `true` | Use strict title matching.
| `giscus.theme` | String | N | `preferred_color_scheme` |
| `giscus.input_position` | String | N | `top` | The input position. Available options: `top` or `bottom`.
| `giscus.reactions` | String | N | `true` | Enable reactions for the main post.
| `giscus.lazy_loading` | String | N | `true` | Load the comments lazily.
| `giscus.languages_mapping` | Object | N | - | The languages mapping from site language to Giscus language.

> See the [configuration](config.yml) for details.

## Usage

> See the [example site](https://projects.razonyang.com/hugo-mod-giscus/) and it's [source code](exampleSite).

### Configuration

Firstly, we'll need to tweak the [site parameters](#site-parameters) listed above.

### Import Script

```go
{{ partial "giscus/script" . }}
```

Or with custom options.

```go
{{ partial "giscus/script-with-options" .Site.Params.blog.giscus }}
```

By default, the Giscus client will look up the placeholder element that with the `giscus` class, such as,

```html
<div class="giscus">YOUR COMMENTS WILL BE PLACED INSIDE</div>
```

Otherwise, the comments will be rendered where the script placed.

## JS APIs

You may want to change the Giscus theme on the fly, a common example is changing the Giscus to the corresponding theme when the user switches colors(dark/light).

```js
import Giscus from 'giscus/js';

const giscus = new Giscus('your Giscus endpoint');
giscus.setTheme('dark');
```

You can find the real example on the [example site](exampleSite).
