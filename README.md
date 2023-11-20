# Bicycal Frontend Website

## Requirements
Install Jekyll (requires Ruby):
```
gem install bundler jekyll
```

## Testing Locally
To build:

```
$ bundle exec jekyll build
```

To serve:
```
$ bundle exec jekyll serve
```

## Pushing to Production
First build:
```
$ JEKYLL_ENV=production jekyll build
```

Then copy `_site/*` over to the webserver:
```
$ rsync -avzP _site/* <HOST>:<PATH>
```
