Notes_for_tasks_take2.md

todo:
  - bool:is_done
    - toggle state
  	- mark as done
  	- mark as undone
  		
  - bool:deleted
    - toggle state
  	- delete
  	- restore

  
  - {calender_entry_key}:belongs to calender entry
  
  - []:has tags
    - ifinherit tags from calender entry
  - {timestamp}:is_reminder
    - {repeat_rule}:repeating
  - ?{}:[pair_of_coordinates]:remind by location
  - int:estimated time unit
  - int:tracked time unit
  - belongs to ticket

  - order

  - start tracking
