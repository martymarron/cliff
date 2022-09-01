cliff
=====

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/martymarron/cliff/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/martymarron/cliff/tree/main)
[![npm version](https://badge.fury.io/js/@martymarron%2Fcliff.svg)](https://badge.fury.io/js/@martymarron%2Fcliff)

Description
---
This is a CLI(**C**ommand **L**ine **I**nterface) for the [LIFF Server API](https://developers.line.biz/en/reference/liff-server/). This provides a simple set of commands to perform CRUD for [LIFF apps](https://developers.line.biz/en/docs/liff/overview/).


Table of Contents
---
1. [Usage](#usage)
1. [Commands](#commands)


Usage
---
```sh-session
$ npm install -g @martymarron/cliff
$ cliff COMMAND
running command...
$ cliff (-v|--version|version)
cliff/0.1.0-alpha linux-x64 node-v16.13.0
$ cliff --help [COMMAND]
USAGE
  $ cliff COMMAND
...
```

Next, it requires to provide credentials as environment variables as follows.
```sh-session
$ cat << 'EOF' | tee .env
LINE_CLIENT_ID=1234567890
LINE_CLIENT_SECRET=abcdefgh1jklmnopqrstuvwxyz123456
BASE_URL=https://api.line.me
EOF
```
See the ["FAQ - Where can I find my channel ID?"](https://developers.line.biz/en/faq/#where-can-i-find-channel-id) to know how to find credentials.\
Please note that environment variables `LINE_CLIENT_ID` and `LINE_CLIENT_SECRET` correspond to the "Channel ID" and "Channel secret" on the developer console.\
`BASE_URL` specifies the base URL of the LIFF Server API. Modify this value in accordance with your development environment. Leave it as is if you're not familar with this.

Commands
---
* [`cliff list`](#cliff-list)
* [`cliff create`](#cliff-create)
* [`cliff update`](#cliff-update)
* [`cliff delete`](#cliff-delete)
* [`cliff help [COMMAND]`](#cliff-help-command)

### `cliff list`

Display LIFF apps which belong to your channel.

```sh
USAGE
  $ cliff list

EXAMPLE
  $ cliff list
  [
      {
          "liffId": "1234567890-abcdefgh",
          "view": {
              "type": "full",
              "url": "https://example.com",
              "moduleMode": false
          },
          "description": "Example App",
          "features": {},
          "permanentLinkPattern": "concat"
      }
  ]
```

_See code: [src/processors/list-command-processor.ts](https://github.com/martymarron/cliff/blob/main/src/processors/list-command-processor.ts)_

## `cliff create`

Create a LIFF app into your channel.

```sh
USAGE
  $ cliff create --json [LIFF_APP]

OPTIONS
  --json LIFF_APP  json string to create the LIFF app

EXAMPLE
  $ LIFF_APP=$(<<'EOF'
  {
    "view": {
      "type": "full",
      "url": "https://example.com"
    },
    "description": "This is an example LIFF app.",
    "permanentLinkPattern": "concat"
  }
  EOF
  )
  $ cliff create --json $LIFF_APP
  $ cliff list
  [
      {
          "liffId": "1234567890-abcdefgh",
          "view": {
              "type": "full",
              "url": "https://example.com",
              "moduleMode": false
          },
          "description": "This is an example LIFF app.",
          "features": {},
          "permanentLinkPattern": "concat"
      }
  ]
```

_See code: [src/processors/create-command-processor.ts](https://github.com/martymarron/cliff/blob/main/src/processors/create-command-processor.ts)_

## `cliff update`

Update the LIFF app.

```sh
USAGE
  $ cliff update --json [LIFF_APP]

OPTIONS
  --json LIFF_APP  json string to update the LIFF app

EXAMPLE
  $ LIFF_APP=$(<<'EOF'
  {
    "liffId": "1234567890-abcdefgh"
    "view": {
      "type": "full",
      "url": "https://example.com"
    },
    "description": "Updated the description",
    "permanentLinkPattern": "concat"
  }
  EOF
  )
  $ cliff update --json $LIFF_APP
  $ cliff list
  [
      {
          "liffId": "1234567890-abcdefgh",
          "view": {
              "type": "full",
              "url": "https://example.com",
              "moduleMode": false
          },
          "description": "Updated the description.",
          "features": {},
          "permanentLinkPattern": "concat"
      }
  ]
```

_See code: [src/processors/update-command-processor.ts](https://github.com/martymarron/cliff/blob/main/src/processors/update-command-processor.ts)_


## `cliff delete`

Delete the LIFF app by specifying the LIFF ID.

```sh
USAGE
  $ cliff delete --liff-id [LIFF_ID]

OPTIONS
  --liff-id [LIFF_ID]  liffId to delete

EXAMPLE
  $ cliff delete --liff-id 1234567890-abcdefgh
  $ cliff list
  []
```
_See code: [src/processors/delete-command-processor.ts](https://github.com/martymarron/cliff/blob/main/src/processors/delete-command-processor.ts)_

## `cliff help [COMMAND]`

display help for cliff

```sh
USAGE
  $ cliff help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.4/src/commands/help.ts)_

