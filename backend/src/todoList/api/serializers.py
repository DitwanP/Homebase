from rest_framework import serializers

from todoList.models import toDo

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = toDo
        fields = ('id', 'title', 'content', 'isComplete')
