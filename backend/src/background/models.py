from django.db import models
import uuid 

class bgImage(models.Model):
    imagePath = 'Users/wanted/Documents/Coding/homebase/backend/src/background/images/bgImage.jpg'
    defaultImagePath= '/Users/wanted/Documents/Coding/homebase/backend/src/background/images/default.jpg'

    name = models.CharField(max_length=30, default='Placeholder name')
    image = models.ImageField(upload_to=imagePath, default=defaultImagePath)

    def __str__(self):
        return self.content
