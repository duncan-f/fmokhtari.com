---
title: How to host a website with nginx
description: This is tutorial is going to help you setup a webserver accessible
  remotly from the internet.
category: Tutorial
author:
  name: Farouk Mokhtari
  email: fmokhtari@mail.ru
  website: https://fmokhtari.com
  btc: 1JJmuidSTRCugnBKH8H7bDxEmTtAAg4kyn
  usdt: TWi6yNRhxzkmgZhhoriDzWgvrSsxbdQCb8
  xmr: 87Asjp2TLCkKnw3PYsiKaTDwL8mNhiL7uV67ptCtVxqbSnaZfATQ6t4d1mfWnKu4kB4ieQHMApGhUdUY3h4RKBS2Kuc5RyW
tags:
  - server
  - nginx
  - linux
draft: true
date: 2022-07-16T13:57:06.410Z
---
## Introduction

If you ended up reading this article, it means that you wanna start your own
webserver but you don't know where to begin. Don't panic! There's nothing really
hard in the process of getting it done, but there's some requirements you should
have before hand.

### Requirements

- An old computer that lies down in you house.
- A little knowleadge of the linux OS.

## Let's get started

First, you need to install Linux on your computer. Why Linux ? Because Linux is
best suited for servers. I prefer [Debian](https://debian.org) distribution,
because it's stable. But you can use any other linux distribution if it suits
you, you can install for example [Ubuntu Server](https://ubuntu.com).

I'm not gonna go through the process of installing Linux on your computer, you
can find plenty of videos on YouTube that explains the process step-by-step.

## Install tools
### Install nginx
You have to install **nginx** on your server, this is the webserver.

- Debian / Ubuntu:

```shell
sudo apt install nginx
```

- Archlinux-based distributions:

```shell
sudo pacman -S nginx
```

### Install openssh
And then to access your server remotly you need **openssh** which can be
installed by this command.

- Debian / Ubuntu:

```shell
 sudo apt install openssh
```

- Archlinux-based distributions:

```shell
 sudo pacman -S openssh
```

In order to start the sshd service you have to execute this command.

```shell
 sudo systemctl enable --now sshd.service
```

To be continued...
