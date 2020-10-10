from django.db import models


class toDo(models.Model):
    title = models.CharField(max_length=60, default='Placeholder title')
    content = models.CharField(max_length=240)
    isComplete = models.BooleanField(default=False)

    def __str__(self):
        return self.content
