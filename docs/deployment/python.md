---
title: Python
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Deploy Python Apps

Python is a beginner-friendly programming language popularly used for machine learning and other scientific projects. Python is served using Phusion Passenger inside NGINX.

Popular Python recipes include [Flask](https://flask.palletsprojects.com/) and [Django](https://www.djangoproject.com/). Please read our [Runner's Guide](../features/runner.md) first if you haven't.

## Recipes

<Tabs>
  <TabItem value="flask" label="Flask" default>

### Init

```yaml
source: clear
features:
  - python latest
nginx:
  root: public_html/app/static
  passenger:
    enabled: on
    app_env: development
    app_root: public_html
    python: .pyenv/shims/python
commands:
  - pip install createflaskapp
  - create-flask-app project
  - mv project/* . ; rm -rf project
  - cat requirements.txt | grep -v "pkg-resources" > requirements.txt || true
  - pip install -r requirements.txt
  - echo "from app import app as application" > passenger_wsgi.py
```

A simple Flask website with [create-flask-app](https://github.com/isakal/create-flask-app) for development.

  </TabItem>
  <TabItem value="django" label="Django">

### Init in Development Mode

```yaml
source: clear
features:
- python latest
nginx:
  root: public_html/public
  passenger:
    enabled: on
    python: .pyenv/shims/python
commands:
- pip install django
- django-admin startproject app .
- sed -i "s/ALLOWED_HOSTS = \[\]/ALLOWED_HOSTS = \['${DOMAIN}'\]/g" app/settings.py
- echo "from app.wsgi import application" > passenger_wsgi.py
- python manage.py migrate
- mkdir public
```

A simple Flask website with [create-flask-app](https://github.com/isakal/create-flask-app) for development.


  </TabItem>
</Tabs>

---


Let's extract those recipes meaning individually.

## Python environment

The default Python version is `3.9`, which is the default provided from the OS.

To change Python version used to the latest  one, put this in runner:

```yaml
features:
- python latest
```

It will install python in userland and all binaries will use it instead of the default one.

You can also install other or specific version of Python e.g. `python 3.9`,  `python 3.9.2`. This action will install Python in userland with the help of [webi script](https://webinstall.dev/python/).


## NGINX Setup

Binding Python through NGINX is done by Passenger. To make the binding work, you need to make sure that your app can open port number using given environment variable (.e.g. `PORT`), and you point the root of your public file to a `public` directory.

```yaml
root: public_html/public
nginx:
  passenger:
    enabled: on
    app_start_command: env PORT=$PORT python main.py
```

If your setup is complex (e.g. using multiple websites in a domain) you can tell which exactly the `app_root` directory your app is serving from. Just make sure your root directory is outside of your app directory.

```yaml
root: public_html/client/dist
nginx:
  locations:
  - match: /api
    passenger:
      enabled: on
      app_start_command: env PORT=$PORT python main.py
      app_root: public_html/server
```

:::info 

There's so much more to cover about NGINX configuration! read more at [NGINX](../features/nginx.md#configure-nginx-for-general-apps) page.

:::


## Package Install

Package installs can be done just like usual `pip install` command. Because it's run in userland, you can install packages without issuing `sudo` or `--user`.

### Clear packager cache

In meantime if your development has stable enough, you may want to clear the packager cache to save space.

```
pip cache purge
```


## Python Error Logs

When your Python crashed during startup, a helpful error will be displayed in the browser. This aids you to diagnose if some configuration is wrong.

(TODO) Unfortunately, we haven't found a way to capture Python error logs yet. You can utilize file-based log using `logging` module to capture errors.
