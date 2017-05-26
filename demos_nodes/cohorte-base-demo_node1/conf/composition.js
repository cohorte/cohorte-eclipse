{
    "name": "cohorte-demo-app",
    "root": {
        "name": "cohorte-demo-compo",
        "components": [
            {
                "name"    : "Viewer",
                "factory" : "org.example.temperature.Viewer",                
                "node"    : "node1"
            },
            {
                "name"    : "Sensor",
                "factory" : "org.example.temperature.Sensor",                
                "node"    : "node2"
            }
        ]
    }
} 