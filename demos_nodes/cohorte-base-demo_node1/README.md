
#The configuration 

The coonfiguration is set in the  "run_node1.js" file

@see run_node1.js

The parameters set in the launch configuration overwrite those set in the "run_node1.js" file.



#-c, --color   => to have color in the trace
#-d, --debug   => set the debug level of the trace
#-v, --verbose => set the verbose level of the trace 
     
 Sample:     
               
--base ${project_loc:cohorte-base-demo_node1}
--data-dir ${project_loc:cohorte-data-demo_node1}
--use-config ${project_loc:cohorte-base-demo_node1}/run_node2.js 
--debug
--verbose