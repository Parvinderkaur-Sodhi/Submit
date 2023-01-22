from collections import namedtuple

todo = namedtuple("todo", ["task", "description", "time"])


data = {
    1:todo('Buy Car', 'From Showroom', '14:24'),
    2:todo('Buy Car1', 'From Showroom1', '10:24'),
    3:todo('Buy Apple', 'From Store', '12:24'),
    4:todo('Buy Banana', 'From Shop', '11:24'),
}