---
title: Firewall Daemon
---

Firewall is activated in all servers for additional network protection. It prevents both inbound and outbound connections for certain cases.

### Inbound Connection

Inbound connection is for incoming traffic from the internet. Certain ports are opened for variety of purposes:

+ `21` - FTP
+ `22` - SSH
+ `53` - DNS (TCP & UDP)
+ `80` - HTTP
+ `443` - HTTPS
+ `2443` - Webmin
+ `3306` - MySQL
+ `5432` - PostgreSQL
+ `32768:65535` - Ephemeral Ports (TCP only)

Ephemeral ports are only allowed to be used for local development inside the server. Other ports are blocked.

### Outbound Connection

Outbound connection is for outgoing traffic to the internet. It's allowed for all ports and protocols by default, except port `25`. 

Port `25` is blocked for outbound connection to prevent SMTP / Email abuse. If you need to send email, you can use a third-party services.

There are also additional measures to prevent abuse, by [enabling](./runner.md#firewall) `firewall` feature via Runner. It blocks all outbound connection except for sites that are [whitelisted](https://github.com/domcloud/bridge/blob/main/src/whitelist/sites.conf). It works by resolving all whitelisted sites to IP addresses and allow only those IP addresses to be accessed.

This `firewall` feature is opt-in and can be turned off at will. The feature is mostly used for installation for weakly secured PHP servers like WordPress. To check if the feature is enabled, you can go to Check -> Firewall menu.