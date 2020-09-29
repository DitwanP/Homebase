from django.db import models
import uuid 

class bgImage(models.Model):
    imagePath = 'Users/wanted/Documents/Coding/homebase/backend/src/background/images/bgImage.jpg'
    
    image = models.ImageField(upload_to=imagePath)

    def __str__(self):
        return self.content
