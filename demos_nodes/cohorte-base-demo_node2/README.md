
#The configuration 

The is set in the  "run_node2.js" file

@see run_node2.js

The parameters set in the launch configuration overwrite those set in the "run_node2.js" file.

Help:

-c, --color   => to have color in the trace
-d, --debug   => set the debug level of the trace
-v, --verbose => set the verbose level of the trace 
     
 Sample:
               
--base ${project_loc:cohorte-base-demo_node2}
--data-dir ${project_loc:cohorte-data-demo_node2}
--use-config ${project_loc:cohorte-base-demo_node2}/run_node2.js 
--debug
--verbose

#Modules

No module is defined in the repo folder of that node. 

There's a dependency to the "conhorte-base-demo_node1" python project to share the same python sources betwenne the two projects.