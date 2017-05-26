"""



"""

from pelix.ipopo.decorators import ComponentFactory, Provides 
import random

@ComponentFactory("org.cohorte.demo.isolates.temperature.Sensor")
@Provides("TemperatureService")
class Sensor(object):
        
    def get_temperature(self):
        return random.randrange(0, 50)

