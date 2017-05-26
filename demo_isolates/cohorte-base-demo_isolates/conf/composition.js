{
    "name": "cohorte-demo-isolates-app",
    "root": {
        "name": "cohorte-demo-isolates-compo",
        "components": [
            {
                "name"    : "temperature_Viewer",
                "factory" : "org.cohorte.demo.isolates.temperature.Viewer",                
                "isolate" : "isolate-viewer"
            },
            {
                "name"    : "temperature_Sensor",
                "factory" : "org.cohorte.demo.isolates.temperature.Sensor",                
                "isolate" : "isolate-sensor"
            }
        ]
    }
} 