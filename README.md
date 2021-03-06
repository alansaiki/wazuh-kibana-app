# Wazuh Kibana App

[![Slack](https://img.shields.io/badge/slack-join-blue.svg)](https://goo.gl/forms/M2AoZC4b2R9A9Zy12)
[![Email](https://img.shields.io/badge/email-join-blue.svg)](https://groups.google.com/forum/#!forum/wazuh)
[![Documentation](https://img.shields.io/badge/docs-view-green.svg)](https://documentation.wazuh.com)
[![Documentation](https://img.shields.io/badge/web-view-green.svg)](https://wazuh.com)

Wazuh is a security detection, visibility, and compliance open source project. It was born as a fork of OSSEC HIDS, later was integrated with Elastic Stack and OpenSCAP evolving into a more comprehensive solution. You can read more in <https://wazuh.com/>

## Description

Visualize and analyze Wazuh alerts stored in Elasticsearch using our Kibana app plugin.

-   Obtain statistics per agent, search alerts and filter by using the different visualizations.
-   View the Wazuh manager configuration.
-   File integrity monitoring.

## Documentation

-   [Full documentation](https://documentation.wazuh.com)
-   [Wazuh installation guide](https://documentation.wazuh.com/current/installation-guide/index.html)
-   [Screenshots](https://documentation.wazuh.com/current/index.html#example-screenshots)

![Overview](https://documentation.wazuh.com/current/_images/overview-general.png)

## Requisites

-   Wazuh HIDS 3.0.0 or superior
-   Wazuh RESTful API 3.0.0 or superior
-   Kibana 6.0.0 or superior
-   Elasticsearch 6.0.0 or superior

## Installation

| Kibana version | Wazuh app version | Installation                                                                                               |
| :------------: | :---------------: | :--------------------------------------------------------------------------------------------------------- |
|      6.0.0     |       3.0.0       | /usr/share/kibana/bin/kibana-plugin install <https://packages.wazuh.com/wazuhapp/wazuhapp-3.0.0_6.0.0.zip> |
|      6.0.1     |       3.0.0       | /usr/share/kibana/bin/kibana-plugin install <https://packages.wazuh.com/wazuhapp/wazuhapp-3.0.0_6.0.1.zip> |
|      6.1.0     |       3.0.0       | /usr/share/kibana/bin/kibana-plugin install <https://packages.wazuh.com/wazuhapp/wazuhapp-3.0.0_6.1.0.zip> |
|      6.1.0     |       3.1.0       | /usr/share/kibana/bin/kibana-plugin install <https://packages.wazuh.com/wazuhapp/wazuhapp-3.1.0_6.1.0.zip> |
|      6.1.1     |       3.1.0       | /usr/share/kibana/bin/kibana-plugin install <https://packages.wazuh.com/wazuhapp/wazuhapp-3.1.0_6.1.1.zip> |
|      6.1.2     |       3.1.0       | /usr/share/kibana/bin/kibana-plugin install <https://packages.wazuh.com/wazuhapp/wazuhapp-3.1.0_6.1.2.zip> |
|      6.1.3     |       3.1.0       | /usr/share/kibana/bin/kibana-plugin install <https://packages.wazuh.com/wazuhapp/wazuhapp-3.1.0_6.1.3.zip> |
|      6.1.0     |       3.2.0       | /usr/share/kibana/bin/kibana-plugin install <https://packages.wazuh.com/wazuhapp/wazuhapp-3.2.0_6.1.0.zip> |
|      6.1.1     |       3.2.0       | /usr/share/kibana/bin/kibana-plugin install <https://packages.wazuh.com/wazuhapp/wazuhapp-3.2.0_6.1.1.zip> |
|      6.1.2     |       3.2.0       | /usr/share/kibana/bin/kibana-plugin install <https://packages.wazuh.com/wazuhapp/wazuhapp-3.2.0_6.1.2.zip> |
|      6.1.3     |       3.2.0       | /usr/share/kibana/bin/kibana-plugin install <https://packages.wazuh.com/wazuhapp/wazuhapp-3.2.0_6.1.3.zip> |
|      6.2.0     |       3.2.0       | /usr/share/kibana/bin/kibana-plugin install <https://packages.wazuh.com/wazuhapp/wazuhapp-3.2.0_6.2.0.zip> |
|      6.2.1     |       3.2.0       | /usr/share/kibana/bin/kibana-plugin install <https://packages.wazuh.com/wazuhapp/wazuhapp-3.2.0_6.2.1.zip> |
|      6.2.2     |       3.2.0       | /usr/share/kibana/bin/kibana-plugin install <https://packages.wazuh.com/wazuhapp/wazuhapp-3.2.0_6.2.2.zip> |
|      6.2.2     |       3.2.1       | /usr/share/kibana/bin/kibana-plugin install <https://packages.wazuh.com/wazuhapp/wazuhapp-3.2.1_6.2.2.zip> |
|      6.2.3     |       3.2.1       | /usr/share/kibana/bin/kibana-plugin install <https://packages.wazuh.com/wazuhapp/wazuhapp-3.2.1_6.2.3.zip> |
|      6.2.4     |       3.2.1       | /usr/share/kibana/bin/kibana-plugin install <https://packages.wazuh.com/wazuhapp/wazuhapp-3.2.1_6.2.4.zip> |
|      6.2.4     |       3.2.2       | /usr/share/kibana/bin/kibana-plugin install <https://packages.wazuh.com/wazuhapp/wazuhapp-3.2.2_6.2.4.zip> |
|      6.2.4     |       3.2.3       | /usr/share/kibana/bin/kibana-plugin install <https://packages.wazuh.com/wazuhapp/wazuhapp-3.2.3_6.2.4.zip> |

## Upgrade

Remove the app using kibana-plugin tool

    /usr/share/kibana/bin/kibana-plugin remove wazuh

Install the app

    /usr/share/kibana/bin/kibana-plugin install https://packages.wazuh.com/wazuhapp/wazuhapp-3.x.x_6.x.x.zip

## Contribute

If you want to contribute to our project please don't hesitate to send a pull request. You can also join our users [mailing list](https://groups.google.com/d/forum/wazuh), by sending an email to <mailto:wazuh+subscribe@googlegroups.com>, to ask questions and participate in discussions.

## Software and libraries used

-   API from Elastic and Kibana (elastic.co).
-   Angular Material (material.angularjs.org).
-   Bootstrap (getbootstrap.com).
-   AngularJS.
-   Node.js (Ryan Dahl).
-   NPM packages Angular animate, aria, cookies, md5, needle and cron.

## Copyright & License

Copyright (C) 2018 Wazuh, Inc.

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version.

Find more information about this on the [LICENSE](LICENSE) file.

## References

-   [Wazuh website](https://wazuh.com)
-   [Wazuh documentation](https://documentation.wazuh.com)
-   [Elastic Stack website](https://elastic.co)
