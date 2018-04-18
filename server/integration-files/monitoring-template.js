module.exports = {
    "order": 0,
    "template": "wazuh-monitoring-3.x-*",
    "settings": {
        "index.refresh_interval": "5s"
    },
    "mappings": {
        "wazuh-agent": {
            "properties": {
                "@timestamp": {
                    "type": "date",
                    "format": "dateOptionalTime"
                },
                "status": {
                    "type": "keyword"
                },
                "ip": {
                    "type": "keyword"
                },
                "host": {
                    "type": "keyword"
                },
                "name": {
                    "type": "keyword"
                },
                "id": {
                    "type": "keyword"
                },
                "cluster": {
                    "properties": {
                        "name": {
                            "type": "keyword"
                        }
                    }
                }
            }
        }
    }
};