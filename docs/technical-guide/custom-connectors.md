---
title: Custom Connectors
description: ""
date: 2022-09-23T00:42:44.553Z
preview: ""
draft: true
tags: [Technical Guide]
categories: [Connectors]
sidebar_position: 8
slug: custom-connectors
displayed_sidebar: tech
---

## ColorNames.org

```yaml
swagger: '2.0'
info: {title: Default title, description: Get Colour Name from colornames.org, version: '1.0'}
host: colornames.org
basePath: /search/json/
schemes: [https]
consumes: []
produces: []
paths:
  /:
    get:
      responses:
        default:
          description: default
          schema:
            type: object
            properties:
              hexCode: {type: string, description: hexCode}
              name: {type: string, description: name}
      summary: GetColorName
      operationId: GetColorName
      parameters:
      - {name: hex, in: query, required: false, type: string}
definitions: {}
parameters: {}
responses: {}
securityDefinitions: {}
security: []
tags: []
```

## ColourLovers

## Colorfyit

## The Color API