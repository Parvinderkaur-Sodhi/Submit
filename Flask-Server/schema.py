from graphene import (
    ObjectType, 
    String,
    Time,
    List,
    Schema,
)
from models import data

class todo(ObjectType):
    task=String()
    description= String()
    time=Time()

    def resolve_task(todo, info):
        return todo.task

    def resolve_description(todo, info):
        return todo.description

    def resolve_time(todo, info):
        return todo.time

class Query(ObjectType):
    all_tasks=List(todo)

    def resolve_all_tasks(root, info):
        return data.values()

#schema
schema=Schema(query=Query)

#query
query_string = "{allTasks{task, description, time}}"
print(Schema.execute(query_string))