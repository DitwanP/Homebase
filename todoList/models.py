from django.db import models
import uuid 

class toDo(models.Model):
    
    uuid = models.UUIDField(unique=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=60, default='Placeholder title')
    content = models.CharField(max_length=240)
    isComplete = models.BooleanField(default=False)

    def __str__(self):
        return self.content
