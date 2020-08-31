

ls -1 | while read _F; do _P=${_F^}; echo ionic generate page $_P; done|bash

